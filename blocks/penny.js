function convertMoney(val, one, two) {
  let total = 0;
  switch(val) {
    case .01:
    case .10:
      while (one > 0) {
        total += (val * 50);
        one -= 1;
      }
      while (two > 0) {
        total += (val * 2500);
        two -= 1;
      }
      break;
    case .05:
    case .25:
      while (one > 0) {
        total += (val * 40);
        one -= 1;
      }
      while (two > 0) {
        total += (val * 2000);
        two -= 1;
      }
      break;
    case 1:
    case 5:
    case 20:
      while (one > 0) {
        total += val;
        one -= 1;
      }
      while (two > 0) {
        total += (100 * val);
        two -= 1;
      }
      break;
    case 10:
      while (one > 0) {
        total += val;
        one -= 1;
      }
      while (two > 0) {
        total += (10 * val);
        two -= 1;
      }
      break;
    case 50:
    case 100:
      while (one > 0) {
        total += val;
        one -= 1;
      }
      while (two > 0) {
        total += (20 * val);
        two -= 1;
      }
      break;
  }
  return total;
}

var totalCount = 0;
const totalC = document.getElementById("totalCount");
totalC.innerHTML = totalCount;

const pennyS = document.getElementById("pennyS");
const pennySUp = document.getElementById("pennySUp");
const pennySUpFive = document.getElementById("pennySUpFive");
const pennySUpTen = document.getElementById("pennySUpTen");
const pennySDown = document.getElementById("pennySDown");
const pennySDownFive = document.getElementById("pennySDownFive");
const pennySDownTen = document.getElementById("pennySDownTen");
var pennySCount = 0;
pennyS.innerHTML = pennySCount;

const pennyB = document.getElementById("pennyB");
const pennyBUp = document.getElementById("pennyBUp");
const pennyBDown = document.getElementById("pennyBDown");
var pennyBCount = 0;
pennyB.innerHTML = pennyBCount;

const pennyT = document.getElementById("pennyT");
var pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
pennyT.innerHTML = pennyTCount;

const pennySingleUp = () => {
  pennySCount++;
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyS.innerHTML = pennySCount;
  pennyT.innerHTML = pennyTCount;
};

const pennyFiveUp = () => {
  pennySCount += 5;
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyS.innerHTML = pennySCount;
  pennyT.innerHTML = pennyTCount;
};

const pennyTenUp = () => {
  pennySCount += 10;
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyS.innerHTML = pennySCount;
  pennyT.innerHTML = pennyTCount;
};

const pennySingleDown = () => {
  pennySCount--;
  if (pennySCount < 0) {
    pennySCount = 0;
  }
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyS.innerHTML = pennySCount;
  pennyT.innerHTML = pennyTCount;
};

const pennyFiveDown = () => {
  pennySCount -= 5;
  if (pennySCount < 0) {
    pennySCount = 0;
  }
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyS.innerHTML = pennySCount;
  pennyT.innerHTML = pennyTCount;
};

const pennyTenDown = () => {
  pennySCount -= 10;
  if (pennySCount < 0) {
    pennySCount = 0;
  }
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyS.innerHTML = pennySCount;
  pennyT.innerHTML = pennyTCount;
};

pennySUp.addEventListener("click", pennySingleUp);
pennySUpFive.addEventListener("click", pennyFiveUp);
pennySUpTen.addEventListener("click", pennyTenUp);
pennySDown.addEventListener("click", pennySingleDown);
pennySDownFive.addEventListener("click", pennyFiveDown);
pennySDownTen.addEventListener("click", pennyTenDown);

const pennyBoxUp = () => {
  pennyBCount++;
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyB.innerHTML = pennyBCount;
  pennyT.innerHTML = pennyTCount;
};

const pennyBoxDown = () => {
  pennyBCount--;
  if (pennyBCount < 0) {
    pennyBCount = 0;
  }
  pennyTCount = convertMoney(.01, pennySCount, pennyBCount);
  pennyB.innerHTML = pennyBCount;
  pennyT.innerHTML = pennyTCount;
};

pennyBUp.addEventListener("click", pennyBoxUp);
pennyBDown.addEventListener("click", pennyBoxDown);

const nickelS = document.getElementById("nickelS");
const nickelSUp = document.getElementById("nickelSUp");
const nickelSUpFive = document.getElementById("nickelSUpFive");
const nickelSUpTen = document.getElementById("nickelSUpTen");
const nickelSDown = document.getElementById("nickelSDown");
const nickelSDownFive = document.getElementById("nickelSDownFive");
const nickelSDownTen = document.getElementById("nickelSDownTen");
var nickelSCount = 0;
nickelS.innerHTML = nickelSCount;

const nickelB = document.getElementById("nickelB");
const nickelBUp = document.getElementById("nickelBUp");
const nickelBDown = document.getElementById("nickelBDown");
var nickelBCount = 0;
nickelB.innerHTML = nickelBCount;

const nickelT = document.getElementById("nickelT");
var nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
nickelT.innerHTML = nickelTCount;

const nickelSingleUp = () => {
  nickelSCount++;
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelS.innerHTML = nickelSCount;
  nickelT.innerHTML = nickelTCount;
};

const nickelFiveUp = () => {
  nickelSCount += 5;
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelS.innerHTML = nickelSCount;
  nickelT.innerHTML = nickelTCount;
};

const nickelTenUp = () => {
  nickelSCount += 10;
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelS.innerHTML = nickelSCount;
  nickelT.innerHTML = nickelTCount;
};

const nickelSingleDown = () => {
  nickelSCount--;
  if (nickelSCount < 0) {
    nickelSCount = 0;
  }
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelS.innerHTML = nickelSCount;
  nickelT.innerHTML = nickelTCount;
};

const nickelFiveDown = () => {
  nickelSCount -= 5;
  if (nickelSCount < 0) {
    nickelSCount = 0;
  }
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelS.innerHTML = nickelSCount;
  nickelT.innerHTML = nickelTCount;
};

const nickelTenDown = () => {
  nickelSCount -= 10;
  if (nickelSCount < 0) {
    nickelSCount = 0;
  }
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelS.innerHTML = nickelSCount;
  nickelT.innerHTML = nickelTCount;
};

nickelSUp.addEventListener("click", nickelSingleUp);
nickelSUpFive.addEventListener("click", nickelFiveUp);
nickelSUpTen.addEventListener("click", nickelTenUp);
nickelSDown.addEventListener("click", nickelSingleDown);
nickelSDownFive.addEventListener("click", nickelFiveDown);
nickelSDownTen.addEventListener("click", nickelTenDown);

const nickelBoxUp = () => {
  nickelBCount++;
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelB.innerHTML = nickelBCount;
  nickelT.innerHTML = nickelTCount;
};

const nickelBoxDown = () => {
  nickelBCount--;
  if (nickelBCount < 0) {
    nickelBCount = 0;
  }
  nickelTCount = convertMoney(.05, nickelSCount, nickelBCount);
  nickelB.innerHTML = nickelBCount;
  nickelT.innerHTML = nickelTCount;
};

nickelBUp.addEventListener("click", nickelBoxUp);
nickelBDown.addEventListener("click", nickelBoxDown);

const dimeS = document.getElementById("dimeS");
const dimeSUp = document.getElementById("dimeSUp");
const dimeSDown = document.getElementById("dimeSDown");
var dimeSCount = 0;
dimeS.innerHTML = dimeSCount;

const dimeB = document.getElementById("dimeB");
const dimeBUp = document.getElementById("dimeBUp");
const dimeBDown = document.getElementById("dimeBDown");
var dimeBCount = 0;
dimeB.innerHTML = dimeBCount;

const dimeT = document.getElementById("dimeT");
var dimeTCount = convertMoney(.1, dimeSCount, dimeBCount);
dimeT.innerHTML = dimeTCount;

const dimeSingleUp = () => {
  dimeSCount++;
  dimeTCount = convertMoney(.1, dimeSCount, dimeBCount);
  dimeS.innerHTML = dimeSCount;
  dimeT.innerHTML = dimeTCount;
};

const dimeSingleDown = () => {
  dimeSCount--;
  if (dimeSCount < 0) {
    dimeSCount = 0;
  }
  dimeTCount = convertMoney(.1, dimeSCount, dimeBCount);
  dimeS.innerHTML = dimeSCount;
  dimeT.innerHTML = dimeTCount;
};

dimeSUp.addEventListener("click", dimeSingleUp);
dimeSDown.addEventListener("click", dimeSingleDown);

const dimeBoxUp = () => {
  dimeBCount++;
  dimeTCount = convertMoney(.1, dimeSCount, dimeBCount);
  dimeB.innerHTML = dimeBCount;
  dimeT.innerHTML = dimeTCount;
};

const dimeBoxDown = () => {
  dimeBCount--;
  if (dimeBCount < 0) {
    dimeBCount = 0;
  }
  dimeTCount = convertMoney(.1, dimeSCount, dimeBCount);
  dimeB.innerHTML = dimeBCount;
  dimeT.innerHTML = dimeTCount;
};

dimeBUp.addEventListener("click", dimeBoxUp);
dimeBDown.addEventListener("click", dimeBoxDown);

const quarterS = document.getElementById("quarterS");
const quarterSUp = document.getElementById("quarterSUp");
const quarterSDown = document.getElementById("quarterSDown");
var quarterSCount = 0;
quarterS.innerHTML = quarterSCount;

const quarterB = document.getElementById("quarterB");
const quarterBUp = document.getElementById("quarterBUp");
const quarterBDown = document.getElementById("quarterBDown");
var quarterBCount = 0;
quarterB.innerHTML = quarterBCount;

const quarterT = document.getElementById("quarterT");
var quarterTCount = convertMoney(.25, quarterSCount, quarterBCount);
quarterT.innerHTML = quarterTCount;

const quarterSingleUp = () => {
  quarterSCount++;
  quarterTCount = convertMoney(.25, quarterSCount, quarterBCount);
  quarterS.innerHTML = quarterSCount;
  quarterT.innerHTML = quarterTCount;
};

const quarterSingleDown = () => {
  quarterSCount--;
  if (quarterSCount < 0) {
    quarterSCount = 0;
  }
  quarterTCount = convertMoney(.25, quarterSCount, quarterBCount);
  quarterS.innerHTML = quarterSCount;
  quarterT.innerHTML = quarterTCount;
};

quarterSUp.addEventListener("click", quarterSingleUp);
quarterSDown.addEventListener("click", quarterSingleDown);

const quarterBoxUp = () => {
  quarterBCount++;
  quarterTCount = convertMoney(.25, quarterSCount, quarterBCount);
  quarterB.innerHTML = quarterBCount;
  quarterT.innerHTML = quarterTCount;
};

const quarterBoxDown = () => {
  quarterBCount--;
  if (quarterBCount < 0) {
    quarterBCount = 0;
  }
  quarterTCount = convertMoney(.25, quarterSCount, quarterBCount);
  quarterB.innerHTML = quarterBCount;
  quarterT.innerHTML = quarterTCount;
};

quarterBUp.addEventListener("click", quarterBoxUp);
quarterBDown.addEventListener("click", quarterBoxDown);

const billS = document.getElementById("billS");
const billSUp = document.getElementById("billSUp");
const billSDown = document.getElementById("billSDown");
var billSCount = 0;
billS.innerHTML = billSCount;

const billB = document.getElementById("billB");
const billBUp = document.getElementById("billBUp");
const billBDown = document.getElementById("billBDown");
var billBCount = 0;
billB.innerHTML = billBCount;

const billT = document.getElementById("billT");
var billTCount = convertMoney(1, billSCount, billBCount);
billT.innerHTML = billTCount;

const billSingleUp = () => {
  billSCount++;
  billTCount = convertMoney(1, billSCount, billBCount);
  billS.innerHTML = billSCount;
  billT.innerHTML = billTCount;
};

const billSingleDown = () => {
  billSCount--;
  if (billSCount < 0) {
    billSCount = 0;
  }
  billTCount = convertMoney(1, billSCount, billBCount);
  billS.innerHTML = billSCount;
  billT.innerHTML = billTCount;
};

billSUp.addEventListener("click", billSingleUp);
billSDown.addEventListener("click", billSingleDown);

const billBoxUp = () => {
  billBCount++;
  billTCount = convertMoney(1, billSCount, billBCount);
  billB.innerHTML = billBCount;
  billT.innerHTML = billTCount;
};

const billBoxDown = () => {
  billBCount--;
  if (billBCount < 0) {
    billBCount = 0;
  }
  billTCount = convertMoney(1, billSCount, billBCount);
  billB.innerHTML = billBCount;
  billT.innerHTML = billTCount;
};

billBUp.addEventListener("click", billBoxUp);
billBDown.addEventListener("click", billBoxDown);

const billFiveS = document.getElementById("billFiveS");
const billFiveSUp = document.getElementById("billFiveSUp");
const billFiveSDown = document.getElementById("billFiveSDown");
var billFiveSCount = 0;
billFiveS.innerHTML = billFiveSCount;

const billFiveB = document.getElementById("billFiveB");
const billFiveBUp = document.getElementById("billFiveBUp");
const billFiveBDown = document.getElementById("billFiveBDown");
var billFiveBCount = 0;
billFiveB.innerHTML = billFiveBCount;

const billFiveT = document.getElementById("billFiveT");
var billFiveTCount = convertMoney(5, billFiveSCount, billFiveBCount);
billFiveT.innerHTML = billFiveTCount;

const billFiveSingleUp = () => {
  billFiveSCount++;
  billFiveTCount = convertMoney(5, billFiveSCount, billFiveBCount);
  billFiveS.innerHTML = billFiveSCount;
  billFiveT.innerHTML = billFiveTCount;
};

const billFiveSingleDown = () => {
  billFiveSCount--;
  if (billFiveSCount < 0) {
    billFiveSCount = 0;
  }
  billFiveTCount = convertMoney(5, billFiveSCount, billFiveBCount);
  billFiveS.innerHTML = billFiveSCount;
  billFiveT.innerHTML = billFiveTCount;
};

billFiveSUp.addEventListener("click", billFiveSingleUp);
billFiveSDown.addEventListener("click", billFiveSingleDown);

const billFiveBoxUp = () => {
  billFiveBCount++;
  billFiveTCount = convertMoney(5, billFiveSCount, billFiveBCount);
  billFiveB.innerHTML = billFiveBCount;
  billFiveT.innerHTML = billFiveTCount;
};

const billFiveBoxDown = () => {
  billFiveBCount--;
  if (billFiveBCount < 0) {
    billFiveBCount = 0;
  }
  billFiveTCount = convertMoney(5, billFiveSCount, billFiveBCount);
  billFiveB.innerHTML = billFiveBCount;
  billFiveT.innerHTML = billFiveTCount;
};

billFiveBUp.addEventListener("click", billFiveBoxUp);
billFiveBDown.addEventListener("click", billFiveBoxDown);

const billTenS = document.getElementById("billTenS");
const billTenSUp = document.getElementById("billTenSUp");
const billTenSDown = document.getElementById("billTenSDown");
var billTenSCount = 0;
billTenS.innerHTML = billTenSCount;

const billTenB = document.getElementById("billTenB");
const billTenBUp = document.getElementById("billTenBUp");
const billTenBDown = document.getElementById("billTenBDown");
var billTenBCount = 0;
billTenB.innerHTML = billTenBCount;

const billTenT = document.getElementById("billTenT");
var billTenTCount = convertMoney(10, billTenSCount, billTenBCount);
billTenT.innerHTML = billTenTCount;

const billTenSingleUp = () => {
  billTenSCount++;
  billTenTCount = convertMoney(10, billTenSCount, billTenBCount);
  billTenS.innerHTML = billTenSCount;
  billTenT.innerHTML = billTenTCount;
};

const billTenSingleDown = () => {
  billTenSCount--;
  if (billTenSCount < 0) {
    billTenSCount = 0;
  }
  billTenTCount = convertMoney(10, billTenSCount, billTenBCount);
  billTenS.innerHTML = billTenSCount;
  billTenT.innerHTML = billTenTCount;
};

billTenSUp.addEventListener("click", billTenSingleUp);
billTenSDown.addEventListener("click", billTenSingleDown);

const billTenBoxUp = () => {
  billTenBCount++;
  billTenTCount = convertMoney(10, billTenSCount, billTenBCount);
  billTenB.innerHTML = billTenBCount;
  billTenT.innerHTML = billTenTCount;
};

const billTenBoxDown = () => {
  billTenBCount--;
  if (billTenBCount < 0) {
    billTenBCount = 0;
  }
  billTenTCount = convertMoney(10, billTenSCount, billTenBCount);
  billTenB.innerHTML = billTenBCount;
  billTenT.innerHTML = billTenTCount;
};

billTenBUp.addEventListener("click", billTenBoxUp);
billTenBDown.addEventListener("click", billTenBoxDown);

const billTwentyS = document.getElementById("billTwentyS");
const billTwentySUp = document.getElementById("billTwentySUp");
const billTwentySDown = document.getElementById("billTwentySDown");
var billTwentySCount = 0;
billTwentyS.innerHTML = billTwentySCount;

var billTwentyBCount = 0;
var billTwentyTCount = convertMoney(20, billTwentySCount, billTwentyBCount);

const billTwentySingleUp = () => {
  billTwentySCount++;
  billTwentyTCount = convertMoney(20, billTwentySCount, billTwentyBCount);
  billTwentyS.innerHTML = billTwentySCount;
};

const billTwentySingleDown = () => {
  billTwentySCount--;
  if (billTwentySCount < 0) {
    billTwentySCount = 0;
  }
  billTwentyTCount = convertMoney(20, billTwentySCount, billTwentyBCount);
  billTwentyS.innerHTML = billTwentySCount;
};

billTwentySUp.addEventListener("click", billTwentySingleUp);
billTwentySDown.addEventListener("click", billTwentySingleDown);

const billFiftyS = document.getElementById("billFiftyS");
const billFiftySUp = document.getElementById("billFiftySUp");
const billFiftySDown = document.getElementById("billFiftySDown");
var billFiftySCount = 0;
billFiftyS.innerHTML = billFiftySCount;

var billFiftyBCount = 0;
var billFiftyTCount = convertMoney(50, billFiftySCount, billFiftyBCount);

const billFiftySingleUp = () => {
  billFiftySCount++;
  billFiftyTCount = convertMoney(50, billFiftySCount, billFiftyBCount);
  billFiftyS.innerHTML = billFiftySCount;
};

const billFiftySingleDown = () => {
  billFiftySCount--;
  if (billFiftySCount < 0) {
    billFiftySCount = 0;
  }
  billFiftyTCount = convertMoney(50, billFiftySCount, billFiftyBCount);
  billFiftyS.innerHTML = billFiftySCount;
};

billFiftySUp.addEventListener("click", billFiftySingleUp);
billFiftySDown.addEventListener("click", billFiftySingleDown);

const billHundredS = document.getElementById("billHundredS");
const billHundredSUp = document.getElementById("billHundredSUp");
const billHundredSDown = document.getElementById("billHundredSDown");
var billHundredSCount = 0;
billHundredS.innerHTML = billHundredSCount;

var billHundredBCount = 0;
var billHundredTCount = convertMoney(100, billHundredSCount, billHundredBCount);

const billHundredSingleUp = () => {
  billHundredSCount++;
  billHundredTCount = convertMoney(100, billHundredSCount, billHundredBCount);
  billHundredS.innerHTML = billHundredSCount;
};

const billHundredSingleDown = () => {
  billHundredSCount--;
  if (billHundredSCount < 0) {
    billHundredSCount = 0;
  }
  billHundredTCount = convertMoney(100, billHundredSCount, billHundredBCount);
  billHundredS.innerHTML = billHundredSCount;
};

billHundredSUp.addEventListener("click", billHundredSingleUp);
billHundredSDown.addEventListener("click", billHundredSingleDown);

let redBagTotal = 0;
const redBagT = document.getElementById("redBagTotal");
redBagT.innerHTML = redBagTotal;

const redBag = () => {
  redBagTotal = (billTwentyTCount + billFiftyTCount + billHundredTCount);
  redBagT.innerHTML = redBagTotal;
}

billTwentySUp.addEventListener("click", redBag);
billTwentySDown.addEventListener("click", redBag);
billFiftySUp.addEventListener("click", redBag);
billFiftySDown.addEventListener("click", redBag);
billHundredSUp.addEventListener("click", redBag);
billHundredSDown.addEventListener("click", redBag);

const cumulative = () => {
  totalCount = (billHundredTCount + billFiftyTCount + billTwentyTCount + billTenTCount + billFiveTCount + billTCount + quarterTCount + dimeTCount + nickelTCount + pennyTCount);
  totalC.innerHTML = totalCount;
}

pennySUp.addEventListener("click", cumulative);
pennySDown.addEventListener("click", cumulative);
pennySUpFive.addEventListener("click", cumulative);
pennySDownFive.addEventListener("click", cumulative);
pennySUpTen.addEventListener("click", cumulative);
pennySDownTen.addEventListener("click", cumulative);
pennyBUp.addEventListener("click", cumulative);
pennyBDown.addEventListener("click", cumulative);
nickelSUp.addEventListener("click", cumulative);
nickelSDown.addEventListener("click", cumulative);
nickelSUpFive.addEventListener("click", cumulative);
nickelSDownFive.addEventListener("click", cumulative);
nickelSUpTen.addEventListener("click", cumulative);
nickelSDownTen.addEventListener("click", cumulative);
nickelBUp.addEventListener("click", cumulative);
nickelBDown.addEventListener("click", cumulative);
dimeSUp.addEventListener("click", cumulative);
dimeSDown.addEventListener("click", cumulative);
dimeBUp.addEventListener("click", cumulative);
dimeBDown.addEventListener("click", cumulative);
quarterSUp.addEventListener("click", cumulative);
quarterSDown.addEventListener("click", cumulative);
quarterBUp.addEventListener("click", cumulative);
quarterBDown.addEventListener("click", cumulative);
billSUp.addEventListener("click", cumulative);
billSDown.addEventListener("click", cumulative);
billBUp.addEventListener("click", cumulative);
billBDown.addEventListener("click", cumulative);
billFiveSUp.addEventListener("click", cumulative);
billFiveSDown.addEventListener("click", cumulative);
billFiveBUp.addEventListener("click", cumulative);
billFiveBDown.addEventListener("click", cumulative);
billTenSUp.addEventListener("click", cumulative);
billTenSDown.addEventListener("click", cumulative);
billTenBUp.addEventListener("click", cumulative);
billTenBDown.addEventListener("click", cumulative);
billTwentySUp.addEventListener("click", cumulative);
billTwentySDown.addEventListener("click", cumulative);
billFiftySUp.addEventListener("click", cumulative);
billFiftySDown.addEventListener("click", cumulative);
billHundredSUp.addEventListener("click", cumulative);
billHundredSDown.addEventListener("click", cumulative);