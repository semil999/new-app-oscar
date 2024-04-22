import React, { Component, PureComponent } from 'react'
import higerOrderComponent from './HOC'

export class PureClassComponent extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <>
        <h1 className='text-center'>PureClassComponent</h1>
      </>
    )
  }
}

export default higerOrderComponent(PureClassComponent, 'Krish')
