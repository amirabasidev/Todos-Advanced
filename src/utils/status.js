export const getCompletedCount = (todos) =>
  todos.reduce((count, todo) => (todo.isComplate ? count + 1 : count), 0);

export const getPercentComplated = (num, percentage) => {
  const result = (num / percentage) * 100;
  return parseFloat(result.toFixed(0));
};
