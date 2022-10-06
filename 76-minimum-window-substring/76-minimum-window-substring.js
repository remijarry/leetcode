/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = new Map();

    for (let i = 0; i < t.length; i++) {
        map.set(t.charAt(i), (map.get(t.charAt(i)) || 0) + 1);
    }

    let left = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            left = i;
            break;
        }
    }

    let right = left;
    let minWindow = '';
    let currentWindow = '';
    while (left < s.length) {
        if (map.has(s.charAt(left))) {
            while (!allFound(map) && right < s.length) {
                if (map.has(s.charAt(right))) {
                    map.set(s.charAt(right), map.get(s.charAt(right)) - 1);
                }
                currentWindow += s.charAt(right);
                right++;
            }
            if (allFound(map) && minWindow.length === 0 ||  allFound(map) && currentWindow.length < minWindow.length) {
                minWindow = currentWindow;
            }

            // increment left until it reaches right or until 1 letter is missing again.
            map.set(s.charAt(left), map.get(s.charAt(left)) + 1)

        }
        if (currentWindow.length > 1) {
            currentWindow = currentWindow.substring(1);
        }
        left++;
    }

    return minWindow;
};

let allFound = function (map) {
    for (let [key, value] of map) {
        if (value > 0) {
            return false;
        }
    }

    return true;
}