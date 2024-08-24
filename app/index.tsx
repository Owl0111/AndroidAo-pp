import {  Image,Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Slot, Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../constants';
const App = () => {
  return (
  
      <SafeAreaView style={{
        backgroundColor: '#161622',
        height:'100%'
      }} >
        <ScrollView contentContainerStyle={{
          height:'100%'
          }}>
            <View className='w-full items-center h-full px-4'>

                  <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain'></Image>
                  <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode='contain'></Image>
                  <View className='relative mt-5'>
                    <Text className='text-3xl text-center text-white font-pbold'> 
                        Discover Endless Possibilities with <Text className='text-secondary-200'> Aora</Text>
                    </Text>
                  </View>
            </View>

        </ScrollView>
      
      </SafeAreaView>
    
  )
}

export default App

