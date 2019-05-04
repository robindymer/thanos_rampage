/*
 * Program which calculates the probability of being the last one
 * standing in a thanos snap rampage. Enjoy!
 */

let tbefore = "https://preview.redd.it/i1potvblvqv01.jpg?width=960&crop=smart&auto=webp&s=b70aeb164ab5cad648f3fe3766a040c1d343e538";
let tafter = "https://cdn3.movieweb.com/i/article/GcYNibCx4PcVUKErWpuhtBL0QwZGb5/738:50/Infinity-War-Netflix-Description.jpg";
let tbeforeImg;
let tafterImg;
let oof;
let peeps;
let people;
let snaps; // optional
let prob;

// function preload() {
//   tbefore = loadImage('tbefore.jpg');
//   tafter = loadImage('tafter.jpg');
// }

function setup() {
  noCanvas();
  oof = loadSound('oof.mp3');
  tbeforeImg = createImg(tbefore);
  tafterImg = createImg(tafter);
  tafterImg.hide();

  createElement('h1', 'HAI, WELCOME TO THANOS SNAP RAMPAGE :) READY 2 DIE?');
  createP('Calculating the probability of you being the last survivor if thanos would repeatedly snap his fingers until all but one were alive, based on how many people there are in the scenario');
  createP('GIMMEH THE AMOUNT OF PEOPLE IN THE ROOM!');
  peeps = createInput().changed(dieProbability);
  prob = createP('');
}

function dieProbability() {
  people = peeps.value();
  let p = pow(0.5, (log(people)/log(2)));
  let percentage = p*100;
  //let round = floor(percentage*100)/100
  prob.html(percentage + ' % chance of NOT DYING!^^');
  tafterImg.show();
  tbeforeImg.hide();
  oof.play();
}
