
import { testCores } from "@/service/getData";

import React, { PureComponent } from 'react'

import { Button } from 'antd';


export default class weiboTest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }
  componentDidMount() {
    testCores().then((res) => {
      console.log(res.result)
      this.setState({
        info:[...res.result]
      })
    })
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <div>
         hello {info[0]}, 今年你已经 {info[1]} 岁啦
        </div>
        <Button>hello world</Button>
      </div>
    )
  }
}
