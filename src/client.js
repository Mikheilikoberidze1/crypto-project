export async function fetchPrices() {
    const data = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Csolana%2Ctether%2Cdogecoin%2Cflow%2Cstellar&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=false`);
    return data.json();
}