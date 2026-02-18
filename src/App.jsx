import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';


class App extends Component {
  constructor(props) {
    super(props);
    
    // TODO: Initialize state here
     this.state = {
       characters: initialData
     };
  }

  // Method to handle state changes from children
  handleUpdate = (id) => {
  const updatedCharacters = this.state.characters.map((char) => {
    if (char.id === id) {
      const isHappy = char.status === 'Happy';

      return {
        ...char,
        image: isHappy ? char.sadImage : char.happyImage,
        status: isHappy ? 'Sad' : 'Happy'
      };
    }
    return char;
  });

  this.setState({ characters: updatedCharacters });
};


  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>BKFNGKAN</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {/* TODO: Map through your state characters here and render ChildComponents */}
          
              {this.state && this.state.characters.map(char => (
                <ChildComponent 
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  image={char.image}
                  status={char.status}
                  onAction={this.handleUpdate}
                />
              ))} 
          
        </div>
      </div>
    );
  }
}

export default App;
