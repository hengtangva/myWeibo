
import  React  from 'react'

import { Redirect } from "react-router";

// 路由懒加载
const THDiscover = React.lazy(() => import("@/pages/discover"));
const THMine = React.lazy(() => import("@/pages/friend"));
const THFriend = React.lazy(() => import("@/pages/mine"));
const THRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const THSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const THRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const THArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const THAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const THDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));

const routes = [
    {
        path: "/",
        exact: true,
        // 路由里面可以写 render 函数，里面做重定向
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: THDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            }, 
            {
                path: "/discover/recommend",
                component: THRecommend,
            },
            {
                path: "/discover/ranking",
                component: THRanking,
            },
            {
                path: "/discover/songs",
                component: THSongs,
            },
            {
                path: "/discover/djradio",
                component: THDjradio,
            },
            {
                path: "/discover/artist",
                component: THArtist,
            },
            {
                path: "/discover/album",
                component: THAlbum,
            },
        ]
    },
    {
        path: "/mine",
        component: THMine
    },
    {
        path: "/friend",
        component: THFriend 
    }
]

export default routes;