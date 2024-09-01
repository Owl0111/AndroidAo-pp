import { Image, Text, View, ScrollView, } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants';
import CustomButton from '@/components/CustomButton';
const App = () => {
  return (

    <SafeAreaView style={{
      backgroundColor: '#161622',
      height: '100%'
    }} >

      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>
        <View className='w-full min-h-[85vh] items-center justify-center px-4'>

          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain'></Image>
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode='contain'></Image>
          <View className='relative mt-5'>
            <Text className='text-3xl text-center text-white font-pbold'>
              Discover Endless Possibilities with <Text className='text-secondary-200'> Aora</Text>
            </Text>
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => { router.push('/sign-in') }}
            containerStyles='w-full mt-7' />
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </SafeAreaView>

  )
}

export default App

