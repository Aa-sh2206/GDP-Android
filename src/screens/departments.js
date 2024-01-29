import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../components/header';
import DepartmentCard from '../components/departments';
import {useSelector, useDispatch} from 'react-redux';
import {setCred} from '../store/slices/homeSlice';

const Departments = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Grad');
  const [items, setItems] = useState([
    {label: 'Masters', value: 'Grad'},
    {label: 'Bachelors', value: 'UnderGrad'},
  ]);
  const depHash = {
    Grad: [
      {
        id: 1,
        title: 'School of Computer science and Information systems',
        chapters_count: 3,
        time: '2hrs',
      },
      {
        id: 2,
        title: 'Department of fine and performing arts',
        chapters_count: 5,
        time: '7hrs',
      },
      {
        id: 3,
        title: 'School of Health science and wellness',
        chapters_count: 15,
        time: '17hrs',
      },
      {
        id: 4,
        title: 'School of communication and mass media',
        chapters_count: 9,
        time: '9hrs',
      },
    ],
    UnderGrad: [
      {
        id: 1,
        title: 'Bachelor of Fine Arts',
        chapters_count: 5,
        time: '9hrs',
      },
      {
        id: 2,
        title: 'Bachelor of Engineering',
        chapters_count: 15,
        time: '19hrs',
      },
      {
        id: 3,
        title: 'Bachelor of Architecture Degree',
        chapters_count: 15,
        time: '19hrs',
      },
      {
        id: 4,
        title: 'Bachelor of Philosophy',
        chapters_count: 3,
        time: '4hrs',
      },
      {
        id: 5,
        title: 'Bachelor of Design',
        chapters_count: 3,
        time: '4hrs',
      },
    ],
  };
  const dispatch = useDispatch();
  const departmentRenderItem = ({item, index, sperator}) => {
    return <DepartmentCard dep={item} navigation={navigation} />;
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Header
        name="Departments"
        login={() => {
          dispatch(setCred({username: '', password: ''}));
          navigation.popToTop();
        }}
      />
      <View style={{marginTop: 10, padding: 16}}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'Choose a class'}
          style={{
            borderColor: '#00420C',
          }}
          labelStyle={{
            color: '#00420C',
          }}
          textStyle={{
            color: '#00420C',
          }}
        />
        <View style={{marginTop: 24}}>
          {value && depHash[value] && (
            <FlatList
              data={depHash[value]}
              keyExtractor={dep => dep.id}
              renderItem={departmentRenderItem}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                gap: 16,
              }}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Departments;
