import React, { useState, useEffect } from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import './App.css';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TaskCreate from './screens/TaskCreate';


function App() {


  return (
    <Router>
      <div className="App">
        <HeaderBar />

        <Container>

            <Route path='/login' exact component={LoginScreen} />
            <Route path='/register' exact component={RegisterScreen} />
            <Route path='/home' exact component={HomeScreen} />
            <Route path='/task/create' exact component={TaskCreate} />
        </Container>

      </div>
    </Router>

  );
}

export default App;
