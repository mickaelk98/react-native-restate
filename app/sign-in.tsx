import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const signIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext()

  if(!loading && isLogged) return <Redirect href="/" />

  const handleLogin = async () => {
    const response = await login()

    if(response) {
      refetch()
    } else {
      Alert.alert('Error', "failed to login")
    }
    
    
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
        <View className='px-10'>
          <Text className='font-rubik text-base text-center uppercase text-black-200'>Welcome to restate</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2 capitalize'>Let's get you closer to {"\n"} <Text className='text-primary-300'>your ideal home</Text> </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to Restate with google</Text>
          <TouchableOpacity className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5' onPress={handleLogin}>
            <View className='flex flex-row items-center justify-center'>
              <Image source={icons.google} className='w-6 h-6' resizeMode='contain' />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
      
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn;