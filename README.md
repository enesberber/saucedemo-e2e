#  SauceDemo Cypress E2E Test Suite

This project automates end-to-end (E2E) flows for [SauceDemo](https://www.saucedemo.com) using **JavaScript** and the **Cypress** testing framework.

---

##  Project Design

- Implements the **Page Object Model (POM)** for code maintainability.
- Follows a **data-driven testing** approach using JSON fixture files.
- Encapsulates reusable logic in the `utils/` folder to simplify test scripts.
- Designed for clarity and extensibility — while only core flows are implemented, the structure supports easy expansion for edge cases and additional verifications.

---

##  Test Files Overview

Located in `cypress/e2e/`:

| File             | Description |
|------------------|-------------|
| `login.cy.js`    | Covers all user login scenarios using credentials from `fixtures/`. Follows a generic structure that supports tagging (e.g. `@smoke`) or pattern-based segregation. |
| `purchase.cy.js` | Implements the complete product purchase flow. Designed to be easily extended for additional UI or business logic validations. |

>  Note: Some repetitive test patterns can be moved to `utils/` for abstraction, but were left inline for clarity during initial development.

---

##  Utilities & Support

| File/Folder                 | Description |
|-----------------------------|-------------|
| `utils/loginPage.js`        | Handles login actions using data from `credentials.json`. Reused across multiple test scenarios. |
| `utils/inventory.js`        | Provides helpers for sorting and interacting with product listings. |
| `utils/checkout.js`         | Contains logic for completing the checkout process. |
| `utils/headerAndFooter.js`  | Validates the presence of UI elements like header and footer (post-login checks). |
| `support/commands.js`       | Registers global Cypress commands. Includes helpers like `cy.sel()` for attribute-based selectors. |
| `fixtures/credentials.json` | Contains user types and shared password data for login scenarios. |

---

## 📁 Project Structure

```bash
cypress/
  e2e/                # Test specs (login, purchase, etc.)
  fixtures/           # Test data (users, credentials)
  support/            # Custom Cypress commands
  utils/              # Page-level logic and test helpers
cypress.config.js     # Cypress configuration
README.md             # Project documentation
```
---

##  How to Run the Project

- 1. Check if Git is installed
git --version

 If Git is NOT installed, install it using:
 macOS (with Homebrew)
brew install git

 Windows (with Chocolatey, run as Administrator)
choco install git

 Ubuntu/Debian Linux
sudo apt update
sudo apt install git

- 2. Check if Node.js and npm are installed
node -v
npm -v

 If Node.js is NOT installed, install it using:
macOS (with Homebrew)
brew install node

 Windows (with Chocolatey, run as Administrator)
choco install nodejs-lts

 Ubuntu/Debian Linux
sudo apt update
sudo apt install nodejs npm

- 3. Clone the project
git clone https://github.com/yourusername/saucedemo-e2e.git
cd saucedemo-e2e

```bash
cd saucedemo-e2e
```

Install dependencies:

```bash
npm install
```

Run the Cypress test runner using either:

```bash
npx cypress open
# or
npm run cy
```

This opens the Cypress UI with two options:

- **E2E Testing**
- **Component Testing**

### Running E2E Tests

1. Select **E2E Testing**.
2. Choose a browser (Electron, Chrome, Firefox, etc.).
3. Once selected, a list of test files will be shown.
4. Click on any test file to start execution.

---

