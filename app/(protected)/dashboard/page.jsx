"use client"

import { Button } from "components/ui/button"
import { useRouter } from "next/navigation";


export default function Dashboard(){

    const router = useRouter();

    return (
        <main className="flex-1 flex justify-center">
            Dashboard content summary
        </main>
    );

}