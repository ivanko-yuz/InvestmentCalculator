
export const InvestmentCalculatorResultTable = (props) => {
    return (
      <table className="result">
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
        {props.calculationResults.map(({
          year,
          yearlyInterest,
          savingsEndOfYear,
          yearlyContribution,
        }) => (
           <tr>
            <td>year</td>
            <td>savingsEndOfYear</td>
            <td>yearlyInterest</td>
            <td>yearlyContribution</td>
            <td>yearlyContribution</td>
        </tr>
        ))}
       
      </tbody>
    </table>
    )
}