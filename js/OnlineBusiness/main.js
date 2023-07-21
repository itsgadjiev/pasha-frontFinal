// @ts-nocheck
const rangeInput = document.getElementById('amount-range-input');
const progressDiv = document.querySelector('.range-slider__progress');
const amountInput = document.getElementById('amount-text-input');



const termRangeInput = document.getElementById('term-range-input');
const progressDivMonth = document.querySelector('.range-slider__progress');
const termInput = document.getElementById('term-text-input');

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

    updatePriceBusiness();
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

function updatePriceBusiness() {
    const rangeValue = parseFloat(rangeInput.value);
    const termValue = parseFloat(termRangeInput.value);

    if (!isNaN(rangeValue) && !isNaN(termValue) && termValue !== 0) {
        const result = rangeValue / termValue;
        const priceBusinessSpan = document.querySelector('.price-business');
        priceBusinessSpan.textContent = result.toFixed(2);
    }
}


amountInput.addEventListener('input', handleTextInput);
amountInput.addEventListener('blur', handleInputFocus);
rangeInput.addEventListener('input', updateProgressValue);
updateProgressValue();

///////////////////

function updateTermProgressValue() {
    const value = termRangeInput.value;
    const unit = termRangeInput.getAttribute('data-min-value-unit');
    termInput.value = `${value} ${unit}`;
}

function handleTermInput() {
    updateTermProgressValue();
    updatePriceBusiness();
}

termRangeInput.addEventListener('input', handleTermInput);



updateProgressValue();
updateTermProgressValue();
updatePriceBusiness();


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    container.addEventListener("mouseenter", function () {
        container.classList.add("show-modal");
    });

    container.addEventListener("mouseleave", function () {
        container.classList.remove("show-modal");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tableDocs = document.querySelector(".table-docs");
    const tableCredits = document.querySelector(".table-credits-credentials");

    const linkDocs = document.querySelector(".table-docs-redirect");
    const linkCredits = document.querySelector(".table-credits-credentials-redirect");

    linkDocs.addEventListener("click", function (event) {
        event.preventDefault();
        tableCredits.classList.add("d-none");
        tableDocs.classList.remove("d-none");
        linkDocs.classList.add('active-salary-advantages-redirects');
        linkCredits.classList.remove('active-salary-advantages-redirects');

    });

    linkCredits.addEventListener("click", function (event) {
        event.preventDefault();
        tableDocs.classList.add("d-none");
        tableCredits.classList.remove("d-none");
        linkCredits.classList.add('active-salary-advantages-redirects');
        linkDocs.classList.remove('active-salary-advantages-redirects');
    });
});

console.log("salala");

let isFirstVideo = localStorage.getItem("IsFirstVideo");
const customer1Div = document.querySelector(".customer-1");
const customer2Div = document.querySelector(".customer-2");

if (isFirstVideo === null) {
    localStorage.setItem("IsFirstVideo", "true");
}

isFirstVideo = localStorage.getItem("IsFirstVideo");
customer2Div.classList.remove('d-none');
customer2Div.classList.remove('d-none');


if (isFirstVideo === "true") {
    customer2Div.classList.add('d-none');
    localStorage.setItem("IsFirstVideo", false);

} else {
    customer1Div.classList.add('d-none');
    customer2Div.classList.remove('d-none');
    localStorage.setItem("IsFirstVideo", true);

}




