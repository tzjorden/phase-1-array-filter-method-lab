// Code your solution here

function findMatching(drivers,name){
        return drivers.filter(function(driver){ return driver.toLowerCase() === name.toLowerCase()})
}
function fuzzyMatch(drivers,name){
    return drivers.filter(function(driver){return driver.toLowerCase().substring(0,name.length)===name.toLowerCase()})
}

function matchName(drivers,name) {
    return drivers.filter(function(driver){return driver.name === name})

}


