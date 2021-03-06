import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import Master from '../assets/master-hog.png'
import BabyHog from '../components/BabyHog'

class MasterHog extends Component {
  state = {
    eyeColor: "blue",
    name: "Master Blaster",
    weight: '2.54 Tons',
    offspring: this.props.offspringProp
  }
  // constructor(props) {
  //   super(props)
  // }


  changeEyeColor = (event) => {
    event.preventDefault()
    this.setState({eyeColor: event.target.value})
  }


  render() {
    let arr = this.props.offspringProp.map((offspringObj) => {return <BabyHog eyeColor={this.state.eyeColor} name={offspringObj.name} weight={offspringObj.weight}></BabyHog>})
    return (
      <div>

        <form>
          <input
            type="radio"
            name="eyeColor"
            value="blue"
            onChange={this.changeEyeColor}>
          </input> Blue<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="sun"
            onChange={this.changeEyeColor}>
          </input> Sun<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="glowing"
            onChange={this.changeEyeColor}>
          </input> Glowing<br></br>
        </form>


        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 400}}></img>
        </div>
        <ul className="hoglist">
          {arr}
        </ul>

      </div>

    )
  }

}

export default MasterHog;
