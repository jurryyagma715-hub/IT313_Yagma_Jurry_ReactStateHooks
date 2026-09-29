import {View,Text,StyleSheet} from "react-native";


export default function Stopwatch({
seconds,
isRunning
}:any){

return(
<View style={styles.box}>

<Text style={styles.time}>
{String(Math.floor(seconds/60)).padStart(2,"0")}:
{String(seconds%60).padStart(2,"0")}
</Text>


<Text>
{isRunning?"Running...":"Paused"}
</Text>


</View>
)

}


const styles=StyleSheet.create({

box:{
marginBottom:20
},

time:{
fontSize:30
}

});