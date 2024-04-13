const Hq = 42

function distanceFromHqInBlocks(startLocation) {
    return Math.abs(startLocation - Hq);
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(30);

function distanceFromHqInFeet(startLocation) {
    return Math.abs(distanceFromHqInBlocks(startLocation) * 264)
}

distanceFromHqInFeet(distanceFromHqInBlocks);

function distanceTravelledInFeet(startLocation, endLocation) {
    return Math.abs((startLocation - endLocation) * 264)
}

distanceTravelledInFeet(10, 42);

console.log(distanceTravelledInFeet)

function calculatesFarePrice(startLocation, endLocation) {
    if (distanceTravelledInFeet(startLocation, endLocation) < 400) {
        return Math.abs(0);
    } else if (distanceTravelledInFeet(startLocation, endLocation) >= 400 &&
        distanceTravelledInFeet(startLocation, endLocation) <= 2000) {
        return (distanceTravelledInFeet(startLocation, endLocation) - 400) * .02
    } else if (distanceTravelledInFeet(startLocation, endLocation) > 2000 &&
        distanceTravelledInFeet(startLocation, endLocation) < 2500) {
        return (25)

    } else if ((distanceTravelledInFeet(startLocation, endLocation)) > 2500) {
        return ("cannot travel that far")
    }
    calculatesFarePrice(43, 50)
}


//if distanceTravelled is greater than 400 AND if distanceTravelled is less than 2000
//distanceTravelledInFeet(startLocation, endLocation) > 400 && distanceTravelledInFeet(startLocation, endLocation) < 2000
// (distanceTravelled - 400) * 2

//if distanceTravelled is Less than 8000 Or if distanceTravelled is greater than 15000
//distanceTravelledInFeet(startLocation, endLocation) < 8000 || distanceTravelledInFeet(startLocation, endLocation) > 15000
// (distanceTravelled - 400) * 2