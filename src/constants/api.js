// Define icon function to fetch icon from API
async function icon() {
    const response = await fetch("https://derak.trade/api/v1");
    const data = await response.json();
    return data.icon;
}

// Define symbol function to fetch symbol from API
async function symbol() {
    const response = await fetch("https://derak.trade/api/v1");
    const data = await response.json();
    return data.symbol;
}

// Define price function to fetch price from API
async function price(value) {
    const response = await fetch("https://derak.trade/api/v1");
    const data = await response.json();
    return data.price;
}

export async function createRandomUser() {
    const iconValue = await icon();
    const symbolValue = await symbol();
    const priceValue = await price(1000);

    return {
        icon: iconValue,
        symbol: symbolValue,
        price: priceValue,
    };
}

export const baseUrl = "https://derak.trade/api/v1";
