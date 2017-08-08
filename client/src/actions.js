export const GO_DEEPER = 'GO_DEEPER';
export const goDeeper = emoSelection1=> ({
  type: GO_DEEPER,
  emoSelection1
})

export const GO_DEEPER2 = 'GO_DEEPER2';
export const goDeeper2 = emoSelection2=> ({
  type: GO_DEEPER2,
  emoSelection2
})

export const SELECT_FINAL = 'SELECT_FINAL';
export const selectFinal = finalEmotion=> ({
  type: SELECT_FINAL,
  finalEmotion
})

export const SUBMIT_ENTRY = 'SUBMIT_ENTRY';
export const submitEntry = userEntry => ({
  type: SUBMIT_ENTRY,
  userEntry
})
