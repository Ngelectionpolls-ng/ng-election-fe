"use client"

export default function Error({error}){
    return (
        <p className={`${error ? 'block' : 'hidden'} text-xs rounded-xl bg-red-800 w-full p-4 text-yellow-200 mb-4`}>
            {error}
        </p>
    );
}