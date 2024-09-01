import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const authLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
          />
         <Stack.Screen 
          name="sign-up"
          options={{
            headerShown: false
          }} />
      </Stack>
      <StatusBar />
      </>
  )
}

export default authLayout

const styles = StyleSheet.create({})