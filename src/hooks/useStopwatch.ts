import {useEffect, useState} from "react";

export default function useStopwatch(isRunning:boolean){

    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{

        if(!isRunning) return;

        const timer = setInterval(()=>{
            setSeconds(s=>s+1);
        },1000);


        return ()=>clearInterval(timer);

    },[isRunning]);


    return seconds;
}