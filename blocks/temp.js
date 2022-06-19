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