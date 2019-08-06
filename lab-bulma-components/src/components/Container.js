import React, { Component } from 'react'

class Container extends Component {
    render(props) {
        return (
        <section className="container">
        {this.props.children}
        </section>
        )
    }
}

export default Container;
