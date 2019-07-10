'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

    const result = [];
    collectionA.forEach(function(a) {
        if(collectionB.includes(a)){
            result.push(a);
        }
    });

    return result;

}