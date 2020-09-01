import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import marked from 'marked'
import MenuTop from './Menu';

import { sampleText2} from './sampleText'

const Appli = styled.div`
  
 
`;

class App extends Component {
  
  // on initialise le state 
  state= {
    text: sampleText2
  }

componentDidMount () {
  const text = localStorage.getItem('text')

  if (text) {
    this.setState({text})
  } else {
    this.setState({ text: sampleText2})
  }
}
componentDidUpdate () {
  const { text } = this.state
  localStorage.setItem('text', text)
}

  // on permet à l'utilisateur de changer le texte de textarea
  handleChange = event => {
    const text = event.target.value 
    this.setState({ text }) // on raffraichi le state 
  }
  
  //on transforme le texte avec markdown 
  renderText = text => {
    const __html = marked(text, {sanitize: true})
    return {__html};
  }

  render () {
    return (
      <Appli>
        <MenuTop/>
          <div className='container'>
            <div className='row'>
            <div className='col-6'>
              <textarea onChange={this.handleChange} value={this.state.text} className='form-control' rows='35' />
            </div>
            <div className='col-6'>
              <div>
                <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>   
              </div>
            </div>
            </div>
          </div>
      </Appli>
          
    )
  }
 ;
}

export default App;
