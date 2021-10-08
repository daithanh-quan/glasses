import React, { Component } from 'react'
import Avatar from '../components/Avatar/Avatar'
import ListGlasses from '../components/ListGlasses/ListGlasses'
import Header from '../layouts/Header'

export default class Home extends Component {
  //state ban đầu cho avatar
  state = {
    glasses: {}
  }
  //thay đổi kính khi click
  changeGlasses = (item) => {
    this.setState({
      glasses: item
    })
  }
  render() {
    return (
      <div>
        <img src="./glassesImage/background.jpg" alt="" className="w-100 " />
        <div className="glasses">
          <Header />
          <Avatar item={this.state} />
          <ListGlasses handleChange={this.changeGlasses} />
        </div>
      </div>
    )
  }
}
