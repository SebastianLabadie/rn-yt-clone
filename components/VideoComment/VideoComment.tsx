import React from 'react'
import {View,StyleSheet,Text, Pressable, Image} from 'react-native'

type VideoCommentProps={
    comment:{
        id:string;
        createdAt:string;
        comment:string;
        user:{
            name:string;
            image:string;
        }
       
        likes:number;
        dislikes:number;
        replies:number;
    }
}
function VideoComment({comment}:VideoCommentProps) {
    return (
    <View style={styles.commentContainer}>
        <Image style={styles.commentAvatar} source={{uri:comment.user.image}} />

        <View style={styles.commentTxtContainer}>
            <Text style={styles.txtComment}>{comment.comment}</Text>
        </View>

    </View>
    )
}


const styles = StyleSheet.create({
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
        color:'black',
    },
})
export default VideoComment