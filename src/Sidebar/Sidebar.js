import React, { Component } from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return <ul className="sidebar">{this.props.children}</ul>;
  }
}
