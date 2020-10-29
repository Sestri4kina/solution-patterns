/**
Problem Statement

Implement the tracePath() function which will take in a list of source-destination pairs 
and return the correct sequence of the whole journey from the first city to the last.

Input
A map, represented as a JavaScript object, containing string pairs of source-destination 
cities just like hash tables do.

Output
A list of source-destination pairs in the correct order.

Sample Input
map = {
  "NewYork": "Chicago",
  "Boston": "Texas",
  "Missouri": "NewYork",
  "Texas": "Missouri"
}

Sample Output
[["Boston", "Texas"] , ["Texas", "Missouri"] , ["Missouri", "NewYork"] , ["NewYork", "Chicago"]]
*/

// @ts-check

/**
 * 
 * @param {Object} map 
 * @returns {Array<Array<string>>}
 */
function tracePath(map){ 
    const path = [];

    const destinations = new Map();
    Object.keys(map).forEach(key => {
        destinations.set(key, map[key]);
    })

    const reversedDestinations = new Map();
    for (let [cityFrom, cityTo] of destinations) {
        reversedDestinations.set(cityTo, cityFrom);
    }

    let startCity = null;
    for (let city of destinations.keys()) {
        if (!reversedDestinations.has(city)) {
            startCity = city;
            break;
        }
    }
     
    let size = destinations.size;
    let cityFrom = startCity;
    while (size > 0) {
        const cityTo = destinations.get(cityFrom);
        path.push([cityFrom, cityTo]);
        cityFrom = cityTo;
        size--;
    }
    return path;
}

console.log(tracePath({
    'New York': 'Chicago',
    'Boston': 'Texas',
    'Missouri': 'New York',
    'Texas': 'Missouri' 
}));
