"use client"

import React, {createContext, useEffect, useState} from "react";
import { GetElections } from "services/elections/api";


const AppContext = createContext();

const AppProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const [elections, setElections] = useState([]);
    const [currentElection, setCurrentElection] = useState(null);

    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        let storedUser = localStorage.getItem('user');
        if(storedUser != undefined && storedUser != null){
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
            setToken(localStorage.getItem('token'));  
        }
        if(localStorage.getItem('token')){
            getElections();
        }
        
    }, []);

    const getElections = async () => {
            setError(null);
            setFetching(true);
            const response = await GetElections();
            setFetching(false);
    
            console.log('elections', response);
            if(response.status >= 200 && response.status < 300){    
                
                //we fill the elections
                // const resp = response.data.docs;
                const resp = response.data;
                setElections(resp);
                
            }else{
    
                if(response.response.data.message){
                    setError(response.response.data.message);
                    toast({
                        variant: 'destructive',
                        description: response.response.data.message
                    });
                }else{
                    toast({
                        variant: 'destructive',
                        description: 'Something went wrong. Please try again'
                    });
                }
            }
        }

    return (
        <AppContext.Provider value={{user, token, isLoggedIn, loading, 
                                     setLoading, currentElection, setCurrentElection, 
                                     elections, setElections}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};