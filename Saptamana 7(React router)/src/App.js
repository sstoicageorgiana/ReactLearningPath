import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Posts from './components/posts/Posts';
import PostPage from './components/posts/PostPage';



import NavBar from './components/layout/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* i can force just one page or wiew to be available AT ONCE => with switch  */}
      <Switch>
          <Route path="/" exact>
              <Redirect to="/register"/>
          </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route exact path="/posts">     {/* "exact" => to match exactly  */}
            <Posts/>
        </Route>
        <Route path="/posts/:postId" exact>     {/* http://localhost:3000/posts/1 */}     {/* :postId becomes a param and it will take the value from it and came be used in a var */}
            <PostPage/>
        </Route>
        <Route path="/posts/:type/:productId" exact>
            <PostPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
