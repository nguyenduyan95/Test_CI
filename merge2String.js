function merge2String(str1, str2) {
    let merge = '';
    let temp = 0;
    len = (str2.length > str1.length) ? str2.length : str1.length;
    for (let i = 0; i < len; i++) {
        if (str1[i] && str2[i]) {
            merge += str1[i] + str2[i];
        }
        if (!str1[i]) {
            merge += str2[i];
        }
        if (!str2[i]) {
            merge += str1[i];
        }
        // console.log(str1[i],str2[i])
        // temp += str1[i] + str2[i];
    }
    return merge;
}
console.log(merge2String("abcdf", "123"));
console.log(merge2String("abc", "0123"));


