'use client'
import { useEffect } from "react"


export default function Store(){

    useEffect(() => {
        console.log(123)
    }, [])

    return(
        <>store</>
    )
}