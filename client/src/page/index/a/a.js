import React, { Component } from 'react'
import './a.css'
import { inject, observer } from 'mobx-react';

@inject('$store') @observer
class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 111
        }
    }

    click(num) {
        this.setState({
            num: this.state.num + num
        })
    }

    render() {

        return (
            <div className='A'>
                <div>{this.state.num} || {this.props.$store.num}</div>
                <button type="button" onClick={this.click.bind(this, -1)}>-</button>
                <button type="button" onClick={this.click.bind(this, 1)}> +</button>
            </div>
        );
    }
}

export default A;
