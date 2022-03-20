import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import React from 'react';

export default class NavBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          逛微博
        </Menu.Item>
        <Menu.Item key="app">
          分析热点评论
        </Menu.Item>
        <Menu.Item key="app2">
          分析博主
        </Menu.Item>
      </Menu>
    );
  }
}