export const GO_DEEPER = 'GO_DEEPER';
export const goDeeper = emotion => ({
  type: GO_DEEPER,
  emotion
})

export const SUBMIT_ENTRY = 'SUBMIT_ENTRY';
export const submitEntry = userEntry => ({
  type: SUBMIT_ENTRY,
  userEntry
})