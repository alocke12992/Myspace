import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component
{
  render()
  {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component
        </Header>
        <Link to='/posts'>See Posts</Link>
      </div>

    );
  }
}

export default Home;
