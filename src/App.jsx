import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';

const animation = {
  revealDistance: 150,
};

const App = () => {
  {/* Set up a useEffect for the scroll animation listener*/}
  useEffect(() => {
    const reveal = () => {
        const revealableContainers = document.querySelectorAll('.revealable');
        for (let i = 0; i < revealableContainers.length; i++) {
            const windowHeight = window.innerHeight;
            const topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
              if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
                  revealableContainers[i].classList.add('active');
              } else {
                  revealableContainers[i].classList.remove('active');
              }
        }
    };
    window.addEventListener('scroll', reveal)

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, []);

  return (
    <div className="App">
      <div id='head-container'>
        <h1> Software Engineering Community Board </h1>
        <img src="/sweBanner.jpg"/>
      </div>
      <h2> For those who are unsure where to start in SWE. Here are some links that will help.  
      </h2>
      <Card />
    </div>
  )
}

export default App