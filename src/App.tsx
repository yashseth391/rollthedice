import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View,Pressable} from 'react-native';
import React, { useState } from 'react';
import Diceone from '../assests/One.png';
import Dicetwo from '../assests/Two.png';
import Dicethree from '../assests/Three.png';
import Dicefour from '../assests/Four.png';
import Dicefive from '../assests/Five.png';
import Dicesix from '../assests/Six.png';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
type DiceProps = PropsWithChildren<{
  imageurl: ImageSourcePropType;
}>;


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice = ({imageurl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageurl} />
    </View>
  );
};

export default function App() {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(Diceone)
  
  const rollDiceOnTap=() => {
    let randomNumber= Math.floor(Math.random()*6)+1;

    switch (randomNumber) {
       case 1:
       setDiceImage(Diceone);
        break;
        case 2:
          setDiceImage(Dicetwo);
           break;
           case 3:
       setDiceImage(Dicethree);
        break;
        case 4:
       setDiceImage(Dicefour);
        break;
        case 5:
       setDiceImage(Dicefive);
        break;

        case 6:
       setDiceImage(Dicesix);
        break;



      default:
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  
  return (
    <View style={styles.container}>
      <Dice imageurl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
       <Text style={styles.rollDiceBtnText}> roll the dice</Text>
      </Pressable>
    </View>
  );
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
