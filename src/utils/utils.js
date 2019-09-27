export const addSelectedProps = arr =>
  arr.map(obj => ({ ...obj, selected: false, selectedOrder: null }));

export const shuffleAnswers = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const addStatusProp = (answers, suffix) => {
  return answers.map(answer => {
    let status =
      answer["correct" + suffix] === answer["selected" + suffix] &&
      answer.selected === true
        ? "Selected Correctly"
        : answer["correct" + suffix] !== answer["selected" + suffix] &&
          answer.selected === true
        ? "Incorrectly Selected"
        : answer["correct" + suffix] !== answer["selected" + suffix] &&
          answer.selected === false
        ? "Correct Answer"
        : "";
    return { ...answer, status };
  });
};
