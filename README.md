# Calculator iPhone


## Preview

![Calculator iPhone Preview](https://github.com/mihaiapostol14/Calculator_iPhone/blob/c383c2f86f030168139ec25cdc2015b098599cff/assets/preview.png)


## Overview

**Calculator iPhone** is a web-based calculator application designed to mimic the look and feel of the iOS Calculator app. It features a visually authentic interface, responsive design, and core calculator functionalities, all implemented using HTML, CSS, and JavaScript.

---

## Features

- **iPhone-inspired UI:**  
  The calculator uses custom CSS variables and styles to closely match the iOS calculator, including border radii, shadow effects, gloss, and a simulated notch.

- **Responsive Design:**  
  The layout adapts to different screen sizes, making it usable on both desktop and mobile browsers.

- **Core Calculator Functions:**  
  - Addition, subtraction, multiplication, and division
  - Clear all (AC)
  - Sign change (+/-)
  - Percentage (%)
  - Decimal (.)
  - Chain calculations and error handling (e.g., division by zero)

- **Accessible Design:**  
  Simple, recognizable button labels and visually clear display.

---

## Structure

- **html/calculator.html:**  
  Contains the main structure of the calculator, including the display and all buttons (digits, operations, etc.).  
  Links to the CSS and JavaScript files.

- **css/calculator.css:**  
  Provides styling to replicate the iPhone calculator appearance, including custom colors, button shapes, and responsive adjustments for smaller screens.

- **js/calculator.js:**  
  Implements calculator logic:
    - Handles button clicks using event delegation.
    - Maintains calculator state (`firstOperand`, `operator`, etc.).
    - Performs calculations and updates the display.
    - Supports chaining operations, handling decimals, and implementing special functions.

---

## How It Works

- **UI:**  
  The calculator interface is laid out as a grid of buttons, with a large display at the top. Styles make it visually similar to the iPhone calculator.

- **Interaction:**  
  - Clicking a button triggers an event in JavaScript.
  - Digits and operations update the display and internal state.
  - Special buttons like AC, +/- and % have dedicated logic.
  - The result is shown in the display, with error handling for invalid operations.

---

## Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mihaiapostol14/Calculator_iPhone.git
   ```
2. Open `html/calculator.html` in a web browser.
3. Use the calculator as you would on an iPhone.



## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## License

This project is provided as-is for demonstration and educational purposes.