import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';
import methods from '~/fixtures/methods';
import ProgressBar from '~/components/progress_bar';
import Header from '~/components/header';
import { instructionsStyles } from '~/styles';


import IngredientsList from '~/components/ingredients_list';
import StepLongForm from '~/components/step_long';
import { Timer } from '~/components/timer';

const InstructionsSection = (props) => {
  return (
  <View>
    <View style={instructionsStyles.headerContainer}>
      <Header method={methods['chemex']} />
      <ProgressBar {...props} method={methods['chemex']} />
    </View>
    <ScrollView contentContainerStyle={instructionsStyles.contentContainer}>
      <View>
        <Image
          style={{width: 400, height: 200}}
          source={require('../assets/chemex.png')}
        />
        <IngredientsList method={methods['chemex']} />
        <Timer {...props} />
        <View>
          {methods['chemex'].nonTimedSteps.map((step, i) => (
            <StepLongForm step={step} index={i + 1} key={`non-timed-step-${i}`} />
          ))}
          {methods['chemex'].timedSteps.map((step, i) => (
            <StepLongForm step={step} index={i + methods['chemex'].nonTimedSteps.length + 1} key={`timed-step-${i}`} />
          ))}
        </View>
        <View>
          <Text>Other Recipes</Text>
        </View>
      </View>
    </ScrollView>
  </View>
  );
}

export default InstructionsSection;