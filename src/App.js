import './App.css';
import About from './components/about/About';
import Divider from './components/divider/Divider';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ProjectCard from './components/project/Project';
import Quote from './components/quote/Quote';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Quote thingToSay='Turning coffee into code one sip at a time'/>
      <Divider title='Projects' hasMore={true} />
      <ProjectCard />
      <Divider title='Skills'/>
      <Skills />
      <Divider title='About me' />
      <About />
      <Divider title='Contacts' />
    </>
  )
}

export default App;
