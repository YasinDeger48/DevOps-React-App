import logo from './kubernetes.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         DevOps Engineering Bootcamp - 2024
        </h1>
        <a
          className="App-link"
          href="https://docker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Docker
        </a>
        <a
          className="App-link"
          href="https://kubernetes.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Kubernetes
        </a>
        <a
          className="App-link"
          href="https://ansible.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Ansible
        </a>
      </header>
    </div>
  );
}

export default App;
