import React from 'react';
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      title: "Question 1",
      text: "What is a budget, and why is it important?",
      options: [
        "A financial plan to track income and expenses",
        "A way to determine tax liabilities",
        "A summary of net worth",
        "An account for savings only",
      ],
    },
    {
      id: 2,
      title: "Question 2",
      text: "Which of the following is considered a liability?",
      options: [
        "Savings account balance",
        "Credit card debt",
        "Monthly salary",
        "Owned property",
      ],
    },
    {
      id: 3,
      title: "Question 3",
      text: "What is compound interest?",
      options: [
        "Interest calculated on the original principal only",
        "Interest calculated on both the principal and accumulated interest",
        "A fixed annual interest rate",
        "Interest paid only on bonds",
      ],
    },
    {
      id: 4,
      title: "Question 4",
      text: "What does diversification mean in investing?",
      options: [
        "Investing in a variety of assets to reduce risk",
        "Investing all money in stocks",
        "Focusing on short-term profits",
        "Investing only in international markets",
      ],
    },
    {
      id: 5,
      title: "Question 5",
      text: "Which of the following is a benefit of having an emergency fund?",
      options: [
        "Earning more interest on investments",
        "Covering unexpected expenses without borrowing",
        "Reducing monthly expenses",
        "Increasing credit card rewards",
      ],
    },
    {
      id: 6,
      title: "Question 6",
      text: "What is the primary purpose of a credit score?",
      options: [
        "To determine your annual income",
        "To assess your creditworthiness",
        "To measure your financial goals",
        "To track your spending habits",
      ],
    },
    {
      id: 7,
      title: "Question 7",
      text: "Which of the following is considered a fixed expense?",
      options: [
        "Groceries",
        "Monthly rent",
        "Utility bills",
        "Entertainment costs",
      ],
    },
    {
      id: 8,
      title: "Question 8",
      text: "What is the difference between a stock and a bond?",
      options: [
        "Stocks represent ownership; bonds are loans to entities",
        "Bonds are riskier than stocks",
        "Stocks are always short-term investments",
        "Bonds provide no interest income",
      ],
    },
    {
      id: 9,
      title: "Question 9",
      text: "What is the advantage of a 401(k) retirement account?",
      options: [
        "Tax-deferred contributions",
        "Unlimited withdrawal flexibility",
        "Government-matched contributions",
        "No contribution limits",
      ],
    },
    {
      id: 10,
      title: "Question 10",
      text: "What is the purpose of an index fund?",
      options: [
        "To actively manage a portfolio",
        "To mimic the performance of a market index",
        "To invest only in technology stocks",
        "To maximize short-term profits",
      ],
    },
  ];

  return (
    <div className="quiz-container">
      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-icon">
          <div className="menu-icon-shadow"></div>
          <div className="menu-icon-main"></div>
        </div>
        <h1 className="quiz-title">Financial Literacy Quiz</h1>
      </div>

      {/* Questions */}
      <div className="questions-container">
        {questions.map((question) => (
          <div className="question-card" key={question.id}>
            <div className="question-card-shadow"></div>
            <div className="question-card-main">
              <h2 className="question-title">{question.title}</h2>
              <p className="question-text">{question.text}</p>
              <div className="options-container">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button option-${['red', 'yellow', 'green', 'blue'][index % 4]}`}
                  >
                    {index + 1}. {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="submit-container">
        <div className="submit-shadow"></div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Quiz;
