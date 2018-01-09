/**
 * Created by Vladislav on 22.12.2017.
 */
import React from 'react';
import {connect} from 'react-redux';

class Details extends React.Component {
    render() {
        if(!this.props.car)
            return (<p> Choose a car</p>)
        return(
            <div>
                <h2>{this.props.car.name}</h2>
                <p>Model: {this.props.car.model}</p>
                <img className="car__img" src={this.props.car.img}></img><br/>
                <p>Speed of: {this.props.car.speed}</p>
                <p></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car: state.carAcrive
    };
}

export default connect(mapStateToProps)(Details);


