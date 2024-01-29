//configure routes to the application
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//screens
import Home from '../screens/home';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import Details from '../screens/details';
import CourseDetails from '../screens/courseDetails';
//screenOptions={{headerShown: false}}
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'CourseTune'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Department details'}}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{title: 'Course details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
