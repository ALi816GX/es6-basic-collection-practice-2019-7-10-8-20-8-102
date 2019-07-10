'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    const result = [];
    collectionA.forEach(function(a) {
        if(objectB.value.includes(a)){
            result.push(a);
        }
    });

    return result;
}
