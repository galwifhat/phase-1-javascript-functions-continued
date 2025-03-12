//Functions-Continued
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity2 = "go to the office") {
  return `This Monday, I will ${activity2}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair = "*") {
  return function (adjective = "a hard worker") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
console.log(wrapAdjective("||")(" and a dedicated programmer"));
