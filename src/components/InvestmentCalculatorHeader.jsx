import logo from './../assets/investment-calculator-logo.png';


export const InvestmentCalculatorHeader = () => {
    return (
        <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    )
}