import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';

import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import RecoveriPassword from '../pages/RecoveriPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import NotFount from '../pages/NotFount';
import CreateAccount from '../pages/CreateAccount';
import MenuMobile from '../pages/MenuMobile';
import Orders from '../pages/Orders';

import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
  const   initialState = useInitialState();
  return (
    <AppContext.Provider value={ initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recoveri-password" element={<RecoveriPassword />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/menu-mobile" element={<MenuMobile />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </AppContext.Provider>
  )
}

      export default App