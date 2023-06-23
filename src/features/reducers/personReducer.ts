import type { Reducer } from "@reduxjs/toolkit";
import type { PersonActionTypes } from "../../types/personActionType";
import { ADD_PERSONS, CLEAR_PERSONS } from "../../types/personActionType";
import type { PersonType } from "../../types/personTypes";


const initState: PersonType[] = []

const personReducer: Reducer<PersonType[], PersonActionTypes> = (state = initState, action): PersonType[] => {
    switch (action.type) {
        case ADD_PERSONS:
            return action.payload;
        case CLEAR_PERSONS:
            return []
        default:
            return state;
    }
}
export default personReducer