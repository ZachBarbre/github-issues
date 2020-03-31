import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/IssueList.jsx';
import IssueDetail from './components/IssueDetail.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><a href='/'>Create-React-App Issues</a></h1>
      </header>
      <main>
        <Router>
          <Route path='/' exact component={IssueList} />
          <Route path='/issue/:issue_number?' component={IssueDetail} />
        </Router>
      </main>
    </div>
  );
}

export default App;
