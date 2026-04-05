class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let code;
        let str = s.toLowerCase().split(" ").join("");

        // Find and remove non-alphabetical characters
        for (let i = 0; i < s.length; i++) {
            // check if character is non-alphabetical
            code = str.charCodeAt(i);
            if ((code < 97 || code > 122) && !(code > 47 && code < 58)) {
                str = str.replace(str[i], "");
            }
        }

        let end = str.length - 1;

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[end]) {
                return false;
            }
            end--;
        }
        return true;
    }
}
