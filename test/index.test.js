"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const getTrivialDates = () => {
    return expect.arrayContaining([
        expect.objectContaining({
            name: "Nyttårsaften",
        }),
    ]);
};
test("returns correct (trivial dates) for 2018", () => {
    const holidaysData = (0, src_1.default)(2018);
    expect(holidaysData).toEqual(getTrivialDates());
});
test("returns correct (trivial dates) for year 10000", () => {
    const holidaysData = (0, src_1.default)(10000);
    expect(holidaysData).toEqual(getTrivialDates());
});
//# sourceMappingURL=index.test.js.map