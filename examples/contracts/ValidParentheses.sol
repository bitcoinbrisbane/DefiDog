// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Valid Parentheses - LeetCode #20
/// @notice Determine if a string of brackets is valid (properly opened and closed)
/// @dev Uses a stack-based approach with a fixed-size array
contract ValidParentheses {
    /// @notice Check if the bracket string is valid
    /// @param s String containing only '(', ')', '[', ']', '{', '}'
    /// @return true if the string has valid bracket matching
    function isValid(string calldata s) external pure returns (bool) {
        bytes memory str = bytes(s);
        uint256 len = str.length;

        // Stack using fixed-size array (max length = string length)
        bytes1[] memory stack = new bytes1[](len);
        uint256 top = 0;

        for (uint256 i = 0; i < len; i++) {
            bytes1 char = str[i];

            // Opening brackets - push to stack
            if (char == "(" || char == "[" || char == "{") {
                stack[top] = char;
                top++;
            }
            // Closing brackets - check match
            else {
                if (top == 0) return false; // Nothing to match

                top--;
                bytes1 last = stack[top];

                if (char == ")" && last != "(") return false;
                if (char == "]" && last != "[") return false;
                if (char == "}" && last != "{") return false;
            }
        }

        return top == 0;
    }
}
