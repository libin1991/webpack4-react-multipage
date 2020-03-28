import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import A from './a/a'
import B from './b/b'
import axios from 'axios'

export default class App extends React.Component {
    static asyncDate() {
        return axios.get('https://www.fastmock.site/mock/d9c04174a73910e1912e52cdd2de5d90/test123/api/1')
            .then(({ data }) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    constructor(props) {
        super(props);
        this.state = {
            list: props.data || []
        }
    }
    componentDidMount() {
        const list = window.__INITIAL_STATE__.poilist;
        this.setState({
            list
        })
    }
    con(data) {
        console.log(data);
    }
    render() {
        const { list } = this.state;
        return (<div>
            <h1>你好，我是index首页</h1>
            <a href='/home.html'>home</a><br />
            <a href='/about.html'>about</a>
            <div>
                <A />
                <B />
            </div>

            {list.map((data) => {
                return <h4 key={data.id} onClick={this.con.bind(this, data)}>{data.name}</h4>
            })
            }
        </div >);
    }
}

