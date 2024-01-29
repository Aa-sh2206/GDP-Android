import {createSlice} from '@reduxjs/toolkit';
const user = {
  admin: {
    firstName: 'Steve',
    middleName: 'harley',
    lastName: 'norman',
    email: 'steveharley@gmail.com',
    phone: '1-238-386-9659',
    class: 'Computer science',
    roleNumber: '12',
  },
};
// Initial state
const homeInit = {
  username: '',
  password: '',
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phone: '',
  class: '',
  roleNumber: '',
};

// User slice
export const homeSlice = createSlice({
  name: 'home',
  initialState: homeInit,
  reducers: {
    // Set onboarding data
    setCred: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.firstName = user.admin.firstName;
      state.middleName = user.admin.middleName;
      state.lastName = user.admin.lastName;
      state.email = user.admin.email;
      state.phone = user.admin.phone;
      state.class = user.admin.class;
      state.roleNumber = user.admin.roleNumber;
    },
    updateCred: (state, action) => {
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.class = action.payload.class;
      state.roleNumber = action.payload.roleNumber;
    },
  },
});

// Actions
export const {setCred, updateCred} = homeSlice.actions;

// Reducer
export default homeSlice.reducer;
