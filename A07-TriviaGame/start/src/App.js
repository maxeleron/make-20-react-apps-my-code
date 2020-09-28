import React, { useEffect, useState, useCallback } from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.css';

export default function App() {
  const [question, setQuetstion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('any');

  const getQuestion = useCallback(() => {
    let url = 'https://opentdb.com/api.php?amount=10';

    if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuetstion(data.results[0]));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  );
}
