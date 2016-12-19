import React, { Component } from 'react';
import {
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class Home extends React.Component {
  render() {
    return (
      <View>
        <View className="feed_item">
            <Image
                source={{uri: 'http://www.goodmorningcoffee.com/images/CoffeeCup.png'}}
                />
            <Text>
                Galão black cortado et con panna, frappuccino, acerbic, kopi-luwak flavour aroma robust doppio, filter roast breve and roast percolator mocha. Frappuccino macchiato caffeine aged, skinny cortado doppio, dark extraction and, flavour cream, viennese body, carajillo seasonal dark, barista sit strong extraction qui black grounds. Body est single shot cultivar dark, froth single shot, foam, frappuccino percolator plunger pot sugar siphon decaffeinated. Robusta shop, con panna aftertaste galão mazagran white, breve, siphon as crema con panna caffeine ut filter siphon coffee cup chicory. Instant lungo coffee, steamed ut café au lait sit strong, spoon rich, chicory white, in percolator spoon crema beans latte coffee wings espresso irish beans.
            </Text>
        </View>
      </View>
    );
  }
}
