import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const innerStyle = {
//     fontSize: 100,
//     color: '#FF0000'
// };
class Hello extends React.Component {
    constructor() {
        super();
        this.activeClick = this.activeClick.bind(this);
        this.state = {
            login: false
        };
    }
    activeClick() {
        this.setState({
            login: !this.state.login
        })
    }
    render() {
        if (this.state.login){
            return (
                <h1 onClick={this.activeClick}>{this.props.name},已登录</h1>
            )
        }else {
            return (
                <h1 onClick={this.activeClick}>{this.props.name},未登陆</h1>
            )
        }
    }
}

class Welcome extends React.Component {
    render() {
        return (
            <p>{this.props.title}</p>
        )
    }
}

class Wait extends React.Component {
    render() {
        return (
            <div>{this.props.text}</div>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.list.map((num) =>
                <li key={num.toString()}>{num}</li>
            )
        }
    }
    render() {
        return (
            <ul>{this.state.items}</ul>
        )
    }
}

class All extends Component {
    constructor() {
        super();
        this.state = {
            name: 'hello你好',
            title: 'welcome欢迎',
            text: 'wait等待'
        };
    }
    render() {
        return (
            <div>
                <Hello name={this.state.name} />
                <Welcome title={this.state.title} />
                <Wait text={this.state.text} />
                <List list={[1,2,3,4,5]} />
            </div>
        )
    }
}
// const arr = [
//     <h1>数组元素1</h1>,
//     <h2>数组元素2</h2>,
//     <h3>数组元素3</h3>
// ];
// const element = <div className='add_ele' data-id='abc'>{arr}</div>;
ReactDOM.render(
    <All />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
