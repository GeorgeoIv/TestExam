import type { PersonType } from './personTypes';

export const ADD_PERSONS = 'ADD_PERSONS';
export type AddPersonsType = {
  type: typeof ADD_PERSONS;
  payload: PersonType[];
};

export const CLEAR_PERSONS = 'CLEAR_PERSONS';
export type ClearPersonsType = {
  type: typeof CLEAR_PERSONS;
};

export type PersonActionTypes = AddPersonsType | ClearPersonsType