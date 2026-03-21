import './App.css';
import { ToDoWrapper } from './components/ToDoWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List Tracker</h1>
      </header>
      <main>
        <ToDoWrapper />
      </main>
    </div>
  );
}

export default App;
