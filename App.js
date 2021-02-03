import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import { AppTabNavigator } from './components/AppTabNavigator.js'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppDrawerNavigator } from './components/DrawerComponent.js'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}
const switchNavigator = createSwitchNavigator({

  WelcomeScreen: WelcomeScreen,
  BottomTab: AppDrawerNavigator,
})
const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

// function stopCodeImplode(noboom) {
//     this.noboom = this.code.code();
// }
// function saveCode(antivirus) {
//     this.protectionSequence = {
//         this.anti-virus = kill virus.anti();
//         this.sheild = protect saveCode.destroy();
//         this.requestAssistance = call help.(
//             if (this.sheild.fail()) {
//                 call 911/100
//             }
//         )
//         this.replace = this.code.code();
//     }
//     stopCodeImplode();
// }
