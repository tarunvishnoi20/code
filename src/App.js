import React, { useState, useEffect, useReducer } from "react";
import { QUESTIONS } from "./questions";

const totalQuestions = Object.entries(QUESTIONS).length;

export default function App() {

  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { yes: [] });

  function reducer(state, action){
    switch (action.type) {
      case "YES": {
        return {
          yes: [...new Set([...state.yes, action.id])]
        }
      }
      case "NO": {
          return {
            yes: [...state.yes.filter(i => i!==action.id)]
          }
        }
      }
    }

    useEffect(()=> {
      setCount((state.yes.length*100)/totalQuestions);
    },[state]);

  return (
    <div className="main__wrap">
      <main className="container">
        <div>
          <h2 style={{color: "#4285f4"}}>Average rating: <span style={{color: "#339966"}}>{count}</span></h2>
          {
            Object.keys(QUESTIONS).map((item, index) => (
              <>
                <h4>{QUESTIONS[item]}</h4>
                <button style={{marginRight: "20px", width: "100px", backgroundColor: "rgb(66, 133, 244)", color: "#fff"}} onClick={() => dispatch({ type: "YES", id: index })} >Yes</button>
                <button style={{color: "#000", backgroundColor: "#dfe3eb", width: "100px"}} onClick={() => dispatch({ type: "NO", id: index })} >No</button>
              </>
            ))
          }
        </div>
      </main>
    </div>
  );
}