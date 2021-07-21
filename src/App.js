import React from 'react'
import questions from "./Data"
import SingleQuestion from "./Question"

function App() {
  return (
  <main>
    <div className="container">
      <h3>FAQ about user login</h3>
      <section className="info">
        {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
      
      </div>
  </main>
  
  );
}

export default App;
