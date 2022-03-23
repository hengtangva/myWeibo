

import globalStore from './store'
import React, { Component, Suspense  } from 'react'
import {Routes, Route } from "react-router-dom";
import Loadable from 'react-loadable';


import NavBar from 'components/navBar'
import THAppFooter from "@/components/app-footer"
import Loading from './components/loading';
const BrowserWeibo = Loadable({ loader: () => import("@/pages/browserWeibo"), loading: Loading, delay: 1000 });
const CheckUser = Loadable({ loader: () => import("@/pages/checkUser"), loading: Loading, delay: 1000 });
const CheckComment = Loadable({ loader: () => import("@/pages/checkComment"), loading: Loading, delay: 1000 });

export default class App extends Component {

  render() {
    const { name } = globalStore
    return (
      <div>
        <Suspense fallback={<Loading/>}>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<BrowserWeibo/>} />
                  <Route path="/weibo" element={<BrowserWeibo/>} />
                  <Route path="user" element={<CheckUser />} />
                  <Route path="comment" element={<CheckComment />} />
                </Routes>
                hello {name}
                <THAppFooter/>
        </Suspense>
        </div>
    )
  }
}

