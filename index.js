// Code your solution here

function findMatching(array, string){
    const result = array.filter(function(array){
        if (array === string){
            let driverMatch = array === string;
            return driverMatch;
        }else {
            return array.toUpperCase() === string.toUpperCase();
        }
    })
        
        return result;
}

function fuzzyMatch(driverName, string) {
    const result = driverName.filter(function(driverName){
            if (driverName === string){
                let fuzzyDriver = driverName === string;
                return fuzzyDriver;
            }else{
                return driverName.slice(0,2) === string;
            }
    })
    return result;
}
function matchName(driverobject, string){
    const driverName = driverobject.filter(function(driverobject){
        if (driverobject.name === string){
            let foundDriver = driverobject.name === string;
            return foundDriver;
        }

    })
        return driverName;
}