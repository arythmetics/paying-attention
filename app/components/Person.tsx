import { View, Text } from 'react-native'
import React from 'react'

interface PersonProps {
    name: string
}

const Person: React.FC<PersonProps> = ({ name }) => {
  return (
    <View style={{padding: 3}}>
      <Text>{name}</Text>
    </View>
  )
}

export default Person