// Function to fetch gold and silver prices from Alpha Vantage API
async function getGoldSilverPrice(apiKey) {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=XAU&apikey=${apiKey}`
      );
  
      const { 'Global Quote': globalQuote } = response.data;
      const goldPrice = globalQuote['05. price'];
  
      return goldPrice;
    } catch (error) {
      console.error('Error fetching gold and silver prices:', error);
    }
  }
  
  // Function to fetch silver price from Alpha Vantage API
  async function getSilverPrice(apiKey) {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=XAG&apikey=${apiKey}`
      );
  
      const { 'Global Quote': globalQuote } = response.data;
      const silverPrice = globalQuote['05. price'];
  
      return silverPrice;
    } catch (error) {
      console.error('Error fetching silver price:', error);
    }
  }
  
  // Function to convert currency using Open Exchange Rates API
  async function convertCurrency(apiKey, goldPrice, silverPrice) {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`
      );
  
      const exchangeRates = response.data.rates;
      const exchangeRate = exchangeRates['NPR']; // Replace 'NPR' with the appropriate currency code for Nepali currency
  
      const nepaliGoldPrice = goldPrice * exchangeRate;
      const nepaliSilverPrice = silverPrice * exchangeRate;
  
      return { nepaliGoldPrice, nepaliSilverPrice };
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  }
  
  // Function to display gold and silver prices on the page
  function displayPrices(nepaliGoldPrice, nepaliSilverPrice) {
    const goldPriceElement = document.getElementById('gold-price');
    const silverPriceElement = document.getElementById('silver-price');
  
    goldPriceElement.textContent = `Gold Price (in Nepali Currency): ${nepaliGoldPrice}`;
    silverPriceElement.textContent = `Silver Price (in Nepali Currency): ${nepaliSilverPrice}`;
  }
  
  // Main function to fetch prices and display them
  async function fetchAndDisplayPrices() {
    const alphaVantageApiKey = 'FMVU3O7VOPS8JAHH';
    const openExchangeRatesApiKey = 'fdee02c378fd43789a70a832a1b187b1';
  
    const goldPrice = await getGoldSilverPrice(alphaVantageApiKey);
    const silverPrice = await getSilverPrice(alphaVantageApiKey);
  
    const { nepaliGoldPrice, nepaliSilverPrice } = await convertCurrency(
      openExchangeRatesApiKey,
      goldPrice,
      silverPrice
    );
  
    displayPrices(nepaliGoldPrice, nepaliSilverPrice);
  }
  
  // Call the main function
  fetchAndDisplayPrices();