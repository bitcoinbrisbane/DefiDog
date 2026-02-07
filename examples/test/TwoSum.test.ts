import { expect } from "chai";
import { ethers } from "hardhat";

describe("TwoSum", function () {
  async function deployTwoSum() {
    const TwoSum = await ethers.getContractFactory("TwoSum");
    const twoSum = await TwoSum.deploy();
    return { twoSum };
  }

  describe("twoSum", function () {
    it("should return [0, 1] for nums=[2,7,11,15], target=9", async function () {
      const { twoSum } = await deployTwoSum();
      const [i, j] = await twoSum.twoSum([2, 7, 11, 15], 9);
      expect(i).to.equal(0n);
      expect(j).to.equal(1n);
    });

    it("should return [1, 2] for nums=[3,2,4], target=6", async function () {
      const { twoSum } = await deployTwoSum();
      const [i, j] = await twoSum.twoSum([3, 2, 4], 6);
      expect(i).to.equal(1n);
      expect(j).to.equal(2n);
    });

    it("should return [0, 1] for nums=[3,3], target=6", async function () {
      const { twoSum } = await deployTwoSum();
      const [i, j] = await twoSum.twoSum([3, 3], 6);
      expect(i).to.equal(0n);
      expect(j).to.equal(1n);
    });

    it("should work with negative numbers", async function () {
      const { twoSum } = await deployTwoSum();
      const [i, j] = await twoSum.twoSum([-1, -2, -3, -4, -5], -8);
      expect(i).to.equal(2n);
      expect(j).to.equal(4n);
    });

    it("should work with mixed positive and negative numbers", async function () {
      const { twoSum } = await deployTwoSum();
      const [i, j] = await twoSum.twoSum([-3, 4, 3, 90], 0);
      expect(i).to.equal(0n);
      expect(j).to.equal(2n);
    });

    it("should revert when no solution exists", async function () {
      const { twoSum } = await deployTwoSum();
      await expect(twoSum.twoSum([1, 2, 3], 100)).to.be.revertedWith(
        "No solution found"
      );
    });

    it("should handle larger arrays", async function () {
      const { twoSum } = await deployTwoSum();
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const [i, j] = await twoSum.twoSum(nums, 19);
      expect(i).to.equal(8n);
      expect(j).to.equal(9n);
    });
  });
});
