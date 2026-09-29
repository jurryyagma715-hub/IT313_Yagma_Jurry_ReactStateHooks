import {View,Text,Button,StyleSheet} from "react-native";


export default function PracticeTracker({
solved,
onSolve,
onReset
}:any){

return(
<View style={styles.box}>

<Text style={styles.title}>
Solved: {solved}
</Text>


<Button
title="Solve +1"
onPress={onSolve}
/>


<Button
title="Reset"
onPress={onReset}
/>


{
solved>=5 &&
<Text>
Great job!
</Text>
}


</View>
)

}


const styles=StyleSheet.create({

box:{
gap:10,
marginBottom:20
},

title:{
fontSize:25
}

});