import { GO_DEEPER1, G0_DEEPER2, FINAL_SELECTION, SUBMIT_ENTRY } from '../actions';
import { emotionRubric } from '../emotionRubric.js';

const initialState = {
   emoTier1: 'bad',
   emoTier2: '',
   emoTier3: '',
   emoChoices: ['bad', 'sad', 'happy', 'fearful','angry', 'disgusted', 'surprised']
   //userComment: ''
}

// find state.emotier1 in emoRubric
// and take the array of keys and push to components

// find state.emotier2 in emoRubric
// and take the array and push to components


export const emoReducer = (state = initialState, action) => {
  let emoTier1= 'angry'

  let emoTier1Choices= Object.keys(emotionRubric)
  let emoTier2Choices = Object.keys(emotionRubric[state.emoTier1])
  console.log('hello there', emoTier2Choices)


  switch (action.type) {
    case 'GO_DEEPER':
      return {
      ...state,
      emoTier1: action.emoSelection1,
      emoChoices: emoTier2Choices
      }
    case 'GO_DEEPER2':
      let emoTier3Choices= Object.keys(emotionRubric.emoTier2)
      return {
      ...state,
      emoTier2: action.emoSelection2,
      emoChoices: emoTier3Choices
        // display the next level of emotion components
      }
    case 'SELECT_FINAL':
      return {
      ...state,
      emoTier3: action.finalEmotion
        // display the next level of emotion components
      }
    case 'SUBMIT_ENTRY': {
// take the users information and POST to server
    }

    default: return state
  }
}
