const listSorting = require("./");

describe("Roman to Numerals solution", () => {
  test("It passes the basics", () => {
    expect(listSorting("I")).toBe(1);
    expect(listSorting("V")).toBe(5);
    expect(listSorting("X")).toBe(10);
    expect(listSorting("L")).toBe(50);
    expect(listSorting("C")).toBe(100);
    expect(listSorting("D")).toBe(500);
    expect(listSorting("M")).toBe(1000);
  });

  test("Single - multiple characters", () => {
    expect(listSorting("II")).toBe(2);
    expect(listSorting("XX")).toBe(20);
    expect(listSorting("CC")).toBe(200);
    expect(listSorting("MM")).toBe(2000);
  });

  test("Deductions with I", () => {
    expect(listSorting("IV")).toBe(4);
    expect(listSorting("IX")).toBe(9);
  });

  test("Additions with I", () => {
    expect(listSorting("III")).toBe(3);
    expect(listSorting("VI")).toBe(6);
    expect(listSorting("VII")).toBe(7);
    expect(listSorting("VIII")).toBe(8);
    expect(listSorting("CI")).toBe(101);
    expect(listSorting("CIII")).toBe(103);
    expect(listSorting("DI")).toBe(501);
    expect(listSorting("DII")).toBe(502);
    expect(listSorting("MI")).toBe(1001);
    expect(listSorting("MIV")).toBe(1004);
  });

});