
import styled from 'styled-components'

import download from "@/assets/img/download.png"
import btnPic from "@/assets/img/banner_sprite.png"

export const BannerWrapper = styled.div`
      position: relative;
      overflow: hidden;
      .banner {
        height: 270px;
        background-color: red;
        display: flex;
        position: relative;
      }
      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${props => props.bgImage}) center center/6000px;
        filter: blur(20px);
        z-index: -1;
        background-size: 100% 100% no-repeat;
        margin: -30px;
      }
`

export const BannerLeft = styled.div`

        width: 730px;

        .banner-item {
            overflow: hidden;
            height: 270px;
            .image {
                width: 100%;
            }
        }

        .ant-carousel .slick-dots li button {
            border-radius: 50%;
            height: 5px;
            width: 5px;
        }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${download});
`


export const BannerControl = styled.div`
      position: absolute;
      left: 0;
      right: 0;
      top: 40%;
      transform: translateY(-50%);
      .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${btnPic});
        background-color: transparent;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, .1);
        }
      }

      .left {
        left: -68px;
        background-position: 0 -360px;
      }

      .right {
        right: -68px;
        background-position: 0 -508px;
      }
  `