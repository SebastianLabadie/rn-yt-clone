import React, { useRef } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Video} from 'expo-av'

type VideoPlayerProps={
    videoUrl:string;
    thmbnailUrl:string;

}

function VideoPlayer({videoUrl,thmbnailUrl}:VideoPlayerProps) {
    
   
    return (
        <View>
            <Video
            source={{uri:videoUrl}}
            style={{width:'100%',aspectRatio:16/9}}
            posterSource={{uri:thmbnailUrl}}
            posterStyle={{resizeMode:'cover'}}
            usePoster={false}
            resizeMode='contain'
            useNativeControls
            />
        </View>
    )
}


const styles = StyleSheet.create({
    
})
export default VideoPlayer