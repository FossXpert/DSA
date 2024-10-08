/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = prices[0];
    let profit = 0;

    for (let i=1;i<prices.length;i++){
        let profitt = prices[i]-mini;
        profit = Math.max(profit,profitt);
        mini = Math.min(prices[i], mini)
    }

    return profit;
};

//Based on constructive algorithm and DP