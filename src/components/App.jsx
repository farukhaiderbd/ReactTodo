import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import SmartPoll from './smartpoll';
import Game from './ticTac/Game';
import TimeCounter from './timecounter/TimeCounter';
import Todos from './todoapp/todos/index';

class App extends React.Component {
   render() {
       return (
        <Routes >
            <Route path="/tictac" element={  <Game />} />
            <Route path="/timecouter" element={ <TimeCounter /> } />
            <Route path="/todoapp" element={<Todos />} />
            <Route path="/smartpoll" element={ <SmartPoll />} />
            <Route path="/" element={<Home />} />
            
      </Routes>
       );
   }
}

export default App;
