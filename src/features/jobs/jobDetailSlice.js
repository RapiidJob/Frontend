import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobDetail: {},

}

const jobDetailSlice = createSlice({
  name: 'jobDetail',
  initialState,
  reducers: {
    changeJobDetail(state,action){
        state.jobDetail = action.payload;
      }
    
  },
})

export const { changeJobDetail} = jobDetailSlice.actions
export default jobDetailSlice.reducer
