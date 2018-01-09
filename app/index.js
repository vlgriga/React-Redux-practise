/**
 * Created by Vladislav on 21.12.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Redux, {createStore} from 'redux';
import allReducers from './reducers'
import WebPage from './components/WebPage';


const store = createStore(allReducers);


class Component extends React.Component {
    render() {
        return(
            <h1>Yes, Vlad is the best React developer!</h1>
        );
    }
}

class Login extends React.Component {
    render() {
        const login = this.state.login;
        return (true);
    }
}

class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuests : 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name] : value });
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}


// ReactDOM.render(
//     <List />, document.getElementById('root')
// );


ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider> , document.getElementById('root')
);