'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    const result = [];
    collectionA.forEach(function(a) {
        if(objectB.value.includes(a.key)){
            result.push(a.key);
        }
    });

    return result;
}
