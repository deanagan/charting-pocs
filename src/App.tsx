import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import './App.css';
import { data } from './data';

const App: React.FC = () => (
    <div className="App">
        <h1 className="title">Pokemon Base Stat Chart</h1>
        <BarChart />
        <LineChart data={data} />
    </div>
);

export default App;
