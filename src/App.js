import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from './pages/BooksPage';
import Categories from './pages/CategoriesPage';
import Navbar from './components/NavBar';
import NoMatch from './pages/NoMatch';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </>
);

export default App;
