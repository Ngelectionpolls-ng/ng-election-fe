"use client"

import React, {createContext, useEffect, useState} from "react";
import { GetElections } from "services/elections/api";


const AppContext = createContext();

const AppProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [imageCaptured, setImageCaptured] = useState(null);
    const [fileCaptured, setFileCaptured] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [candidates, setCandidates] = useState([]);

    const [elections, setElections] = useState([]);
    const [currentElection, setCurrentElection] = useState(null);

    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(locationGranted, locationRefused);
        } else {
          alert("Location permission not granted");
        }
    }
      
    const locationGranted = (position) => {
        console.log("Location", position);
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
    }

    function locationRefused() {
        alert("Sorry, no position available.");
    }


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

        getLocation();
        
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
            const resp = response.data.data.elections;
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
                                     imageCaptured, setImageCaptured,
                                     fileCaptured, setFileCaptured,
                                     setLoading, currentElection, setCurrentElection, 
                                     elections, setElections, 
                                     longitude, latitude, 
                                     candidates, setCandidates}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};