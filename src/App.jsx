import React, { useState } from 'react';

import CreditCard from './CreditCard';
import CreditCardForm from './CreditCardForm';

import './App.css';

function App() {
  const [creditCardNumber, setCreditCardNumber] = useState('');  
  const [creditCardName, setCreditCardName] = useState('');  
  const [creditCardExpirationMonth, setCreditCardExpirationMonth] = useState('');  
  const [creditCardExpirationYear, setCreditCardExpirationYear] = useState('');  
  const [creditCardCvv, setCreditCardCvv] = useState('');

  const [creditCardNumberError, setCreditCardNumberError] = useState(false);
  const [creditCardNameError, setCreditCardNameError] = useState(false);
  const [creditCardExpirationFieldError, setCreditCardExpirationFieldError] = useState(false);
  const [creditCardCvvError, setCreditCardCvvError] = useState(false);

  const [focusOnCreditCardNumber, setFocusOnCreditCardNumber] = useState(false);
  const [focusOnCreditCardName, setFocusOnCreditCardName] = useState(false);
  const [focusOnCreditCardExpirationMonth, setFocusOnCreditCardExpirationMonth] = useState(false);

  const [showFront, setShowFront] = useState(true);

  /**
   * @description Handler for submit; it simply validates the fields
   * @param {Object} event
   */
  function handleSubmit(event) {
    event.preventDefault();

    if (creditCardNumber === '' || creditCardNumber.length !== 19) {
      setCreditCardNumberError(true);
    } else {
      setCreditCardNumberError(false);
    }

    if (creditCardName.trim() === '') {
      setCreditCardNameError(true);
    } else {
      setCreditCardNameError(false);
    }

    if (creditCardExpirationMonth === '' || creditCardExpirationYear === '') {
      setCreditCardExpirationFieldError(true);
    } else {
      setCreditCardExpirationFieldError(false);
    }

    if (creditCardCvv.trim() === '' || creditCardCvv.length !== 3) {
      setCreditCardCvvError(true);
    } else {
      setCreditCardCvvError(false);
    }
  }

  return (
    <div className="app">
      <CreditCard
        creditCardCvvFromInput={creditCardCvv}
        creditCardExpirationMonthFromInput={creditCardExpirationMonth}
        creditCardExpirationYearFromInput={creditCardExpirationYear}   
        creditCardNumberFromInput={creditCardNumber}
        creditCardNameFromInput={creditCardName}
        showFront={showFront}
        setFocusOnCreditCardNumber={setFocusOnCreditCardNumber}
        setFocusOnCreditCardName={setFocusOnCreditCardName}
        setFocusOnCreditCardExpirationMonth={setFocusOnCreditCardExpirationMonth}
      />
      <CreditCardForm
        creditCardNumber={creditCardNumber}
        creditCardName={creditCardName}
        creditCardExpirationMonth={creditCardExpirationMonth}
        creditCardExpirationYear={creditCardExpirationYear}
        creditCardCvv={creditCardCvv}
        creditCardNumberError={creditCardNumberError}
        creditCardNameError={creditCardNameError}
        creditCardExpirationFieldError={creditCardExpirationFieldError}
        creditCardCvvError={creditCardCvvError}
        handleSubmit={handleSubmit}
        setCreditCardNumber={setCreditCardNumber}
        setCreditCardName={setCreditCardName}
        setCreditCardExpirationMonth={setCreditCardExpirationMonth}
        setCreditCardExpirationYear={setCreditCardExpirationYear}
        setCreditCardCvv={setCreditCardCvv}
        cvvOnFocus={() =>  setShowFront(false)}
        cvvOnBlur={() =>  setShowFront(true)}
        focusOnCreditCardNumber={focusOnCreditCardNumber}
        onBlurForCreditCardNumberInput={() => setFocusOnCreditCardNumber(false)}
        focusOnCreditCardName={focusOnCreditCardName}
        onBlurForCreditCardNameInput={() => setFocusOnCreditCardName(false)}
        focusOnCreditCardExpirationMonth={focusOnCreditCardExpirationMonth}
        onBlurForCreditCardExpirationMonthInput={() => setFocusOnCreditCardExpirationMonth(false)}
      />
    </div>
  );
}

export default App;
