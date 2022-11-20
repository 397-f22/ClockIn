import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';
import Header from './components/Header';
import WordPuzzle from './components/WordPuzzle';

const App = () => {

  return (
    <div>
      <Header />
      <AlarmList  />
      <WordPuzzle  />
    </div>
  );
};

export default App;
