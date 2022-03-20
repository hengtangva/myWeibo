
// import { renderRoutes } from 'react-router-config'
// import { HashRouter } from 'react-router-dom'
// import { Provider } from 'react-redux' //  用 provider 共享 store

// import routes from './router'

import globalStore from './store'

import React, { Component } from 'react'
import NavBar from 'components/navBar'
import THAppFooter from './components/app-footer'
export default class App extends Component {

  render() {
    const { name } = globalStore
    return (
      <div>
          <NavBar/>
          hello {name}
          <THAppFooter/>
      </div>
    )
  }
}

