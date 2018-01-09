/**
 * Created by Vladislav on 22.12.2017.
 */
export const select = (car) => {
    alert( "Now car is " +  car.name);
    return {
        type: "CAR_SELECTED",
        payload: car
    }
}