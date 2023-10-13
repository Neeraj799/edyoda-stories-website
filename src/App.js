import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import LatestPost from './LatestPost';
import BlogSection from './BlogSection';

export class App extends Component {

  render() {
    return (
      <>
      <Header />

      <LatestPost />
     
      <BlogSection />

      </>
    )
  }

}

export default App;
