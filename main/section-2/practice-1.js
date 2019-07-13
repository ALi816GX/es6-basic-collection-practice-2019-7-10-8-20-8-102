'use strict';

module.exports = function countSameElements(collection) {

    const result = [];

    const temp = collection.reduce((all, one) => {
        if (one in all) {
        all[one] ++;
    }
else {
        all[one] = 1;
    }
    return all;
}, {});

    for (const x in temp){
        result.push({key:x,count:temp[x]});
    }

    return result;

}
