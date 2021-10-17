// Code your solution here
function findMatching(driverNames, name){
    let match = driverNames.filter(driverName => driverName.toUpperCase() === name.toUpperCase());
    return match;
}
findMatching('Bobby');

function fuzzyMatch(driverNames, name){
    const result = driverNames.filter(driverName => driverName.slice(0, name.length) === name);
    return result
}

function matchName(drivers, name){
    let match = drivers.filter(drivers => drivers.name === name);
    return match;
}
