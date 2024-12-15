"use client"

export default function Error({error}){
    return (
        <p className={`${error ? 'block' : 'hidden'} bg-yellow-300 w-full p-2 text-red-500 mb-4`}>
            {error}
        </p>
    );
}