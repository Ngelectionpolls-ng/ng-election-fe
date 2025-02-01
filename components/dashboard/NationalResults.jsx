"use client"

import ResultProgress from "components/dashboard/ResultProgress";

export default function NationalResults({candidates}){

    return (
        <ResultProgress candidates={candidates} />
    );
}