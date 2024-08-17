import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Quote from './components/quote/Quote';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Quote thingToSay='Turning coffee into code one sip at a time'/>
    </>
  )
}

export default App;
