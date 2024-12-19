
"use client"

import React, {useContext, useEffect, setState} from "react";
import { Button } from "components/ui/button"
import { useRouter } from "next/navigation"
import {AppContext} from "contexts/App"


export default function EyewitnessReport(){

    const router = useRouter();
    const {setLoading} = useContext(AppContext);

    useEffect(() => {
        setLoading(false);
    });

    return (
        <main className="w-screen flex justify-center">
            Eyewitness report content summary
        </main>
    );

}