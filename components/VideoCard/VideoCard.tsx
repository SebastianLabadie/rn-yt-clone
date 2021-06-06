import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {View,StyleSheet,Text, Image} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

type videoCardPropsType = {
    video:{
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        user: {
          name: string;
          image: string;
        },
        views: number;
    }
}

function VideoCard({video}:videoCardPropsType) {

    const minutes = Math.floor(video.duration / 60)
    const seconds = video.duration % 60 

    let viewsString = video.views.toString()
    if(video.views > 1000000){
        viewsString = (video.views / 1000000).toFixed(1) +  'm'
    }else if(video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) +  'k'
    }

    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('VideoScreen')}>
            <View>
                <Image style={styles.thumbnail} source={{uri:video.thumbnail}} />
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : null}{seconds}</Text>
                </View>
            </View>

            <View style={styles.titleRow}>
                {/* avatar */}
                <Image style={styles.avatar} source={{uri:video.user.image}}/>
                {/* middlecontainer title,subtitle,etx */}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subTitle}>{video.user.name} {viewsString} {video.createdAt}  </Text>
                </View>
                {/* tree icon */}
                <Entypo name="dots-three-vertical" size={18} color="white" />
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    thumbnail:{
        width:'100%',
        aspectRatio: 16/9
    },
    timeContainer:{
        backgroundColor:'rgba(0,0,0,.7)',
        height:25,
        width:55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        position:'absolute',
        right:5,
        bottom:5
    },
    time:{
        color:'#fff',
        fontWeight:'bold'
    },
    titleRow:{
        flexDirection:'row',
        alignContent:'center',
        padding:10,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
    },
    middleContainer:{
       flex:1,
       marginHorizontal:15
    },
    title:{
        color:'#fff',
        fontSize:16,
        fontWeight:'500'
    },
    subTitle:{
        color:'grey',
        fontSize:14,
        fontWeight:'500'
    },
})
export default VideoCard