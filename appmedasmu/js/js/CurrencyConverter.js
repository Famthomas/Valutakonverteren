// currencyConverter.js (Modul til valutakonvertering)
export class CurrencyConverter {
    constructor() {
        // Definer valutakurser i et objekt
        this.exchangeRates = {
            DKK: { EUR: 0.13, USD: 0.14, GBP: 0.11 },
            EUR: { DKK: 7.44, USD: 1.07, GBP: 0.85 },
            USD: { DKK: 6.95, EUR: 0.93, GBP: 0.79 },
            GBP: { DKK: 8.72, EUR: 1.17, USD: 1.27 }
        };
    }

    /**
     * Konverterer et beløb fra en valuta til en anden.
     * @param {number} amount - Beløbet der skal konverteres.
     * @param {string} fromCurrency - Valuta beløbet er i.
     * @param {string} toCurrency - Valuta der skal konverteres til.
     * @returns {number} - Det konverterede beløb eller null hvis konvertering ikke er mulig.
     */
    convert(amount, fromCurrency, toCurrency) {
        if (fromCurrency === toCurrency) {
            return amount; // Hvis det er samme valuta, returneres det samme beløb
        }
        return this.exchangeRates[fromCurrency]?.[toCurrency] 
            ? amount * this.exchangeRates[fromCurrency][toCurrency]
            : null; // Returner null hvis konvertering ikke er mulig
    }
}
