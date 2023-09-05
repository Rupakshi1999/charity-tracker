import './App.css';
import Header from './components/Header'
import CharityCard from './components/CharityCard';
import charities from './charities';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/UserLogin';
import MyDonations from './components/MyDonations'

// import { useEffect } from 'react';

function App() {
  // useEffect(
  //   ()=>{
  //     fetch('http://127.0.0.1:5000/recipe/hello')
  //     .then((response=>{console.log(response); return response.json()}))
  //     .then(data=>console.log(data))
  //     .catch(err=>console.log(err))
  //   },[]
  // )

  const CharityComponents = charities.map(
    charity => <
      CharityCard key={charity.id}
      logo={charity.logo}
      name={charity.name}
      shortdescription={charity.shortdescription}
      link={charity.link}
    />)
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mydonations" element={<MyDonations />} />
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path="/" element={CharityComponents} />
        </Routes>
        {/* <CharityForm /> */}
      </div>
    </Router>
  );
}

export default App;
