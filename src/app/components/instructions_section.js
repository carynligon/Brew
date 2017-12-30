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
import { Timer } from '~/components/timer';

const InstructionsSection = (props) => (
  <View>
    <View style={instructionsStyles.headerContainer}>
      <Header method={methods['aeropress']} />
      <ProgressBar {...props} method={methods['aeropress']} />
    </View>
    <ScrollView contentContainerStyle={instructionsStyles.contentContainer}>
      <View>
        <Image
          style={{width: 400, height: 200}}
          source={require('../assets/chemex.png')}
        />
        <IngredientsList method={methods['aeropress']} />
        <Timer {...props} />
        <View>
          <Text>Step 1</Text>
          <Text>Step 2</Text>
          <Text>Step 3</Text>
        </View>
        <View>
          <Text>Other Recipes</Text>
        </View>
      </View>
    </ScrollView>
  </View>
)

export default InstructionsSection;