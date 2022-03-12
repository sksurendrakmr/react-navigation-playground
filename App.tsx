import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Screen from './src/component/Screen';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

type RootParamList = {
  TweetDetails: {id: number};
};
type Props = NativeStackScreenProps<RootParamList, 'TweetDetails'>;

//useNavigation hook
const Link = () => {
  const navigation = useNavigation<Props>();
  return (
    <Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />
  );
};

/**
 * passing a parameter to a target screen
 * In navigate() as optional 2nd argument, we pass an object.
 * In this object, we can pass one or more key value pairs.
 * In our case, either we can pass id of the tweet or the entire tweet object.
 *
 */
const Tweets = ({navigation}: Props) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    />
    <Link />
  </Screen>
);

/**
 * since we pass params to this screen from Tweet component.
 * we have one other special prop called 'route'.
 * React navigation automatically inject this prop to all our Screen(<Stack.Screen />) component.
 *
 * For child component, we will not have access to this route props.
 * There we can make use of useRoute hooks.
 *
 * route.params will return same object that we pass from other component to
 * this.
 */

type TweetDetailsParamList = {
  TweetDetails: {id: number};
};
type TweetDetailsProps = NativeStackScreenProps<
  TweetDetailsParamList,
  'TweetDetails'
>;
const TweetDetails = ({route}: TweetDetailsProps) => (
  <Screen>
    <Text style={{color: 'black'}}>Tweet Details: {route.params.id}</Text>
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
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{title: 'Tweet Details'}}
    />
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
