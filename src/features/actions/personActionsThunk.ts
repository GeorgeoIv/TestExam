import axios from "axios";
import { nanoid } from "nanoid";
import type { ApiPersonType, PersonType } from "../../types/personTypes";
import type { AppThunk } from "../../types/reduxTypes";
import { addPersonsAction } from "./personActions";


const apiPersonThunk = (): AppThunk => (dispatch) => {
    axios<ApiPersonType[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=8')
    .then(res => {
        const data = res.data.map(el => ({...el, id: nanoid()}))
        dispatch(addPersonsAction(data))
    })
    .catch(err => console.log(err))
}

export default apiPersonThunk