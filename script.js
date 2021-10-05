"use strict";
// https://docs.google.com/document/d/1uI_rXQGWWEhZXnmFa9DyCNaVBSZZB4oNixGaXf9yLwU/edit#heading=h.pq0pw1b5bn6d
// each array contains object(s)
// -----------------------------------------------------------------------------------------------------------
//1
const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
// -----------------------------------------------------------------------------------------------------------
//2
const addSumission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// -----------------------------------------------------------------------------------------------------------
//3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);
// -----------------------------------------------------------------------------------------------------------
//4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};
// -----------------------------------------------------------------------------------------------------------
//5 [index] scopes a part of the array with .___ after []
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// -----------------------------------------------------------------------------------------------------------
// 6
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
// -----------------------------------------------------------------------------------------------------------
// LOST 7
// const findLowestScore = (array) => {
//   let currentLowest = array[0];
//   array.forEach((item) => {
//     if (item.score < currentLowest.score) {
//       currentLowest = item;
//     }
//   });
//   return currentLowest;
// };

const findLowestScore = (array) => {
  //might need a variable to hold onto the current lowest score.
  // need to look at each objects score property to determine if that score is lower than the current lowest score.
  // return the lowest score.
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score < currentLowest.score) {
      currentLowest = item;
    }
  });
  return currentLowest;
};

// -----------------------------------------------------------------------------------------------------------
//8
// const findAverageScore = (array) => {
//   return (
//     array.reduce((acc, cv) => {
//       return acc + cv.score;
//     }, 0) / array.length
//   );
// };

const findAverageScore = (array) => {
  let sum = 0;
  for (let element of array) {
    sum += element.score;
  }
  return sum / array.length;
};
// -----------------------------------------------------------------------------------------------------------
//9
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.score >= 60;
  });
};
// -----------------------------------------------------------------------------------------------------------
//10
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
// -----------------------------------------------------------------------------------------------------------
// EXTRA
const filterByNameLength = (array, length) => {
  return array.filter((item) => {
    return item.name.length === length;
  });
};

console.log(filterByNameLength(submissions, 4));
