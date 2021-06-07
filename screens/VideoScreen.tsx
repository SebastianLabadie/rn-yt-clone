import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useRef } from 'react'
import {View,StyleSheet,Text, Image, Pressable} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import videos from '../assets/data/videos.json'
import video from '../assets/data/video.json'
import comments from '../assets/data/comments.json'
import VideoCard from '../components/VideoCard/VideoCard'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import BottomSheet, { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import VideoComments from '../components/VideoComments/VideoComments'

function VideoScreen() {

    const commentSheetRef = useRef<BottomSheetModal>(null)

    let viewsString = video.views.toString()
    if(video.views > 1000000){
        viewsString = (video.views / 1000000).toFixed(1) +  'm'
    }else if(video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) +  'k'
    }

    const handleOpenComments = () =>{
        commentSheetRef.current?.present()
    }

    return (
        <SafeAreaView>
            {/* Video Player */}
            <VideoPlayer videoUrl={video.videoUrl} thmbnailUrl={video.thumbnail} />
            
            <View style={{flex:1}}>
                    
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
                <View style={styles.userInfoContainer}>
                    <Image style={styles.avatar} source={{uri:video.user.image}} />

                    <View style={styles.userInfoTxtContainer}>
                        <Text style={styles.txtUserName}>{video.user.name}</Text>
                        <Text style={styles.txtUserSubs}>{video.user.subscribers} subscribers</Text>
                    </View>

                    <Text style={styles.btnSubscribe}>Subscribe</Text>
                </View>

                {/* Comments */}
                <View style={styles.commentsContainer}>
                <Text style={styles.txtCommentsCount}>Comments {comments.length}</Text>

                <Pressable onPress={handleOpenComments} style={styles.commentContainer}>
                    <Image style={styles.commentAvatar} source={{uri:video.user.image}} />

                    <View style={styles.commentTxtContainer}>
                        <Text style={styles.txtComment}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nemo!</Text>
                    </View>

                </Pressable>

                </View>
                
                {/* All Comments */}
                <BottomSheetModal
                snapPoints={['75%']} 
                index={0}
                ref={commentSheetRef}
                
                >
                    <VideoComments />
                </BottomSheetModal>
                </View>
        </SafeAreaView>
    )
}

function videoWitchRecomendation(){
    return(
        <BottomSheetModalProvider  >
            <FlatList 
            keyExtractor={(item)=>item.id} 
            data={videos} renderItem={({item})=><VideoCard 
            video={item} />} 
            ListHeaderComponent={
                <VideoScreen />
            }
            />
        </BottomSheetModalProvider>
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
    /* ACTIONS */
    actionListContainer:{
        flexDirection:'row',
        marginVertical:15
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
    /* USER */
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
    },
    userInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        paddingVertical:10,
        borderColor:'#3d3d3d',
        borderBottomWidth:1,
        borderTopWidth:1
    },
    userInfoTxtContainer:{
        flex:1,
        marginHorizontal:10,
    },
    txtUserName:{
        color:'white',
        fontWeight:'bold'
    },
    txtUserSubs:{
        color:'lightgrey'
    },
    btnSubscribe:{
        color:'red',
        fontSize:20,
        fontWeight:'bold'
    },
    /* COMMENTS */
    commentsContainer:{

    },
    txtCommentsCount:{
        color:'white',
        fontWeight:'bold',
        margin:10,
        fontSize:18
    },
    commentContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        paddingVertical:10,
    },
    commentAvatar:{
        width:35,
        height:35,
        borderRadius:17,
    },
    commentTxtContainer:{
        flex:1,
        marginHorizontal:10,
    },
    txtComment:{
        color:'white',
    },
})
export default videoWitchRecomendation