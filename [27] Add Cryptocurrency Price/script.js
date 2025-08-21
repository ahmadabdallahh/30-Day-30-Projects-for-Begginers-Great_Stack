// Get the Current Price Of Coins

const bitCoinElement = document.querySelector(".bitcoin-value")
const ethereumElement = document.querySelector(".ethereum-value")
const dogecoinElement = document.querySelector(".dogecoin-value")

async function fetchCryptoPrices() {
    const url =
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const prices = await response.json();
        bitCoinElement.textContent = `$ ${prices.bitcoin.usd}`
        ethereumElement.textContent = `$ ${prices.ethereum.usd}`
        dogecoinElement.textContent = `$ ${prices.dogecoin.usd}`

    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

fetchCryptoPrices();
