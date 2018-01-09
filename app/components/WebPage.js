/**
 * Created by Vladislav on 22.12.2017.
 */
import React from 'react';
import CarsList from '../containers/CarsList';
import Details from '../containers/details';

const WebPage = () => (
    <div>
        <h2>Cars:</h2>
        <hr/>
        <CarsList/>
        <h3>Details:</h3>
        <Details />
    </div>
);



export default WebPage;