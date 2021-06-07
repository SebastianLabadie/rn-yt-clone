import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import comments from '../../assets/data/comments.json'
import VideoComment from '../VideoComment/VideoComment'

function VideoComments() {
    return (
        <View style={{flex:1}}>
            <FlatList keyExtractor={(item)=>item.id} data={comments} renderItem={({item})=><VideoComment comment={item} />}/>
        </View>
    )
}


const styles = StyleSheet.create({
    
})
export default VideoComments