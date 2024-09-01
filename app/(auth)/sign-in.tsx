import { Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import React from 'react'
import images from '../../constants/images';
import FormField from '@/components/FormField';
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {

  }
  return (
    <SafeAreaView style={{
      backgroundColor: '#161622',
      height: '100%'
    }} >

      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-pbold"> Log in to Aora </Text>
          <FormField
            title={"Email"}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={"mt-7"}
            keyboardType="email-address"
            placeholder={"Please enter your E-mail"}
          />
          <FormField
            title={"Password"}
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={"mt-7"}
            placeholder={"Please enter your password"}
          />
          <CustomButton
            title="Sign in"
            textStyles={""}
            handlePress={submit}
            containerStyles="mt-8"
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className='text-lg text-secondary font-psemibold '> Sign up! </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;
