import { createSlice } from '@reduxjs/toolkit'
import Step from '../../../constants/stepEnum'

const initialState = {
  value: Step.items,
}

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    // 下一步，最大為 5
    nextStepAction: (state) => {
      if(state.value < 5){
        state.value += 1
      }
      return
    },
    // 上一步，最小為 1
    lastStepAction: (state) => {
      if(state.value > 1){
        state.value -= 1
      }
      return
    },
    getStepAction: (state, actions) => {
      state.value = actions.payload
    }
  },
})

export const { nextStepAction, lastStepAction, getStepAction } = stepSlice.actions

export default stepSlice.reducer