import React,{useState} from 'react';
import {View,ScrollView,StyleSheet,Image,Text} from 'react-native';
import JSON from './db.json';


function ListItem(){
    const [data] = useState(JSON);

    return(
        <ScrollView style={styles.listContainer}>
            <Text>List Of Items</Text>
            <View>
                {data.map((item) => {
                    return(
                        <View key={item._id}>
                            <Image style={styles.placeImage}
                            source={{uri:item.image}}/>
                            <Text style={styles.textval}>{item.name}</Text>
                           
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
    },
    placeImage:{
        height:200
    },
    textval:{
        fontSize:30
    }
})


export default ListItem