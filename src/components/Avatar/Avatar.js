import React, { Component } from 'react'
export default class Avatar extends Component {
  render() {
    let { glasses } = this.props.item
    return (
      <div className="container py-5 ">
        <div className="row ">
          <div className="col-6 text-center " >
            <img src="./glassesImage/model.jpg" alt="" style={{ width: "200px", position: "relative" }} />
            <img src="./glassesImage/v2.png" alt="" className="img__glasses" />
            <div className="avatar__info">
              <div className="avatar__detail">
                <p style={{ color: " #80005f" }}>GUCCI G8759H</p>
                <p style={{ color: " #80005f" }}>50$</p>
              </div>
              <p style={{ fontSize: "13px", color: "#fff" }}>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. </p>
            </div>
          </div>
          <div className="col-6 text-center">
            <img src="./glassesImage/model.jpg" alt="" style={{ width: "200px", position: "relative" }} />
            <img src={glasses.url} alt="" className="img__glasses" />
            <div className="avatar__info">
              <div className="avatar__detail">
                <p style={{ color: " #80005f" }}>{glasses.name}</p>
                <p style={{ color: " #80005f" }}>{!glasses.price ? '' : glasses.price + `$`} </p>
              </div>
              <p style={{ fontSize: "13px", color: "#fff" }}>{glasses.desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
