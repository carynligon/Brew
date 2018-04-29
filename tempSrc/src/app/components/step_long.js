import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';
import { stepLongStyles } from '~/styles';
import methods from '~/fixtures/methods';

const StepLongForm = ({ step, index }) => {
  return (
  <View>
    <Image
      style={{width: 400, height: 200}}
      source={{uri: step.img}}
    />
      <View style={stepLongStyles.textContainer}>
      <Text style={stepLongStyles.stepNumber}>Step {index}</Text>
      <Text style={stepLongStyles.title}>{step.title}</Text>
      <Text style={stepLongStyles.directions}>{step.directions_long}</Text>
    </View>
  </View>
  )
}

export default StepLongForm;