import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface LoginState {
  isLoggedIn: boolean
  userInitials: string
  userName: string
}

// Define the initial state using that type
const initialState: LoginState = {
  isLoggedIn: true,
  userInitials: '',
  userName: ''
}

export const logInSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    setUserInitials: (state, action: PayloadAction<string>) => {
      state.userInitials = action.payload
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    }
  }
})

export const { setIsLoggedIn, setUserInitials, setUserName } =
  logInSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoggedInSelector = (state: RootState) => state.app.isLoggedIn
export const userInitialsSelector = (state: RootState) => state.app.userInitials
export const userNameSelector = (state: RootState) => state.app.userName

export default logInSlice.reducer
