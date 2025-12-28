"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 値を返さない（void）関数
function logMessage(message) {
    console.log("logMessage:", message);
}
// 値を返す関数
function double(n) {
    return n * 2;
}
// 実行
logMessage("Hello TypeScript");
const result = double(5);
console.log("double result:", result);
//# sourceMappingURL=sample.js.map