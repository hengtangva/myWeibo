
import { React } from 'react'

import THDiscover from "@/pages/discover";
import THMine from "@/pages/mine";
import THFriend from "@/pages/friend";

import THRecommend from '@/pages/discover/c-pages/recommend'
import THSongs from '@/pages/discover/c-pages/songs'
import THRanking from '@/pages/discover/c-pages/ranking'
import THArtist from '@/pages/discover/c-pages/artist'
import THAlbum from '@/pages/discover/c-pages/album'
import THDjradio from '@/pages/discover/c-pages/djradio'

import { Redirect } from "react-router";

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