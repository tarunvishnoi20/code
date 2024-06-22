import React, { createRef, Component } from "react";
import { QUESTIONS } from "./questions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QUESTIONS,
      totalQuestions: Object.entries(QUESTIONS).length,
      yes: 0,
      no: 0
    };
  }
  
  myRef = createRef();

  componentDidUpdate() {
    this.myRef.current = ((this.state.yes - this.state.no)/(this.state.totalQuestions))*100;
  }

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <h2>Average rating: {this.myRef.current} </h2>
            {
              Object.keys(this.state.questions).map((item) => (
                <>
                  <h4>{this.state.questions[item]}</h4>
                  <button style={{marginRight: "20px", width: "100px", backgroundColor: "rgb(26,115,232)", color: "#fff"}} onClick = {() => this.setState( {yes: this.state.yes + 1})}>Yes</button>
                  <button style={{color: "#000", backgroundColor: "#fff", width: "100px"}} onClick = {() => this.setState({no: this.state.no + 1})}>No</button>
                </>
              ))
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
