import type { AddPersonsType, ClearPersonsType} from '../../types/personActionType';
import { CLEAR_PERSONS, ADD_PERSONS } from '../../types/personActionType';
import type { PersonType } from '../../types/personTypes';

export const addPersonsAction = (payload: PersonType[]): AddPersonsType => ({
  type: ADD_PERSONS,
  payload
});

export const clearPersonsAction = (): ClearPersonsType => ({
    type: CLEAR_PERSONS
})
