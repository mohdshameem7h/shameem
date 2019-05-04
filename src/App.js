import React, {} from 'react';
import NavigationBar from './navigation_bar'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onChange = (e) => {
    this.setState({name : e.target.value})
  }

  render () {
    return (
      <div>
        <NavigationBar />
        <input type="text" name="name" onChange={this.onChange}/>
        <h1>This is dummy page</h1>
        {this.state}
      </div>
    );
  }
}
export default App;