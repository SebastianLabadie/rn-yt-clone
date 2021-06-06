import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import {View,StyleSheet,Text, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import video from '../assets/data/video.json'

function VideoScreen() {

    let viewsString = video.views.toString()
    if(video.views > 1000000){
        viewsString = (video.views / 1000000).toFixed(1) +  'm'
    }else if(video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) +  'k'
    }

    return (
        <SafeAreaView>
            {/* Video Player */}
            <Image style={styles.videoPlayer} source={{uri:video.thumbnail}} />
            
            
            {/*  Video Info */}
            <View style={styles.middleContainer}>
                <Text style={styles.tags}>{video.tags}</Text>
                <Text style={styles.title}>{video.title}</Text>
                <Text style={styles.subTitle}>{video.user.name} {viewsString} {video.createdAt}  </Text>
            </View>

            {/* Action List */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actionListContainer}>
                <View style={styles.actionListItem}>
                    <AntDesign name="like2" size={30} color="white" />
                    <Text style={styles.actionText}>{video.likes}</Text>
                </View>
                <View style={styles.actionListItem}>
                    <AntDesign name="dislike2" size={30} color="white" />
                    <Text style={styles.actionText}>{video.dislikes}</Text>
                </View>
                <View style={styles.actionListItem}>
                    <AntDesign name="download" size={30} color="white" />
                    <Text style={styles.actionText}>Download</Text>
                </View>
                <View style={styles.actionListItem}>
                    <MaterialCommunityIcons name="share-outline" size={30} color="white" />
                    <Text style={styles.actionText}>Share</Text>
                </View>
                <View style={styles.actionListItem}>
                    <Ionicons name="md-chatbubbles-outline" size={30} color="white" />
                    <Text style={styles.actionText}>Live Chat</Text>
                </View>
                <View style={styles.actionListItem}>
                    <Ionicons name="md-chatbubbles-outline" size={30} color="white" />
                    <Text style={styles.actionText}>Live Chat</Text>
                </View>
                <View style={styles.actionListItem}>
                    <Ionicons name="md-chatbubbles-outline" size={30} color="white" />
                    <Text style={styles.actionText}>Live Chat</Text>
                </View>
                <View style={styles.actionListItem}>
                    <Ionicons name="md-chatbubbles-outline" size={30} color="white" />
                    <Text style={styles.actionText}>Live Chat</Text>
                </View>
            </ScrollView>
            
            {/*  User Info */}
            
            {/* Comments */}

            {/* Recommends Videos */}
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    videoPlayer:{
        width:'100%',
        aspectRatio:16/9
    },
    middleContainer:{
        marginHorizontal:15
     },
     title:{
         color:'#fff',
         fontSize:16,
         fontWeight:'500',
         marginVertical:10
     },
     subTitle:{
         color:'grey',
         fontSize:14,
         fontWeight:'500'
     },
     tags:{
        color:'#0094e3',
        fontSize:14,
        fontWeight:'500'
    },
    actionListContainer:{
        flexDirection:'row',
    },
    actionListItem:{
        width:80,
        height:60,
        justifyContent:'space-around',
        alignItems:'center',
    },
    actionText:{
        color:'white'
    },
})
export default VideoScreen