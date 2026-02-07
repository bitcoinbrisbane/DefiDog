# DeFi Dog LeetCode Examples

Hardhat project with Solidity implementations and unit tests for LeetCode problems from the DeFi Dog course.

## Problems Included

| # | Problem | Difficulty |
|---|---------|------------|
| 1 | Two Sum | Easy |
| 13 | Roman to Integer | Easy |
| 20 | Valid Parentheses | Easy |

## Setup

```bash
npm install
```

## Commands

```bash
# Compile contracts
npm run compile

# Run tests
npm test

# Run tests with gas reporting
npm run test:gas

# Clean build artifacts
npm run clean
```

## Project Structure

```
examples/
├── contracts/
│   ├── TwoSum.sol
│   ├── RomanToInteger.sol
│   └── ValidParentheses.sol
├── test/
│   ├── TwoSum.test.ts
│   ├── RomanToInteger.test.ts
│   └── ValidParentheses.test.ts
├── hardhat.config.ts
└── package.json
```
