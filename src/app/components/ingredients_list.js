import React, { Component } from 'react';
import {
    FlatList,
    ListItem,
    Text,
    View
} from 'react-native';
import { timerStyles } from '~/styles';

export default class IngredientsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { method } = this.props
        return (
            <View style={timerStyles.instructionList}>
                <Text style={timerStyles.instructionListHeader}>What You'll Need:</Text>
                { method.ingredients.map((ingredient, i) => (
                    <View key={`ingredient-${i}`}><Text>{ingredient}</Text></View>
                ))}
            </View>
        );
    }
}