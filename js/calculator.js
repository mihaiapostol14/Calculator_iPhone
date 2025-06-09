const display = document.getElementById('display')

let firstOperand = null
let operator = null
let waitingForSecondOperand = false
let shouldResetDisplay = false

// Helper functions
function updateDisplay(value) {
  display.textContent = value
}
function getDisplayValue() {
  return display.textContent
}
function resetCalculator() {
  updateDisplay('0')
  firstOperand = null
  operator = null
  waitingForSecondOperand = false
  shouldResetDisplay = false
}

// Core math operations
function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b
    case '−':
      return a - b
    case '×':
      return a * b
    case '÷':
      return b === 0 ? 'Error' : a / b
    default:
      return b
  }
}

// Button click handling
document.querySelector('.grid').addEventListener('click', function (e) {
  const btn = e.target
  if (!btn.classList.contains('action-btn')) return
  const value = btn.textContent

  // Digits (including 0)
  if (btn.classList.contains('digit-btn') || btn.classList.contains('zero-btn')) {
    if (getDisplayValue() === '0' || shouldResetDisplay) {
      updateDisplay(value)
      shouldResetDisplay = false
    } else {
      updateDisplay(getDisplayValue() + value)
    }
    waitingForSecondOperand = false
    return
  }

  // Decimal point
  if (btn.classList.contains('dot-btn')) {
    if (shouldResetDisplay) {
      updateDisplay('0.')
      shouldResetDisplay = false
    } else if (!getDisplayValue().includes('.')) {
      updateDisplay(getDisplayValue() + '.')
    }
    return
  }

  // Clear All (AC)
  if (btn.classList.contains('clear-all-btn')) {
    resetCalculator()
    return
  }

  // Special operations: +/- and %
  if (btn.classList.contains('special-operation-btn')) {
    let currentValue = parseFloat(getDisplayValue())
    if (value === '+/-') {
      currentValue = -currentValue
    } else if (value === '%') {
      currentValue = currentValue / 100
    }
    updateDisplay(currentValue.toString())
    shouldResetDisplay = false
    return
  }

  // Math operations (+, −, ×, ÷)
  if (btn.classList.contains('math-operation-btn')) {
    if (operator && !waitingForSecondOperand) {
      // Chain calculations
      const inputValue = parseFloat(getDisplayValue())
      const result = calculate(firstOperand, inputValue, operator)
      updateDisplay(String(result))
      firstOperand = result === 'Error' ? null : result
    } else {
      firstOperand = parseFloat(getDisplayValue())
    }
    operator = value
    shouldResetDisplay = true
    waitingForSecondOperand = true
    return
  }

  // Equal operation
  if (btn.classList.contains('equal-btn')) {
    if (operator === null || waitingForSecondOperand) return
    const inputValue = parseFloat(getDisplayValue())
    let result = calculate(firstOperand, inputValue, operator)
    updateDisplay(String(result))
    firstOperand = result === 'Error' ? null : result
    operator = null
    shouldResetDisplay = true
    waitingForSecondOperand = false
    return
  }
})

// Initialize display value on page load
updateDisplay('0')
