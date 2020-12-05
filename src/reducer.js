

export const initalState = {
    user:null,
    vehicle: [],
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
            const index = state.vehicle.findIndex((car)=> car.id === action.id);
            // cleanedList= [state.vehicle.filter((car)=>car.id !== action.id)];

            if (index >= 0){
                cleanedList.splice(index, 1);
            } else {
                console.warn(
                    `cannot remove vehicle with id of ${action.id}`
                )
            }
            return {...state, vehicle: cleanedList}
        
        default:
            return state;
    }
}

export default reducer;