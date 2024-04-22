import React, { Component } from 'react'

export class ClassBaseLifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
        }
        console.log("constructor")

        this.handleClick = this.handleClick.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        console.log(props, 'a')
        console.log(state, 'b')
        console.log("getDerivedStateFromProps")
        return true;
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(props, state){
        console.log(props, 'c')
        console.log(state, 'd')
        console.log("getSnapshotBeforeUpdate")
        return true
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    handleClick(){
        this.setState({count: this.state.count + 1})
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

  render() {
    console.log("render");
    return (
      <div className='text-center'>
        <h1>{this.state.count}</h1>
        <button className='btn btn-success' onClick={this.handleClick}>Save</button>
      </div>
    )
  }
}

export default ClassBaseLifeCycle
