
import React, { Component } from 'react'
import { random } from 'lodash'
import 'typeface-roboto'
// eslint-disable-next-line no-unused-vars
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Generator from './components/Generator'



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

    const img0 = require('./images/animal-dawn-desktop-backgrounds-875858.jpg');
    const img1 = require('./images/architecture-background-buildings-218983.jpg');
    const img2 = require('./images/art-artistic-background-1328891.jpg');
    const img3 = require('./images/art-artistic-background-1851447.jpg');
    const img4 = require('./images/astro-astronomy-background-956999.jpg');
    const img5 = require('./images/background-balance-commerce-583846.jpg');
    const img6 = require('./images/background-blur-blurred-255379.jpg');
    const img7 = require('./images/background-blur-clean-531880.jpg');
    const img8 = require('./images/backlit-chiemsee-dawn-1363876.jpg');
    const img9 = require('./images/blur-blurred-background-bubble-824678.jpg');
    const img10 = require('./images/close-up-code-coding-160107.jpg');
    
    
    this.state = {
      quotes: [],
      randomIndex: null,
      nextImage: false,
      index: 0,
      imgList: [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
    }
    this.getNewIndex = this.getNewIndex.bind(this)
    this.randomIndex = this.randomIndex.bind(this)
    this.getNextImage= this.getNextImage.bind(this)

    
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

  getNextImage () {
    this.setState({index: Math.floor(Math.random() * Math.floor(11))})
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
      <div>
      <Grid className={this.props.classes.container} container id='quote-box' justify='center' >
        <Grid xs = {10} xl = {8} item>
        <Generator sQuote={this.sQuote} getNewIndex={this.getNewIndex} getNextImage={this.getNextImage}/>
        
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(style) (App)