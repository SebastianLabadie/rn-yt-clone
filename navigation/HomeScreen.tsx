import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import VideoCard from '../components/VideoCard/VideoCard'
import videos from '../assets/data/videos.json'
function HomeScreen() {
    return (
        <View>
            <VideoCard video={videos[0]} />
            <VideoCard video={videos[1]} />
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        color:'#fff'
    },
})
export default HomeScreen