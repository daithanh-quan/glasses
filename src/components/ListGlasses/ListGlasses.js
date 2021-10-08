import React, { Component } from 'react';
import data from '../../data/data'
class ListGlasses extends Component {
  //render ra các loại kính 
  getGlasses() {
    return (
      data.map((item) => {
        return (
          <div className="col-lg-2 col-sm-3 p-3"
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.props.handleChange(item)
            }}
          >
            <img src={item.url} alt="" style={{ width: '150px' }} />
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div className="container bg-white rounded">
        <div className="row text-center">
          {this.getGlasses()}
        </div>
      </div>
    );
  }
}

export default ListGlasses;