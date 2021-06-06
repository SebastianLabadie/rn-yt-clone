import React from 'react'
import {View,StyleSheet,Text, FlatList} from 'react-native'
import VideoCard from '../components/VideoCard/VideoCard'
import videos from '../assets/data/videos.json'
function HomeScreen() {
    return (
        <View>
           <FlatList keyExtractor={(item)=>item.id} data={videos} renderItem={({item})=><VideoCard video={item} />}  />
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        color:'#fff'
    },
})
export default HomeScreen