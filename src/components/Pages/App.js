import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './login';
import SignUp from './SignUp';

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Switch>
          <Route path='/SignUp' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App