"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const continuesCall = (callback, wait) => setInterval(callback, wait);
const waiteFor = (wait) => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, wait);
});
const debouncedFunction = jest.fn(() => true);
let handler = setTimeout(() => void 0);
class MyClass {
    debouncedFunction() {
        debouncedFunction();
    }
}
__decorate([
    index_1.default(100)
], MyClass.prototype, "debouncedFunction", null);
it('should have been called for once', done => {
    const myClass = new MyClass();
    handler = continuesCall(myClass.debouncedFunction, 10);
    waiteFor(1500).then(() => {
        clearInterval(handler);
    });
    waiteFor(2000).then(() => {
        expect(debouncedFunction).toHaveBeenCalledTimes(1);
        done();
    });
});
