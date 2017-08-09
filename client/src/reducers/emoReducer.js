import { GO_DEEPER1, G0_DEEPER2, FINAL_SELECTION, SUBMIT_ENTRY } from '../actions';
import { emotionRubric } from '../emotionRubric.js';

const initialState = {
   emoTiers: [],
   emoChoices: Object.keys(emotionRubric)
   //userComment: ''
}

// find state.emotier1 in emoRubric
// and take the array of keys and push to components

// find state.emotier2 in emoRubric
// and take the array and push to components

const optionsFromTiers = (emotionRubric, emoTiers) => {
  let currentLevel = emotionRubric;
  let currentChoices;
  emoTiers.forEach(key => {
    currentLevel = currentLevel[key];
      console.log('CURRENT LEVEL', currentLevel)
  });
  if (currentLevel === true) {
    return null;
  } else {
    currentChoices = Object.keys(currentLevel);
    return currentChoices
  }
  console.log('first one', currentChoices)
};

export const emoReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GO_DEEPER':
      let currentEmoTiers = [...state.emoTiers, action.emoSelection]
      return {
      ...state,
      emoTiers: currentEmoTiers,
      emoChoices: optionsFromTiers(emotionRubric, currentEmoTiers)
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
