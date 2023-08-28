import './App.css';
import Header from './components/Header'
import CharityCard from './components/CharityCard';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <CharityCard
        charityinfo={{ logo: logo, name: "ReactApp", shortdescription: "This is short description", link: "https://reactjs.org" }}
      />
      <CharityCard
        charityinfo={{ logo: logo, name: "ReactApp", shortdescription: "This is short description", link: "https://reactjs.org" }}
      />
      <CharityCard
        charityinfo={{ logo: logo, name: "ReactApp", shortdescription: "This is short description", link: "https://reactjs.org" }}
      />
    </div>
  );
}

export default App;
