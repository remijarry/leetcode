/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = new Map();
    let tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let sLetter = s.charAt(i);
        let tLetter = t.charAt(i);

        addToMap(sMap, sLetter);
        addToMap(tMap, tLetter);
    }

    for (let [key, value] of sMap) {
        if (!tMap.has(key)) {
            return false;
        }

        if (tMap.has(key) && tMap.get(key) !== value) {
            return false;
        }
    }

    return true;
};

var addToMap = function (map, letter) {
    if (map.has(letter)) {
        map.set(letter, map.get(letter) + 1);
    } else {
        map.set(letter, 1);
    }
}