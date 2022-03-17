
import * as actionType from './constants'

import { getSongDetail } from '../../../service/player'

const changCurrentSongAction = (currentSong) => ({
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong
})

export const getCurrentSongAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then((res => {
            // 执行该函数，拿到的是一个 action 对象，让我们 dispatch
            // console.log(res.songs[0]);
            dispatch(changCurrentSongAction(res.songs[0]))
            
        }))
    }
}