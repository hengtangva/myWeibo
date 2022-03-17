import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getCurrentSongAction } from '../store/actionCreators';
import { getSizeImg, formatMinuteSecond, getPlayUrl } from '@/utils/format-utils'

import {
    PlayerBarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
import { Slider } from 'antd';



export default memo(function THPlayer() {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    // const [playSequeue, setPlaySequeue] = useState(1);
    const [currentTime, setCurrentTime] = useState(0); // 单位是 s
    const [isChange, setIsChange] = useState(false)

    // redux hooks
    
    // 当前歌曲
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong'])
    }),shallowEqual)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCurrentSongAction(1330348068));
    },[dispatch])

    // other handle

    // 注意的是，由于请求是异步的，再还没有拿到数据的时候，渲染组件，会拿不到里面的属性，导致报错
    // 对于第一层的属性，没有多大的影响，一开始由于是 undefined 的，因此默认不渲染即可，不会报错
    // 但是你去拿第二层的 属性的时候，是去拿 undefined 的属性，基本数据类型没有属性，直接报错
    const picUrl = (currentSong.al && currentSong.al.picUrl)||"";
    const singerName = (currentSong.ar && currentSong.ar[0].name)||"";
    const duration = currentSong.dt || 0;  // 单位是毫秒

    const audioRef = useRef();

    useEffect(() => {
        let audio = audioRef.current
        audio.src = getPlayUrl(currentSong.id);
    },[currentSong])

    const playMusic = useCallback(() => {
        let audio = audioRef.current
        if(!isPlaying) {
            setIsPlaying(!isPlaying);
            audio.currentTime = currentTime;
            audio.play();
        } else {
            setIsPlaying(!isPlaying);
            setCurrentTime(audio.currentTime);
            audio.pause();
        }
    },[isPlaying,currentTime])

    const timeUpdate = (e) => {
        console.log('time-update')
        let time = e.target.currentTime;
        if(!isChange) {
            setProgress(100*(time*1000)/duration)
            setCurrentTime(e.target.currentTime);
        }
        
    }

    //  处理进度条的钩子
    // callback 的使用场景，要向一个组件内部传递回调函数的时候，需要使用，防止重绘

    const sliderChangeEnd = useCallback((value) => {
        setProgress(value)
        const time = (value/100)*duration/1000;
        setCurrentTime(time)
        audioRef.current.currentTime = time; // 让音频也到达滚动位置
        setIsChange(false);  // 结束滑动时，打开锁，让音乐继续带动滚动条
        if(!isPlaying) {
            playMusic();
        }
    },[duration, isPlaying, playMusic])
    
   
    const sliderChange = useCallback((value) =>{
        setProgress(value)
        setIsChange(true);  // 滑动时，关闭 isChange 锁，让进度条不再滚动
        const time = (value/100)*duration/1000;
        setCurrentTime(time) // 将当前时间变为滑动到的时间
    },[duration])
    
    return (
        <PlayerBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="prev sprite_playbar btn"></button>
                    <button className="play sprite_playbar btn"
                            onClick={ e => playMusic() }
                    ></button>
                    <button className="next sprite_playbar btn"></button>
                </Control>
                <PlayInfo>
                    <div className="image-info">
                        <a href="/#">
                            <img src={ getSizeImg(picUrl,35)} alt=""/>
                        </a>
                    </div>
                    <div className="other-info">
                        <div className="text-info">
                            <span>{currentSong.name}</span>
                            <span className="singer-name">{singerName}</span>
                        </div>
                        <div className="progress-info">
                            <Slider tooltipVisible={false} 
                                    defaultValue={0}
                                    value={progress} 
                                    onAfterChange={sliderChangeEnd}
                                    onChange={sliderChange}
                            />
                            <div className="time">
                                <span className="now-time">{formatMinuteSecond(currentTime*1000)}</span>
                                <span className="time-divider">/</span>
                                <span className="total-time">{formatMinuteSecond(duration)}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="btn lyric sprite_playbar"></button>
                        <button className="btn favor sprite_playbar"></button>
                        <button className="btn share sprite_playbar"></button>
                    </div>
                    <div className="right">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop"></button>
                        <button className="sprite_playbar btn playlist">8</button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
        </PlayerBarWrapper>
    )
})
