const returnFirstTwoDrivers = function(drivers){return drivers.slice(0,2)}
const returnLastTwoDrivers = function(drivers){return drivers.slice(drivers.length-2)}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function (int) {
return function (multiplyValue){
  return int * multiplyValue;
};
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function (drivers, driverChoices){
return driverChoices(drivers);
}