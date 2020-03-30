import React from 'react';
import IssueList from './components/IssueList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create-React-App Issues</h1>
      </header>
      <main>
        <IssueList />
      </main>
    </div>
  );
}

export default App;
