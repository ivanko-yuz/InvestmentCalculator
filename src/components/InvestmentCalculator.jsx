import { useState } from "react";
import { InvestmentCalculatorFrom } from "./InvestmentCalculatorForm.jsx";
import { InvestmentCalculatorHeader } from "./InvestmentCalculatorHeader.jsx";
import { InvestmentCalculatorResultTable } from "./InvestmentCalculatorResultTable.jsx";

export const InvestmentCalculator = () => {
  const [calculationResults, setCalculationResults] = useState(null);
  const [initialInvestments, setinitialInvestments] = useState(0);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    setinitialInvestments(currentSavings);

    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setCalculationResults(yearlyData);
  };

  return (
    <div>
      <InvestmentCalculatorHeader />
      <InvestmentCalculatorFrom onCalculate={calculateHandler} />

      {calculationResults && (
        <InvestmentCalculatorResultTable
          calculationResults={calculationResults}
          initialInvestments={initialInvestments}
        />
      )}
      {!calculationResults && (
        <div className="header">
          <h1>No dota to display</h1>
        </div>
      )}
    </div>
  );
};
