// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Roman to Integer - LeetCode #13
/// @notice Convert a roman numeral string to its integer value
/// @dev Processes right to left, comparing with previous value for subtraction rules
contract RomanToInteger {
    /// @notice Convert roman numeral to integer
    /// @param s The roman numeral string (e.g., "MCMXCIV")
    /// @return The integer value (e.g., 1994)
    function romanToInt(string calldata s) external pure returns (uint256) {
        bytes memory str = bytes(s);
        uint256 result = 0;
        uint256 prev = 0;

        // Process right to left
        for (uint256 i = str.length; i > 0; i--) {
            uint256 current = _getValue(str[i - 1]);

            // If current < prev, subtract (subtraction rule)
            if (current < prev) {
                result -= current;
            } else {
                result += current;
            }

            prev = current;
        }

        return result;
    }

    /// @dev Get the integer value for a roman numeral character
    function _getValue(bytes1 char) private pure returns (uint256) {
        if (char == "I") return 1;
        if (char == "V") return 5;
        if (char == "X") return 10;
        if (char == "L") return 50;
        if (char == "C") return 100;
        if (char == "D") return 500;
        if (char == "M") return 1000;
        return 0;
    }
}
