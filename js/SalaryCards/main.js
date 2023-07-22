// @ts-nocheck
function openModal(cardName, hesabAchma, olkedaxiliAZN, olkedaxiliTeciliAZN, beynelxalqOdenisler) {
    const modal = document.getElementById("rateCardModal");
    const modalCardName = document.getElementById("rateModalCardName");
    const modalHesabAchma = document.getElementById("rateModalHesabAchma");
    const modalOlkedaxiliAZN = document.getElementById("rateModalOlkedaxiliAZN");
    const modalOlkedaxiliTeciliAZN = document.getElementById("rateModalOlkedaxiliTeciliAZN");
    const modalBeynelxalqOdenisler = document.getElementById("rateModalBeynelxalqOdenisler");

    modalCardName.textContent = cardName;
    modalHesabAchma.textContent = "Hesab açma: " + hesabAchma;
    modalOlkedaxiliAZN.textContent = "Ölkədaxili AZN ödənişlə: " + olkedaxiliAZN;
    modalOlkedaxiliTeciliAZN.textContent = "Ölkədaxili təcili AZN ödənişlər: " + olkedaxiliTeciliAZN;
    modalBeynelxalqOdenisler.textContent = "Beynəlxalq ödənişlər: " + beynelxalqOdenisler;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("rateCardModal");
    modal.style.display = "none";
}


const link1 = document.getElementById("advantage-link-1");
const link2 = document.getElementById("advantage-link-2");

link1.addEventListener("click", function (e) {
    e.preventDefault();
    link1.classList.add('active-salary-advantages-redirects');
    link2.classList.remove('active-salary-advantages-redirects');

    const firstRow = document.querySelector(".salaryCards-advantages-options-cards-first-row");
    const secondRow = document.querySelector(".salaryCards-advantages-options-cards-second-row");

    firstRow.classList.remove("d-none");
    secondRow.classList.add("d-none");
});

link2.addEventListener("click", function (e) {
    e.preventDefault();
    link2.classList.add('active-salary-advantages-redirects');
    link1.classList.remove('active-salary-advantages-redirects');
    const firstRow = document.querySelector(".salaryCards-advantages-options-cards-first-row");
    const secondRow = document.querySelector(".salaryCards-advantages-options-cards-second-row");

    firstRow.classList.add("d-none");
    secondRow.classList.remove("d-none");
});