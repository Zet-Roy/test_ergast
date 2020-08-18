import { request } from '../../utils/rest';

export const types = {
    FETCH_RACE: 'FETCH_RACE',
    FETCH_RACE_SUCCESS: 'FETCH_RACE_SUCCESS',
    FETCH_RACE_ERROR: 'FETCH_RACE_ERROR',
    FETCH_MORE_RACE: 'FETCH_MORE_RACE',
    FETCH_MORE_RACE_SUCCESS: 'FETCH_MORE_RACE_SUCCESS',
    CLEAR_RACE: 'CLEAR_RACE',
}

export const fetchRaces = ({ driverId }) => async dispatch => {
    dispatch({ type: types.FETCH_RACE })

    try {
        const { data } = await request.get(`f1/drivers/${driverId}/results.json?limit=20&offset=0`);

        dispatch({
            type: types.FETCH_RACE_SUCCESS, payload: {
                list: data.MRData.RaceTable.Races,
                total: data.MRData.total,
                offset: 20
            }
        })
    } catch (error) {
        console.log("Error ", error)
        dispatch({ type: types.FETCH_RACE_ERROR, payload: "Ошибка при запросе." })
    }
}

export const fetchMoreRaces = ({ driverId, offset }) => async dispatch => {
    try {
        const { data } = await request.get(`f1/drivers/${driverId}/results.json?limit=10&offset=${offset}`)

        dispatch({
            type: types.FETCH_MORE_RACE_SUCCESS, payload: {
                list: data.MRData.RaceTable.Races,
                offset: parseInt(data.MRData.offset) + 10
            }
        })
    } catch (error) {
        console.log("Error ", error)
        dispatch({ type: types.FETCH_RACE_ERROR, payload: "Ошибка при запросе." })
    }
}

export const clearRaces = () => async dispatch => {
    dispatch({ type: types.CLEAR_RACE })
}