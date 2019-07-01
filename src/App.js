import React, {useState} from 'react';
import './App.css';

import Homepage from './components/Homepage';
import AddActivity from './components/AddActivity';
function App() {
    const [screen, setScreen] = useState('addActivity');

    return (
        <div className="App">
            {screen === 'homepage' && <Homepage setScreen={setScreen}/>}
            {screen === 'addActivity' && <AddActivity/>}
        </div>
    );
}

export default App;
