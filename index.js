// Code your solution in this file
function findMatching(drivers,string) {
const match =  drivers.filter(function (item) {return item.toUpperCase() === string.toUpperCase() })
  return match
}
