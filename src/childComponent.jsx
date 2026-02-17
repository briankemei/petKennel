import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);

    // bind the click handler
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // call the parent method passed via props
    this.props.onAction(this.props.id);
  }

  render() {
    const { name, image, status } = this.props;

    return (
      <div className="child-card" style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
        {/* 1. Header */}
        <h2>{name}</h2>

        {/* 2. Image */}
        <img
          src={image}
          alt={name}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        {/* 3. Content */}
        <p>Status: {status}</p>

        {/* 4. Button that fires parent event */}
        <button onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ChildComponent;

