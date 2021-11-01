import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavbarComponent from './components/navigation/Navbar';
import UserProfile from './components/view/profile/UserProfile';
import Dashboard from './components/view/dashbord/Dashbord';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Tidsbanken"
  }

  render() {
    return (
        <BrowserRouter>
          <div style={{overflowX:"hidden"}}>
          <NavbarComponent />
            <div className="container" style={{paddingTop:"100px"}}>
              <Switch>
                <Route path="/" exact>
                <Dashboard />
                </Route>
                  <Route path="/profile" exact>
                  <UserProfile/>
                </Route>
              </Switch>
            </div>
          
          </div>
        </BrowserRouter>
    );
  }
}
export default App;

