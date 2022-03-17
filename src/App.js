
import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux' //  用 provider 共享 store

import routes from './router'
import store from './store'

import THAppHeader from "@/components/app-header";
import THAppFooter from "@/components/app-footer";
import THPlayer from '@/pages/player/player-bar';

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <THAppHeader/>
                <Suspense fallback={<div>loading</div>}>
                    { renderRoutes(routes) }
                </Suspense>
                <THAppFooter/>
                <THPlayer/>
            </HashRouter>
        </Provider>
            
    )
})
