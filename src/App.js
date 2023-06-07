import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hello, I'm John Doe. I'm a web developer with experience in React,
            HTML, CSS, and JavaScript.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>Description of project 1</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of project 2</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>Description of project 3</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: john@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <footer>
        <p>© 2023 John Doe</p>
      </footer>
    </div>
  );
}

export default App;
