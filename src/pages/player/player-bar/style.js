
import styled from 'styled-components'

// 由于歌词图标没有精灵图，因此这里自己切割的
import lyric from '@/assets/img/lyric.JPG';

export const PlayerBarWrapper = styled.div`
    position: fixed;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
    left: 0;
    right: 0;
    bottom: 0%;
    z-index: 99;
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%);
        height: 47px;
    }
`

export const Control = styled.div`
    display: flex;
    align-items: center;
    .btn {
        cursor: pointer;
    }
    .prev, .next {
        width: 28px;
        height: 28px;
    }
    .prev {
        background-position: 0 -130px;;
    }
    .next {
        background-position: -80px -130px;
    }
    .play {
        background-position: 0 ${props => props.isPlaying? "-165px": "-204px"};
        margin: 0 8px;
        width: 36px;
        height: 36px;
    }
`
export const PlayInfo = styled.div`
    display: flex;
    align-items: center;
    width: 642px;
    .image-info {
        width: 34px;
        height: 34px;
        border-radius: 5px;
    }
    .other-info {
        flex: 1;
        color: #e1e1e1;
        margin-left: 10px;
        .text-info {
            color: #e1e1e1;
            position: relative;
            top: 8px;
            left: 8px;
            .singer-name {
                color: #a1a1a1;
                margin-left: 10px;
            }
        }
        .progress-info {
            display: flex;
            align-items: center;
            font-size: 16px;
            .ant-slider {
                width: 493px;
                margin-right: 10px;
                .ant-slider-track, .ant-slider-rail {
                    height: 7px;
                }
            }
            .time {
                .now-time {
                    color: #e1e1e1;
                }
                .time-divider {
                    margin:0 5px;
                }
                .total-time {
                    color: #a1a1a1;
                }
            }
        }
    }
`

export const Operator = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 5px;
    .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    .left {
        display: flex;
        align-items: center;
        .lyric {
            position: relative;
            bottom: 4px;
            ::after {
                content: '';
                position: absolute;
                left: 2px;
                right: 2px;
                top: 2px;
                bottom: 2px;
                background: url(${lyric}) repeat;
            }
        }
        .favor {
            background-position: -88px -163px;
        }
        .share {
            background-position: -114px -163px;
        }
    }
    .right {
        display: flex;
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;
        .volume {
            background-position: -2px -248px;
        }
        .loop {
            background-position: ${props => {
                switch(props.sequence) {
                case 1:
                    return "-66px -248px";
                case 2:
                    return "-66px -344px";
                default:
                    return "-3px -344px";
                }
            }};
        }
        .playlist {
            padding-left: 18px;
            text-align: center;
            color: #ccc;
            width: 59px;
            background-position: -42px -68px;
        }
    }
`