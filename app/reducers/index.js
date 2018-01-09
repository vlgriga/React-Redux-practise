/**
 * Created by Vladislav on 21.12.2017.
 */
import Redux, {combineReducers} from 'redux';
import CarsReducers from "./cars";
import CarActive from './car-active';

const AllReducers = combineReducers({
    cars : CarsReducers,
    carAcrive : CarActive
});

export  default AllReducers;