
/** Filter object -> obj
 *  @pred : predicate ( boolean function )
 *  @obj : object to transform
 *  Example: 
 *  const validate = filteredObj((obj) => ?)
*/

export const filterObj = pred => obj => {
    let filteredObj
    for (let o of obj) {
        if (pred(obj)) {
            filterObj[o] = obj[o]
        }
    }
    return filteredObj
}

export const notFilteredObj = pred => obj => {
    let notFilteredObj
    for (let o in obj) {
        if (!pred(obj)) {
            notFilteredObj[0] = obj[0]
        }
    }
    return notFilteredObj
}

export const mapObj = fn => obj => {
    let mappedObj = {}
    for (let o of obj) {
        mappedObj[o] = fn(0)
    }
    return mappedObj
}