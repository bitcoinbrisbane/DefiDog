import { expect } from "chai";
import { ethers } from "hardhat";

describe("RomanToInteger", function () {
  async function deployRomanToInteger() {
    const RomanToInteger = await ethers.getContractFactory("RomanToInteger");
    const romanToInteger = await RomanToInteger.deploy();
    return { romanToInteger };
  }

  describe("romanToInt", function () {
    it("should return 3 for 'III'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("III")).to.equal(3n);
    });

    it("should return 4 for 'IV'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("IV")).to.equal(4n);
    });

    it("should return 9 for 'IX'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("IX")).to.equal(9n);
    });

    it("should return 58 for 'LVIII'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      // L = 50, V = 5, III = 3
      expect(await romanToInteger.romanToInt("LVIII")).to.equal(58n);
    });

    it("should return 1994 for 'MCMXCIV'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      // M = 1000, CM = 900, XC = 90, IV = 4
      expect(await romanToInteger.romanToInt("MCMXCIV")).to.equal(1994n);
    });

    it("should return 1 for 'I'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("I")).to.equal(1n);
    });

    it("should return 5 for 'V'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("V")).to.equal(5n);
    });

    it("should return 10 for 'X'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("X")).to.equal(10n);
    });

    it("should return 40 for 'XL'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("XL")).to.equal(40n);
    });

    it("should return 90 for 'XC'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("XC")).to.equal(90n);
    });

    it("should return 400 for 'CD'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("CD")).to.equal(400n);
    });

    it("should return 900 for 'CM'", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("CM")).to.equal(900n);
    });

    it("should return 3999 for 'MMMCMXCIX' (max valid roman)", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("MMMCMXCIX")).to.equal(3999n);
    });

    it("should return 0 for empty string", async function () {
      const { romanToInteger } = await deployRomanToInteger();
      expect(await romanToInteger.romanToInt("")).to.equal(0n);
    });
  });
});
