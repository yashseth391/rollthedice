import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Diceone} from '../assests/One.png'
import {Dicetwo} from '../assests/Two.png'
import {Dicethree} from '../assests/Three.png'
import {Dicefour} from '../assests/Four.png'
import {Dicefive} from '../assests/Five.png'
import {Dicesix} from '../assests/Six.png'
import type { PropsWithChildren } from 'react'


type DiceProps=PropsWithChildren<{
  imageurl:ImageSourcePropType,
  
}>

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});