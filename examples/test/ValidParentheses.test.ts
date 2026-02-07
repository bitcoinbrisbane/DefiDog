import { expect } from "chai";
import { ethers } from "hardhat";

describe("ValidParentheses", function () {
  async function deployValidParentheses() {
    const ValidParentheses =
      await ethers.getContractFactory("ValidParentheses");
    const validParentheses = await ValidParentheses.deploy();
    return { validParentheses };
  }

  describe("isValid", function () {
    describe("valid strings", function () {
      it("should return true for '()'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("()")).to.equal(true);
      });

      it("should return true for '()[]{}'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("()[]{}")).to.equal(true);
      });

      it("should return true for '([])'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("([])")).to.equal(true);
      });

      it("should return true for '{[]}'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("{[]}")).to.equal(true);
      });

      it("should return true for empty string", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("")).to.equal(true);
      });

      it("should return true for nested brackets '([{}])'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("([{}])")).to.equal(true);
      });

      it("should return true for complex valid string '(())[{}]'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("(())[{}]")).to.equal(true);
      });

      it("should return true for multiple nested '{{[[(())]]}}'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("{{[[((()))]]}}")).to.equal(true);
      });
    });

    describe("invalid strings", function () {
      it("should return false for '(]'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("(]")).to.equal(false);
      });

      it("should return false for '([)]'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("([)]")).to.equal(false);
      });

      it("should return false for single opening bracket '('", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("(")).to.equal(false);
      });

      it("should return false for single closing bracket ')'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid(")")).to.equal(false);
      });

      it("should return false for mismatched '{]'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("{]")).to.equal(false);
      });

      it("should return false for extra closing ')()('", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid(")()(")).to.equal(false);
      });

      it("should return false for unclosed brackets '((('", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("(((")).to.equal(false);
      });

      it("should return false for extra closers ')))'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid(")))")).to.equal(false);
      });

      it("should return false for wrong order '[}'", async function () {
        const { validParentheses } = await deployValidParentheses();
        expect(await validParentheses.isValid("[}")).to.equal(false);
      });
    });
  });
});
