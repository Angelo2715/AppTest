import React, {Component} from "react";
import {View, Text,FlatList,ActivityIndicator, Pressable,StyleSheet} from 'react-native';
import Http from "../../libs/http";
import TaskItem from "./TaskItem";

class ListScreen extends Component{
    
    state={
        datas:[],
        loading:false,
    }

    componentDidMount=async()=>{
        this.setState({loading:true});
        const res= await Http.instance.get("https://6172cfe5110a740017222e2b.mockapi.io/elements");
        //const res= await Http.instance.get("https://api.coinlore.net/api/tickers/");

        console.log("datos detlles",res);
        this.setState({datas:res, loading:false});
    }

    handlePress=()=>{
        console.log("go to detail",this.props);
        this.props.navigation.navigate('List')
    }
    render(){
        const {datas, loading }=this.state;
        return(
            <View style ={styles.container}>
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
             /*  <View>
                    <Text>{item.name}</Text>
               </View> */
               <TaskItem item={item}/>
               }
               />
            </View>
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
});
export default ListScreen;