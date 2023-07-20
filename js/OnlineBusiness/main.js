// @ts-nocheck
const rangeInput = document.getElementById('amount-range-input');
const progressDiv = document.querySelector('.range-slider__progress');
const amountInput = document.getElementById('amount-text-input');
function updateProgressValue() {
    let value = rangeInput.value;
    const maxAllowedValue = parseInt(rangeInput.max);
    const minAllowedValue = parseInt(rangeInput.min);
    rangeInput.setAttribute('step', '1000');

    if (value > maxAllowedValue) {
        value = maxAllowedValue;
    }

    if (value < minAllowedValue) {
        value = minAllowedValue;
    }

    const unit = rangeInput.getAttribute('data-min-value-unit');
    amountInput.value = `${value} ${unit}`;
}

function handleTextInput() {
    let value = parseInt(amountInput.value);
    rangeInput.removeAttribute('step');

    const maxAllowedValue = parseInt(rangeInput.max);
    if (value > maxAllowedValue) {
        value = maxAllowedValue;
    }

    const minAllowedValue = parseInt(rangeInput.min);
    if (value < minAllowedValue) {
        value = minAllowedValue;
    }

    if (isNaN(value)) {
        value = minAllowedValue;
    }

    rangeInput.value = value;
    updateProgressValue();
}

function handleInputFocus() {
    const value = parseInt(amountInput.value);

    rangeInput.value = value;
}

amountInput.addEventListener('input', handleTextInput);
amountInput.addEventListener('blur', handleInputFocus);
rangeInput.addEventListener('input', updateProgressValue);
updateProgressValue();

///////////////////
const termRangeInput = document.getElementById('term-range-input');
const progressDivMonth = document.querySelector('.range-slider__progress');
const termInput = document.getElementById('term-text-input');

function updateTermProgressValue() {
    const value = termRangeInput.value;
    const unit = termRangeInput.getAttribute('data-min-value-unit');
    termInput.value = `${value} ${unit}`;
}

function handleTermInput() {
    updateTermProgressValue();
}

termRangeInput.addEventListener('input', handleTermInput);
updateTermProgressValue();