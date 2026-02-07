// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Two Sum - LeetCode #1
/// @notice Given an array of integers nums and an integer target, return indices of the two numbers that add up to target
/// @dev Uses O(n²) approach since mappings cannot be created in memory in Solidity
contract TwoSum {
    /// @notice Find two indices whose values sum to the target
    /// @param nums Array of integers to search
    /// @param target The target sum
    /// @return The two indices (i, j) where nums[i] + nums[j] == target
    function twoSum(
        int256[] calldata nums,
        int256 target
    ) external pure returns (uint256, uint256) {
        uint256 len = nums.length;

        // O(n²) approach - mappings can't be created in memory
        for (uint256 i = 0; i < len; i++) {
            int256 complement = target - nums[i];

            for (uint256 j = i + 1; j < len; j++) {
                if (nums[j] == complement) {
                    return (i, j);
                }
            }
        }

        revert("No solution found");
    }
}
