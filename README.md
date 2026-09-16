# Playwright QA Flagship Project

![Playwright Tests](https://github.com/Khurrammuslim/playwright-qa-flagship/actions/workflows/playwright.yml/badge.svg)

## Overview
End-to-end + API test automation flagship project — built to demonstrate 
senior QA/SDET skills using Playwright + TypeScript.

## Tech Stack
- Playwright (E2E + API testing)
- TypeScript with path aliases
- Page Object Model + custom fixtures
- Docker + Docker Compose
- GitHub Actions CI/CD (sharding, smoke gate, caching)
- Allure Reporting

## Project Structure
├── tests/
│   ├── ui/        # UI end-to-end tests
│   └── api/       # API tests
├── src/
│   ├── data/        # Test data (JSON)
│   └── fixtures/    # Custom test fixtures
│   └── pages/       # Page Object Models
└── .github/workflows/  # CI pipeline

## Running Tests
\`\`\`
npm test                  # all tests
npm run test:smoke        # smoke tests only
npm run test:api          # API tests with mock server
docker-compose up --build # full containerized run
\`\`\`

## Roadmap
- [x] Project scaffold + CI setup
- [x] E2E test suite + POM + fixtures
- [x] API testing layer
- [x] Docker containerization
- [ ] Performance testing (k6)
- [ ] AI-powered QA tool integration
- [ ] Full-stack QA platform (Next.js)

## Status
🚧 Work in progress — part of a multi-stack QA portfolio build.

## Known Limitations
- The local mock API (`json-server`) uses synchronous file writes and can 
  occasionally show transient connection issues under high parallel load. 
  Mitigated via `retries: 2` on the API test project — this is a known 
  trade-off of using a lightweight mock server rather than a production database.