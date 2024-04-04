export const addSkill = (skill) => ({
  type: "ADD_SKILL",
  payload: skill,
});

export const deleteSkill = (skill) => ({
  type: "DELETE_SKILL",
  payload: skill,
});
