import { createSlice } from '@reduxjs/toolkit';

//userSlice = slices of the store like an onion, different sections 
export const userSlice = createSlice({

  name: 'user',
  initialState : {
    user: null,
  },
  
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //actions - dispatch actions login and logout do appropriate behavior
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});
  

//give access two actions outside of the class
export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`


//selectors - how do we access, how do i get value? piece of information create selector give me back the value i'm after
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
