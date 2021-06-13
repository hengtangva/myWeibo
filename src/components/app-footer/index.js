import React, { memo, Fragment } from 'react'


import {
    footerLinks,
    footerImages
} from "@/common/local-data"
import {
    FooterWrapper,
    FooterLeft,
    FooterRight
} from "./style";

export default memo(function THAppFooter() {
    return (
        <FooterWrapper>
            <div className="wrap-v2 content">
                <FooterLeft>
                    <div className="link">
                        {
                            footerLinks.map((item) => {
                                return (
                                    <Fragment key={item.title}>
                                        <a href={item.link}>{item.title}</a>
                                        <span className="line">|</span>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="copyright">
                        <div>
                            <span>网易公司版权所有©1997-2021</span>
                            <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
                        </div>
                        <div>
                            <span>违法和不良信息举报电话：0571-89853516</span>
                            举报邮箱：
                            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
                        </div>
                        <div>
                            <span>粤B2-20090191-18</span>
                            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
                            工业和信息化部备案管理系统网站
                            </a>
                        </div>
                    </div>
                </FooterLeft>

                <FooterRight>
                    {
                        footerImages.map((item) => {
                            return (
                                <li  className="item" key={item.link}>
                                    <a href={item.link} className="link" rel="noopener noreferrer" target="_blank"> </a>
                                    <span className="title"></span>
                                </li>
                            )
                        })
                    }
                    <div className="test"></div>
                </FooterRight>
               
            </div>
        </FooterWrapper>
    )
})
