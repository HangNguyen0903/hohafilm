import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rootState } from '../store'
import { IAuthState, IResponseLogin } from '../../interfaces/auth'

// Define the initial state using that type
const initialState: IAuthState = {
    token: {},
    user: {}
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<IResponseLogin>) => {
      state.token = action.payload
    }
  }
})

export const { login } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectToken = () => rootState.auth.token

export default authSlice.reducer