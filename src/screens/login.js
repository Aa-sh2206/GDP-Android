import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// store
import {setCred} from '../store/slices/homeSlice';

const Login = ({route, navigation}) => {
  const {type} = route.params;
  const homeData = useSelector(state => state.home);
  const [user, setUser] = React.useState(homeData?.username);
  const [password, setPassword] = React.useState(homeData?.password);
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (!user && !password) {
      dispatch(setCred({username: '', password: ''}));
      Alert.alert('username and password is required');
    } else {
      if (user === 'admin' && password === 'Admin@123') {
        dispatch(setCred({username: user, password: password}));
        navigation.navigate('Dashboard');
      } else {
        dispatch(setCred({username: '', password: ''}));
        Alert.alert('user or password is incorrect');
      }
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View>
        <Image
          source={require('../assets/images/head.png')}
          style={styles.img}
        />

        <View
          style={{
            padding: 24,
          }}>
          <TextInput
            style={styles.input}
            onChangeText={setUser}
            value={user}
            placeholder="Username"
            placeholderTextColor={'#000'}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={'#000'}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => submitHandler()}>
            <Text style={styles.buttonText}>Login As {type}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#B3B3B3',
    padding: 10,
    color: '#000',
  },
  text: {
    fontSize: 34,
    fontFamily: 'Nunito-Regular',
    color: '#000',
    lineHeight: 50,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    color: '#fff',
    lineHeight: 30,
    textAlign: 'center',
  },
  img: {
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width,
  },
  button: {
    backgroundColor: '#003B70',
    paddingVertical: 12,
    marginTop: 20,
    width: '94%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default Login;
