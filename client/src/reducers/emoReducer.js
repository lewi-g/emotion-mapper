import { GO_DEEPER1, G0_DEEPER2, FINAL_SELECTION, SUBMIT_ENTRY } from '../actions';
import { emotionRubric } from '../emotionRubric.js';

const initialState = {
  emoTiers: [],
  emoChoices: Object.keys(emotionRubric)
};

const optionsFromTiers = (emotionRubric, emoTiers) => {
  let currentLevel = emotionRubric;
  let currentChoices;
  emoTiers.forEach(key => {
    currentLevel = currentLevel[key];
  });
  if (currentLevel === true) {
    return null;
  } else {
    currentChoices = Object.keys(currentLevel);
    return currentChoices
  };
};

export const emoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GO_DEEPER':
      let currentEmoTiers = [...state.emoTiers, action.emoSelection]
      return {
        ...state,
        emoTiers: currentEmoTiers,
        emoChoices: optionsFromTiers(emotionRubric, currentEmoTiers)
      };
    case 'SELECT_FINAL':
      return {
        ...state,
        emoTier3: action.finalEmotion
      };
    case 'SUBMIT_ENTRY': {
      // take the users information and POST to server
    };
    default: return state
  };
};
