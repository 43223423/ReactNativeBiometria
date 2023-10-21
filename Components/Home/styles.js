import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#3A3737",    
    },
    ContainerTitle:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop:'30%'
    },
    TitleText:{
        color:'white',
        fontSize:26,
        textAlign:'center'
    },
    ContainerBtn:{
        marginTop:'40%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonExit:{
        width:210,
        height:45,
        backgroundColor: "#E30613",
        borderRadius:15,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    TextBtn:{
        color:'white',
        fontSize:18
    }
})
export default styles