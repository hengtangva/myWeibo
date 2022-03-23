
import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames'

import './index.scss'
export default class NavBar extends React.Component {
  state = {
    current:0
  };
  tabs = [{name:'逛微博',url:'/weibo'}, {name:'看博主',url:'/user'},{name:'热点评论',url:'/comment'}]
  handleClick = (index:number) => {
    console.log(index)
    this.setState({ current: index });
  };
  render() {
    const {current} = this.state;
    console.log(current)
    return (
      <div className='navBarHeader'>
        <div className='selectHeader'>
          {
            this.tabs.map((item, index) => {
              return (
                <NavLink to={item.url} 
                         className={classnames({'active': index === current}, 'item')}
                         key={item.url}
                         onClick = {() => this.handleClick(index)}
                >
                  {item.name}
                </NavLink>
              )
            })
          }
        </div>
    </div>)
  }
}