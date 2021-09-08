export function calculateMathString(mathString: string, variables: Record<string, number> = {}): number {
  try {
    const variableNames = Object.keys(variables);
    const variableString = variableNames.map(varName => `var ${varName} = ${variables[varName]};`).join('\r\n');
    const builtinFunctions = `
      var max = function () {
        return Array.from(arguments).reduce((m, v) => v > m ? v : m, Number.NEGATIVE_INFINITY);
      };
      var min = function () {
        return Array.from(arguments).reduce((m, v) => v < m ? v : m, Number.POSITIVE_INFINITY);
      };
    `;
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return Number(Function(`${builtinFunctions} \r\n ${variableString} \r\n return (${mathString});`)());
  } catch (e) {
    return Number.NaN;
  }
}
