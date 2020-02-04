import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import About from './router/About';
import Home from './router/Home';
import Navigation from './components/Navigation';
import Detail from './components/Detail';

type Props = {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: Array<string>;
};
const App: React.FC = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
