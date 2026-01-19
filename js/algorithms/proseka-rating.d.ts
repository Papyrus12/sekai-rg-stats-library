/**
 * Calculates the rating for a proseka score using the 39S rating system.
 * Judgement weights: Perfect = 3, Great = 2, Good = 1, Bad = 0, Miss = 0
 *
 * @param perfectCount - The number of perfects the user got. Worth 3 points each.
 * @param greatCount - The number of greats the user got. Worth 2 points each.
 * @param goodCount - The number of goods the user got. Worth 1 point each.
 * @param badCount - The number of bads the user got. Worth 0 points.
 * @param missCount - The number of misses the user got. Worth 0 points.
 * @param internalChartLevel - The internal chart level (constant).
 * @param maxCombo - The maximum combo achievable on the chart.
 */
export declare function calculate(perfectCount: number, greatCount: number, goodCount: number, badCount: number, missCount: number, internalChartLevel: number, maxCombo: number): number;
