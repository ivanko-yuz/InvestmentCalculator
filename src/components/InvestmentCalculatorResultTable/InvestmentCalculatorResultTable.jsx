import classes from './InvestmentCalculatorResultTable.module.css'

export const InvestmentCalculatorResultTable = (props) => {
  const calculateTotalInvestments = (
    savingsEndOfYear,
    yearlyContribution,
    year
  ) =>
    savingsEndOfYear - parseInt(props.initialInvestments) - (yearlyContribution * year);

  const calculateInvestedCapital = (yearlyContribution, year) =>
    parseInt(props.initialInvestments) + yearlyContribution * year;

  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.calculationResults.map(
          ({ year, yearlyInterest, savingsEndOfYear, yearlyContribution }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(savingsEndOfYear)}</td>
              <td>{formatter.format(yearlyInterest)}</td>
              <td>
                {formatter.format(calculateTotalInvestments(
                  savingsEndOfYear,
                  yearlyContribution,
                  year
                ))}
              </td>
              <td>{formatter.format(calculateInvestedCapital(yearlyContribution, year))}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
