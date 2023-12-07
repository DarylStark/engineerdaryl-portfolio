import Portfolio from './pages/portfolio/Portfolio'

import Header from './elements/Header';
import Feeter from './elements/Feeter';

import './App.scss';

function App() {
  return (
    <div id='app'>
      <Header />
      <Portfolio />
      <Feeter />
    </div>
  )
}

export default App;
