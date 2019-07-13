'use strict';

module.exports = function countSameElements(collection) {

    const result = [];

    const temp = collection.reduce((all, one) => {

        let num = one.length == 1 ? 1 : parseInt(one.replace(/[^0-9]/ig,""));
    one = one[0];
    if (one in all) {
        all[one] += num;
    }
    else {
        all[one] = num;
    }
    return all;
}, {});

    for (const x in temp){
        result.push({key:x,count:temp[x]});
    }

    return result;

}
