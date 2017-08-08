import { GO_DEEPER1, G0_DEEPER2, FINAL_SELECTION, SUBMIT_ENTRY } from '../actions';
import { emoRubric } from '../emotionRubric.js';

const initialState = {
   emoTier1: 'surprised',
   emoTier2: 'amazed',
   emoTier3: '',
   //userComment: ''
}

// find state.emotier1 in emoRubric 
// and take the array of keys and push to components

// find state.emotier2 in emoRubric
// and take the array and push to components

export const emoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GO_Deeper':
      return {
      ...state,
      emoTier1: action.emotionSelection
        // display the next level of emotion components
      }
      case 'GO_Deeper2':
      return {
      ...state,
      emoTier2: action.emotionSelection
        // display the next level of emotion components
      }
    case 'SUBMIT_ENTRY': {
// take the users information and POST to server
    } 
    default: return state
  }
}