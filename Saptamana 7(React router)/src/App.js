import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Posts from './components/posts/Posts';
import PostPage from './components/posts/PostPage';



import NavBar from './components/layout/NavBar';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      <NavBar/>

    
      {/* 

      with Switch :
          - i can force just one page or wiew to be available AT ONCE v5
          - V5, in V6 no longer suported! Replaced with Routes

      Redirect from version V5 will be replaced in V6 with Navigate   
      
      "exact" => to match exactly 

      http://localhost:3000/posts/1 ;  :postId becomes a param and it will take the value from it and came be used in a var

      <switch>
          <Route path="/" exact>
               <Redirect to="/register"/>      
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <Route exact path="/posts">    
              <Posts/>
          </Route>
          <Route path="/posts/:postId" exact>    
              <PostPage/>
          </Route>
          <Route path="/posts/:type/:productId" exact>
              <PostPage/>
          </Route>
      </switch> */}

     

     

      {/*
      - path from routs do not have sub-component, but  element ={<Component/>}
    - redirect from version V5 will be replaced in V6 with Navigate 

    <Redirect to="/register"/>       */}  

      <Routes>
          <Route path="/" element ={<Navigate to= "/register"/>}/> 
          <Route path="/register" element={<Register/>}/> 
          <Route path="/login" element ={<Login/>} /> 
          <Route exact path="/posts" element={<Posts/>}/> 
          <Route path="/posts/:postId" exact element={<PostPage/>}/> 
          <Route path="/posts/:type/:productId" exact element = {<PostPage/>}/>  
      </Routes>
    
    </div>
  );
}

export default App;
