import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Checkout from './Checkout'
function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
