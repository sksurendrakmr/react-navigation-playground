import {StyleSheet, Text, View} from 'react-native';
import Screen from './src/component/Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

/**
 * createNativeStackNavigator is a function which returns
 * an object.
 *
 * The return object has two properties :-
 * 1. Navigator
 * 2. Screen
 * Both of it are react component.
 *
 * Within Screen component, we can define our routes.
 * Screen component take two props
 * 1. name -> name of the route. should be unique.
 * 2. component -> component that should be rendered when we are in this route.
 *
 *StackNavigator component that we have defined knows how to navigate to different
 *screen.
 *
 * Once we have Navigator (in our case StackNavigator), we need to wrap
 * this inside a NavigationContainer.
 *
 * NavigationContainer component is defined in main library of react navigation.
 *
 * Since, The first route is Tweets so home page by default will be Tweets Screen.
 * we can change that by setting a props called initialRouteName is Navigator component.
 *
 * By default, the header title of a screen will be the name of route name.
 *
 */
const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
