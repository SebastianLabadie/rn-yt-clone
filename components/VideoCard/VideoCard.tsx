import { Entypo } from '@expo/vector-icons'
import React from 'react'
import {View,StyleSheet,Text, Image} from 'react-native'

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
    return (
        <View>
            <View>
                <Image style={styles.thumbnail} source={{uri:video.thumbnail}} />
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{video.duration}</Text>
                </View>
            </View>

            <View style={styles.titleRow}>
                {/* avatar */}
                <Image style={styles.avatar} source={{uri:video.user.image}}/>
                {/* middlecontainer title,subtitle,etx */}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subTitle}>{video.user.name} {video.views} {video.createdAt}  </Text>
                </View>
                {/* tree icon */}
                <Entypo name="dots-three-vertical" size={18} color="white" />
            </View>
        </View>
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