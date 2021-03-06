import './App.css';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './Components/Profile';
import Userdatastate from './context/UserDataState';

function App() {
  return (
    <Userdatastate>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <div className="App">
            <Login/>
          </div>
        }>
        </Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    </Userdatastate>
  );
}

export default App;
