
"use client"

import React, {useContext, useEffect, setState} from "react";
import { Button } from "components/ui/button"
import { AppContext } from "contexts/App";
import { DashboardContext } from "contexts/Dashboard";
import Error from "components/commons/Error";
import Link from "next/link";
import { constants } from "helpers";

import { useToast } from "hooks/use-toast"
import { useRouter } from "next/navigation";

export default function Profile(){

    const router = useRouter();
    const {toast} = useToast();
    const {setLoading} = useContext(AppContext);
    const {setActiveMenu} = useContext(DashboardContext);

    useEffect(() => {
        setLoading(false);
        setActiveMenu(constants.PROFILE);
    });

    return (
        <main className="flex-1 flex justify-center">
            Profile page content
        </main>
    );

}