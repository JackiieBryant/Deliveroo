import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions ({
            headerTitle : 'TESTING'
         )}
    }, [])

  return (
    <View>
      <Text className="text-red-700">HomeScreen</Text>
    </View>
  )
}

export default HomeScreen