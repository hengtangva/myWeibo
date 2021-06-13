
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import THAppHeader from "@/components/app-header"
import THAppFooter from "@/components/app-footer"


export default memo(function App() {
    return (
        <div>
            <HashRouter>
                <THAppHeader/>
                { renderRoutes(routes) }
                <THAppFooter/>
            </HashRouter>
        </div>
    )
})
