import React from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';
import axios from 'axios';

const sampleQuote = {
  quote: 'Gah, stupid sexy Flanders!',
  character: 'Homer simpson',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
 };


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: sampleQuote
      };
      this.getQuote = this.getQuote.bind(this); 
    }
  
    getQuote() {
      // Send the request
      axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({
            quote: data[0],
          });
      });
    }  
  
    render() {
      return (
        <div className="App">
          <QuoteCard quote={this.state.quote} />
          <button type="button" onClick={this.getQuote}>Get quote</button>
        </div>
      );
    }
  }
  



export default App;
