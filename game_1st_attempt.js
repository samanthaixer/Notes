// 'use strict';

function Game() {
  this.complete = false;
  this.frameList = [];
  this.bonuses = [];
}

Game.prototype.recordBall = function(score) {

  if(this.complete === true) { return this.frameList; }

  if (this.frameList.length === 0) {
    // very first ball
    this.frameList.push(createNewFrame(score));

    bonus = checkForBonusScore(score, this.frameList, this.bonuses);
    if (bonus) { this.bonuses.push(bonus); };
    // no need to calculate bonus points as this is only on the first ball
    return this;
  }

  if (this.frameList.slice(-1)[0].isComplete() === false) {
    addToFrame(score, this.frameList.slice(-1)[0]);
    this.complete = checkEndOfGame(this.frameList);

    calculateBonusPoints(score, this.frameList, this.bonuses);

    // SOMEWHERE HERE WE ARE UPDATING THE FIRST FRAME AGAIN
    bonus = checkForBonusScore(score, this.frameList, this.bonuses);
    if (bonus) { this.bonuses.push(bonus); };
    return this;
  }
  else {
    this.frameList.push(createNewFrame(score));
    this.complete = checkEndOfGame(this.frameList);

    calculateBonusPoints(score, this.frameList, this.bonuses);
    // SOMEWHERE HERE WE ARE UPDATING THE FIRST FRAME AGAIN
    bonus = checkForBonusScore(score, this.frameList, this.bonuses);
    if (bonus) { this.bonuses.push(bonus); };
    return this;
  }

  function createNewFrame(score) {
    let frame = new Frame();
    return frame.recordScore(score);
  }

  function addToFrame(score, frame) {
    frame.recordScore(score);
  }

  function checkEndOfGame(frameList) {
    if (frameList.length === 10 && frameList.slice(-1)[0].isComplete() == true) {
      return true;
    } else { return false; }
  }

  function checkForBonusScore(score, frameList, bonuses) {
    let lastFrame = frameList.slice(-1)[0]
    if (lastFrame.frameTotal === 10){
      // spare or strike
      return createBonus(lastFrame, bonuses, frameList.length-1);
    }
  }

  function createBonus(frame, bonuses, frameNumber) {
    let type = "";
    if (frame.balls[1]) { type = "spare"; }
    else { type = "strike"; }

    return {bonusType: type, frameScored: frameNumber};
  }

  function calculateBonusPoints(score, frameList, bonusList) {
    // bonusList.forEach(function(bonusItem, i){
    //   if(bonusItem['bonusType'] == "strike"){
    //     if(bonusItem['bonusPoints']){
    //       // console.log(score);
    //       frameList[bonusItem['frameScored']].frameTotal += bonusItem['bonusPoints'] + score;
    //
    //       // console.log("existing bonus item: before");
    //       // bonusList.forEach(function(bonus) {
    //       //     console.log(bonus);
    //       // });
    //
    //       bonusList.splice(i, 1);
    //
    //       // console.log("existing bonus item: after");
    //       // bonusList.forEach(function(bonus) {
    //       //     console.log(bonus);
    //       // });
    //     } else {
    //       // console.log("new bonus item: before");
    //       // console.log(bonusItem);
    //       // console.log(score);
    //
    //       bonusItem['bonusPoints'] = score;
    //
    //       // console.log("new bonus item: after");
    //       // console.log(bonusItem);
    //     }
    //   } else if (bonusItem['bonusType'] == "spare") {
    //     frameList[bonusItem['frameScored']].frameTotal += score;
    //     // bonusList.pop(bonusItem);
    //     bonusList.splice(i, 1);
    //     // bonusList.shift;
    //   };
    // });
  };
};

Game.prototype.isComplete = function() {
  return this.complete;
};

Game.prototype.getNextTwoBalls = function() {
  let next = [];
  let frameList = this.frameList;

  this.bonuses.forEach(function (bonusItem, i){
    if(bonusItem['bonusType'] == "strike"){
      let frame = bonusItem['frameScored']

      next = frameList[frame].balls
      console.log(next);
      if (next.length < 2){ next.push(frameList[frame].balls[0]) }
    }
  })
  if(next.length!=0){
    return value = next.reduce((total, amount) => total + amount);
  }
  else {
    return "hello";
  }
}

Game.prototype.calculateBonusPoints = function() {
  this.bonuses.forEach(function(bonus, i){
    if(bonus['bonusType'] == "strike"){
      if(bonus['bonusPoints']){
        // console.log(score);
        this.frameList[bonus['frameScored']].frameTotal += bonus['bonusPoints'] + score;

        console.log("existing bonus item: before");
        bonusList.forEach(function(bonus) {
            console.log(bonus);
        });

        bonusList.splice(i, 1);

        console.log("existing bonus item: after");
        bonusList.forEach(function(bonus) {
            console.log(bonus);
        });
      } else {
        console.log("new bonus item: before");
        console.log(bonusItem);
        console.log(score);

        bonusItem['bonusPoints'] = score;

        console.log("new bonus item: after");
        console.log(bonusItem);
      }
    } else if (bonusItem['bonusType'] == "spare") {
      frameList[bonusItem['frameScored']].frameTotal += score;
      // bonusList.pop(bonusItem);
      bonusList.splice(i, 1);
      // bonusList.shift;
    };
  });
};

Game.prototype.calculateTotal = function() {
  let total = 0;
  for(let i=0; i<this.frameList.length; i++){
    let frame = this.frameList[i];
    total += frame.frameTotal;
  }
  return total;
}
