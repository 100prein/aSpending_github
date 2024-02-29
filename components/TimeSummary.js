import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TimeSummary = () => {
  return (
    /*Import Calendar API*/
    /*If the user pressed "save" on his total budget, it will be added to the weekly timeframe.*/
    <View style={styles.container}>
     <View>
        <h1>Your weekly Summary</h1>
     </View>
     <View>
        <Text>02/4/2024 - 02/10/2024: -$390</Text>
     </View>
     <View>
        <Text>02/11/2024 - 02/17/2024: $1000</Text>
     </View>
     <View>
        <Text>02/18/2024 - 02/24/2024: $590</Text>
     </View>
     <View>
        <Text>02/25/2024 - 03/2/2024: $90</Text>
     </View>
     <View>
        <Text><h3>February:</h3> $1200</Text>
     </View>
    </View>
    
  )
}

export default TimeSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
})