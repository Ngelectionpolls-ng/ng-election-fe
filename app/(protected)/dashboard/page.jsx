"use client"

import { Button } from "components/ui/button"
import { useRouter } from "next/navigation";


export default function Dashboard(){

    const router = useRouter();

    return (
        <main className="w-screen flex justify-center">
            Dashboard content summary
        </main>
    );

}