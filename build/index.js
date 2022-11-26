"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyDeep = void 0;
function copyDeep(source) {
    if (source !== null && typeof source === "object") {
        if (Array.isArray(source)) {
            return copyDeepArray(source);
        }
        else {
            return copyDeepObject(source);
        }
    }
    return source;
}
exports.copyDeep = copyDeep;
function copyDeepArray(source) {
    const array = [];
    for (const e of source) {
        array.push(copyDeep(e));
    }
    return array;
}
function copyDeepObject(source) {
    const object = {};
    for (const key of Object.keys(source)) {
        object[key] = copyDeep(source[key]);
    }
    return object;
}
exports.default = copyDeep;
//# sourceMappingURL=index.js.map