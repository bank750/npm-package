export const pluck = (element, field) => {
    return element.map((element) => element[field]);
}
// pluck([{name: 'foo'}], 'name');