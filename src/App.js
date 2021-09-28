import { Layout, Space, Typography } from 'antd'
import 'antd/dist/antd.css'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Cryptocurrencies from './pages/Cryptocurrencies/Cryptocurrencies'
import CryptoDetails from './pages/CryptoDetails/CryptoDetails'
import Exchanges from './pages/Exchanges/Exchanges'
import HomePage from './pages/HomePage/HomePage'
import News from './pages/News/News'

function App () {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route
                exact
                path='/'
              >
                <HomePage />
              </Route>
              <Route
                exact
                path='/exchanges'
              >
                <Exchanges />
              </Route>
              <Route
                exact
                path='/cryptocurrencies'
              >
                <Cryptocurrencies />
              </Route>
              <Route
                exact
                path='/crypto/:coinId'
              >
                <CryptoDetails />
              </Route>
              <Route
                exact
                path='/news'
              >
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >Copyright © 2021
            <Link to='/'>
              Cryptoverse Inc.
            </Link> <br />
           All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
