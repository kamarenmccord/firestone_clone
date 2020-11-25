

export const initalState = {
    user:null,
    vehicle: [{'id': 1, 'year':'2001', 'make':'mazda', 'model':'protege', 'submodel':'sedan'}],
}

const reducer = (state, action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "ADD_CAR":
            return {
                ...state,
                vehicle:[...state.vehicle, action.car]
            }
        case 'REMOVE_CAR':
            let cleanedList = [...state.vehicle];
            cleanedList = [state.vehicle.filter((car)=>car.id !== action.id)]
            console.log(cleanedList);
            return {...state, vehicle: cleanedList}
        default:
            return state;
    }
}

export default reducer;