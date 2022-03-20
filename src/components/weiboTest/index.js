
import { testCores, getHotNews } from "@/service/getData";

import React, { PureComponent } from 'react'

import { Button } from 'antd';


export default class weiboTest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      hotNews: []
    }
  }
  componentDidMount() {
    testCores().then((res) => {
      console.log(res.result)
      this.setState({
        info:res.result
      })
    })
    getHotNews().then((res) => {
      console.log('hot news', res.result)
      this.setState({
        hotNews: [...res.result]
      })
    })
  }
  render() {
    const { info, hotNews } = this.state
    return (
      <div>
        <div>
          {info}
        </div>
        <h2>微博热搜</h2>
        
        {
          hotNews ? 
            hotNews.map((item, index) => {
              return (
                <div>
                  <p> top: {index + 1} </p>
                  <a key={item.url} href={item.url}>{ item.title }</a>
                </div>
                
              )
            })
            :null
        }
        <Button>hello world</Button>
      </div>
    )
  }
}
