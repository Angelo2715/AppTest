import React, {Component} from "react";
import {View, Text,FlatList,ActivityIndicator, Pressable,StyleSheet} from 'react-native';
import Http from "../../libs/http";
import TaskItem from "./TaskItem";

class TaskScreen extends Component{

    state={
        datas:[],
        loading:false,
    }

    componentDidMount=async()=>{
        this.setState({loading:true});
        const res= await Http.instance.get("https://6172cfe5110a740017222e2b.mockapi.io/elements");

        //console.log("datos deatlles",res);
        this.setState({datas:res, loading:false});
    }

    handlePress=()=>{
        console.log("go to detail",this.props);
        this.props.navigation.navigate('List')
    }
    handlePresss=()=>{
        console.log("go to detail",this.props);
        this.props.navigation.navigate('TaskS')
    }
    
    render (){
        const {datas, loading }=this.state;
        return(
            <View style ={styles.container}>
                <Text style={styles.title}> Inicio</Text>
                <Pressable style={styles.btn} onPress={this.handlePresss}>
                    <Text style={styles.btnText} >Task</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={this.handlePress}>
                    <Text style={styles.btnText} >List</Text>
                </Pressable>
            </View>
            /*<View style ={styles.container}>
                {
                    loading?
                    <ActivityIndicator 
                    style={styles.loader}
                    color="#fff" 
                    size="large"/>
                    :null
                }
               <FlatList
               data={datas}
               renderItem={({item}) =>
           
               <TaskItem item={item}/>
               }
               />
            </View>*/
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    titleText:{
        color:"fff",
        textAlign:"center",
    },
    btn:{
        padding:8,
        backgroundColor:"blue",
        borderRadius:8,
        margin:16
    },
    btnText:{
        color:"#fff",
        textAlign:"center",
    },
    loader:{
        marginTop:60
    },
    title: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: "bold",
        textAlign:"center",
      },
});

export default TaskScreen;