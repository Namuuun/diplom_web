import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom'
import * as ROUTES from '../constants/routes';
import Navigation from './navigation/Navigation'
import Home from '../pages/home/Home';
import Detail from '../pages/detail/Detail';
import Payment from '../pages/payment/Payment';
import './app.css'
import Admin from '../pages/admin/Admin';
export class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navigation/>
            <div className='main'>
                <Routes >
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={ROUTES.DETAIL} element={<Detail/>}/>
                    <Route path={ROUTES.PAYMENT} element={<Payment/>}/>
                    <Route path={ROUTES.ADMIN} element={<Admin/>}/>
                </Routes >
            </div>
          </div>
      </Router>
    )
  }
}

export default App