/**
 * Created by Vladislav on 22.12.2017.
 */
export default function (state=null, action) {
    switch (action.type) {
        case "CAR_SELECTED":
            return action.payload;
            break;
        default:
            return state;
    }
}