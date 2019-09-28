import React, { useState } from "react";
import { useQuiz } from "./hooks/useQuiz";
import "./App.css";
import Quiz from "./Components/Quiz";

const App = () => {
  const [id, setId] = useState(1);
  const [quiz, loading] = useQuiz();
  return (
    <div className="App App-wrapper">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <Quiz key={id} restart={() => setId(id + 1)} {...quiz} />
      )}
    </div>
  );
};

export default App;
