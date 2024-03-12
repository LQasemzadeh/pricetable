async function fetchData() {
    try {
        const response = await fetch("https://derak.trade/api/v1");
        const data = await response.json();
        return {
            icon: data.icon,
            symbol: data.symbol,
            price: data.price
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function Tokens() {
    return await fetchData();
}

export const baseUrl = "https://derak.trade/api/v1";