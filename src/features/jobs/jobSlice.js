import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobs: [],
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload
    },
    addJob(state, action) {
      state.jobs.push(action.payload)
    },
    removeJob(state, action) {
      state.jobs = state.jobs.filter(job => job.id !== action.payload)
    },
  },
})

export const { setJobs, addJob, removeJob } = jobSlice.actions
export default jobSlice.reducer
