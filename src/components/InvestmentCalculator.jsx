import { useState } from 'react'
import {InvestmentCalculatorFrom} from './InvestmentCalculatorForm.jsx'
import {InvestmentCalculatorHeader} from './InvestmentCalculatorHeader.jsx'
import {InvestmentCalculatorResultTable} from './InvestmentCalculatorResultTable.jsx'


export const InvestmentCalculator = () => {
    const {calculationResults, setCalculationResults} = useState([]);
    return (
        <div>
          <InvestmentCalculatorHeader />
          <InvestmentCalculatorFrom onCalculate={setCalculationResults}/>
    
          {calculationResults && <InvestmentCalculatorResultTable calculationResults={calculationResults}/>}
          {!calculationResults &&  <div className="header">
                                    <h1>No dota to display</h1>
                                </div>}

        </div>
      );
}