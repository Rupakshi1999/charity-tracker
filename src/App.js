import './App.css';
import Header from './components/Header'
import CharityCard from './components/CharityCard';
import charities from './charities';
import CharityForm from './components/CharityForm'
import { useEffect } from 'react';

function App() {
  useEffect(
    ()=>{
      fetch('http://127.0.0.1:5000/recipe/hello')
      .then((response=>{console.log(response); return response.json()}))
      .then(data=>console.log(data))
      .catch(err=>console.log(err))
    },[]
  )

  const CharityComponents = charities.map(charity => <CharityCard key={charity.id} logo={charity.logo} name={charity.name} shortdescription={charity.shortdescription} link={charity.link} />)
  return (
    <div className="App">
      <Header />
      {/* <CharityForm /> */}
      {CharityComponents}
    </div>
  );
}

export default App;
