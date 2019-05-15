/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { random } from 'lodash'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Generator from './components/Generator'
import * as types from '@babel/types'


const style = {
  container: {
    display: 'flex',
    height:'100vh',
    alignItems: 'center',
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quotes: [],
      randomIndex: null,
    }
    this.getNewIndex = this.getNewIndex.bind(this)
    this.randomIndex = this.randomIndex.bind(this)
  }

  componentDidMount () {
    const fetch = require('isomorphic-fetch')
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.getNewIndex))
  }

  get sQuote () {
    if (!this.state.quotes.length || !Number.isInteger(this.state.randomIndex)) {
      return undefined
    }
    return this.state.quotes[this.state.randomIndex]
  }

  randomIndex () {
    if (!this.state.quotes.length) {
      return undefined
    }
    return random(0, this.state.quotes.length - 1)
  }

  getNewIndex () {
    this.setState({ randomIndex: this.randomIndex() })
  }

  render () {
    if (!this.sQuote) {
      return "Loading..."; // or probably something nicer looking
    }

    return (
      
      <Grid className={this.props.classes.container} container id='quote-box' justify='center' >
        <Grid xs = {10} xl = {8} item>
        <Generator sQuote={this.sQuote} getNewIndex={this.getNewIndex}/>
          
        
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(style) (App)