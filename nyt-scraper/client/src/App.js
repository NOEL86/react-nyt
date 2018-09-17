import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Results from "./components/Results";
import saved from "./components/Saved";
import router from "./Routes";

class App extends Component {

  state = {
    results,
    saved,
    notes

  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">NY Times Article Scrubber</h1>
            <p id="top" >Search for and annotate articles of interest!</p>
          </header>

          <Form
            scrapeData={this.scrapeData} />

          {this.state.results.map(results => {
            return <Results
              id={results.id}
              key={results.id}
              title={results.title}
              date={results.date}
              url={results.url}
              saveScraped={this.saveScraped}
              makeANote={this.makeANote}
            />
          })
          }

          {/* <switch>
            <Route exact path="/results" component={Results} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/saved/notes" component={Saved} />
            <Route component={NoMatch} />
          </switch> */}

          {this.state.saved.map(saved => {
            return <Saved
              id={saved.id}
              key={saved.id}
              title={saved.title}
              date={saved.date}
              url={saved.url}
              getNotes={this.getNotes}
              remove={this.remove}
            />
          })
          }

        </div>

      </div>
    );
  }
}

export default App;
