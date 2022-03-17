
import styled from 'styled-components'

export const SongWrapper = styled.div`
width: 140px;
margin: 20px ${props => (props.right || 0)} 20px 0;

.cover-top {
    position: relative;
    &>img {
        width: 140px;
        height: 140px;
    }
    .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: 0 0;
        
        .info {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 27px;
            background-position: 0 -537px;
            color: #ccc;
            padding: 0 10px;
            .earPhone {
                display: inline-block;
                margin-right: 5px;
                width: 14px;
                height: 11px;
                background-position: 0 -24px;
            }
            .play {
                display: inline-block;
                width: 16px;
                height: 17px;
                background-position: 0 0;
            }
        }
    }
}
.cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`