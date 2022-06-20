const billTenS = document.getElementById("billTenS");
const billTenSUp = document.getElementById("billTenSUp");
const billTenSUpFive = document.getElementById("billTenSUpFive");
const billTenSDown = document.getElementById("billTenSDown");
const billTenSDownFive = document.getElementById("billTenSDownFive");
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

const billTenFiveUp = () => {
  billTenSCount += 5;
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

const billTenFiveDown = () => {
  billTenSCount -= 5;
  if (billTenSCount < 0) {
    billTenSCount = 0;
  }
  billTenTCount = convertMoney(10, billTenSCount, billTenBCount);
  billTenS.innerHTML = billTenSCount;
  billTenT.innerHTML = billTenTCount;
};

billTenSUp.addEventListener("click", billTenSingleUp);
billTenSUpFive.addEventListener("click", billTenFiveUp);
billTenSDown.addEventListener("click", billTenSingleDown);
billTenSDownFive.addEventListener("click", billTenFiveDown);