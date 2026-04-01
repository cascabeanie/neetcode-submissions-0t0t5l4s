class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sHash = {};
        const tHash = {};

        for (let i = 0; i < s.length; i++) {
            sHash[s[i]] = (sHash[s[i]] || 0) + 1;
            tHash[t[i]] = (tHash[t[i]] || 0) + 1;
        }

        const keys = Object.keys(sHash);

        for (let k = 0; k < keys.length; k++) {
            if (sHash[keys[k]] !== tHash[keys[k]]) {
                return false;
            }
        }

        return true;
    }
}
