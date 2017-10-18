export const GO_DEEPER = 'GO_DEEPER';
export const goDeeper = emoSelection => ({
  type: GO_DEEPER,
  emoSelection
});

export const SUBMIT_ENTRY = 'SUBMIT_ENTRY';
export const submitEntry = userEntry => ({
  type: SUBMIT_ENTRY,
  userEntry
});
