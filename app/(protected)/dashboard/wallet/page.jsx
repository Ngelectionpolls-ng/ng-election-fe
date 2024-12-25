
"use client"

import React, {useContext, useEffect, setState} from "react";
import { Button } from "components/ui/button"
import { useRouter } from "next/navigation";
import { AppContext } from "contexts/App";

export default function Wallet(){

    const router = useRouter();
    const {setLoading} = useContext(AppContext);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <main className="flex-1 flex justify-center">
            Wallet Page
        </main>
    );

}