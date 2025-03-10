// main.js (Hovedfil der håndterer UI)
import { CurrencyConverter } from "./currencyConverter.js";

// Opret en ny instans af valutakonverteringsklassen
const converter = new CurrencyConverter();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("converterForm");
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const resultDisplay = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Forhindre siden i at reloade

        // Hent værdier fra inputfelter
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        // Tjek at beløbet er gyldigt
        if (isNaN(amount) || amount <= 0) {
            resultDisplay.textContent = "Indtast venligst et gyldigt beløb.";
            resultDisplay.style.color = "red";
            return;
        }

        // Konverter valutaen
        const convertedAmount = converter.convert(amount, from, to);

        // Vis resultat eller fejlbesked
        if (convertedAmount !== null) {
            resultDisplay.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
            resultDisplay.style.color = "#198754"; // Grøn farve
        } else {
            resultDisplay.textContent = "Konvertering ikke mulig.";
            resultDisplay.style.color = "red";
        }
    });
});
