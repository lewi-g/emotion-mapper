import { GO_DEEPER1, G0_DEEPER2, FINAL_SELECTION, SUBMIT_ENTRY } from '../actions';
import { emotionRubric } from '../emotionRubric.js';

const initialState = {
   emoTier1: 'happy',
   emoTier2: 'accepted',
   emoTier3: '',
   emoChoices: Object.keys(emotionRubric)
   //userComment: ''
}

// find state.emotier1 in emoRubric
// and take the array of keys and push to components

// find state.emotier2 in emoRubric
// and take the array and push to components


export const emoReducer = (state = initialState, action) => {
  // let emoTier2Choices = Object.keys(emotionRubric[state.emoTier1])
  // let emoTier3Choices = emotionRubric[state.emoTier1][state.emoTier2]

  switch (action.type) {
    case 'GO_DEEPER':
       let emoTier1= action.emoSelection1
       let emoTier2Choices = Object.keys(emotionRubric[emoTier1])
      return {
      ...state,
      emoTier1: action.emoSelection1,
      emoChoices: emoTier2Choices
      }
    case 'GO_DEEPER2':
      let emoTier2 = action.selection2
      let emoTier3Choices= emotionRubric[state.emoTier1][emoTier2]
      return {
      ...state,
      emoTier2: action.emoSelection2,
      emoChoices: emoTier3Choices
      }
    case 'SELECT_FINAL':
      return {
      ...state,
      emoTier3: action.finalEmotion
      }
    case 'SUBMIT_ENTRY': {
// take the users information and POST to server
    }

    default: return state
  }
}
