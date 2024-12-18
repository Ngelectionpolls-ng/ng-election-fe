"use client"

import { useContext } from "react"
import {AppContext} from"contexts/App"

export default function Loading(){

    const { loading } = useContext(AppContext);

    return (
        <div className={`fixed z-[99999] w-screen h-screen flex justify-center items-center top-0 left-0 ${loading ? 'block' : 'hidden'}`}>
            <img src="/assets/images/progress.gif" className="w-[150px]" alt="" />
        </div>
    );
}