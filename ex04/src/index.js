var monitorsListArray= ["Apple", "Peach", "Berry"];
var monitorsList = [];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    for (var i=0; i<monitorsListArray.length; i++){
        newMonitorsList.push([monitorsListArray[i],i+1])
    }
    monitorsList = newMonitorsList;
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;