import {View,Button,StyleSheet} from "react-native";
import {useState} from "react";

import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../hooks/useStopwatch";


export default function LabScreen(){

const [solved,setSolved]=useState(0);
const [isRunning,setIsRunning]=useState(false);

const seconds=useStopwatch(isRunning);


return(
<View style={styles.container}>

<PracticeTracker
solved={solved}
onSolve={()=>setSolved(s=>s+1)}
onReset={()=>setSolved(0)}
/>


<Stopwatch
seconds={seconds}
isRunning={isRunning}
/>


<View style={styles.buttons}>

<Button
title="Start"
onPress={()=>setIsRunning(true)}
/>

<Button
title="Stop"
onPress={()=>setIsRunning(false)}
/>

</View>


</View>
)

}


const styles=StyleSheet.create({

container:{
flex:1,
padding:20,
justifyContent:"center"
},

buttons:{
gap:10,
marginTop:20
}

});