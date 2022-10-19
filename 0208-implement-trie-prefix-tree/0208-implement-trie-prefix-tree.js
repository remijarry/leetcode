var TrieNode = function () {
    this.children = new Array(26).fill(null);
    this.IsEndOfWord;
}


var Trie = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let dummy = this.root;
    for (let level = 0; level < word.length; level++) {
        let index = word.charCodeAt(level) - 97;
        if (dummy.children[index] === null) {
            dummy.children[index] = new TrieNode();
        }

        dummy = dummy.children[index];
    }

    dummy.IsEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let dummy = this.root;
    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i) - 97;
        if (!dummy.children[index]) {
            return false;
        }

        dummy = dummy.children[index];
    }

    if (dummy.IsEndOfWord) {
        return true;
    }

    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let dummy = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let index = prefix.charCodeAt(i) - 97;
        if (!dummy.children[index]) {
            return false;
        }

        dummy = dummy.children[index];
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */