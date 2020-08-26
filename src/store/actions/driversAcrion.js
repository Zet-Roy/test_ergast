/* eslint-disable radix */
import {request} from '../../utils/rest';

export const types = {
  FETCH_DRIVERS: 'FETCH_DRIVERS',
  FETCH_DRIVERS_SUCCESS: 'FETCH_DRIVERS_SUCCESS',
  FETCH_DRIVERS_ERROR: 'FETCH_DRIVERS_ERROR',
  FETCH_MORE_DRIVERS: 'FETCH_MORE_DRIVERS',
  FETCH_MORE_DRIVERS_SUCCESS: 'FETCH_MORE_DRIVERS_SUCCESS',
};

export const fetchDrivers = () => async (dispatch) => {
  dispatch({type: types.FETCH_DRIVERS});

  try {
    const {data} = await request.get('f1/drivers.json?limit=20&offset=0');

    dispatch({
      type: types.FETCH_DRIVERS_SUCCESS,
      payload: {
        list: data.MRData.DriverTable.Drivers,
        total: data.MRData.total,
        offset: 20,
      },
    });
  } catch (error) {
    console.log('Error ', error);
    dispatch({type: types.FETCH_DRIVERS_ERROR, payload: 'Ошибка при запросе.'});
  }
};

export const fetchMoreDrivers = ({offset}) => async (dispatch) => {
  dispatch({type: types.FETCH_MORE_DRIVERS});

  try {
    const {data} = await request.get(
      `f1/drivers.json?limit=10&offset=${offset}`,
    );

    dispatch({
      type: types.FETCH_MORE_DRIVERS_SUCCESS,
      payload: {
        list: data.MRData.DriverTable.Drivers,
        offset: parseInt(data.MRData.offset) + 10,
      },
    });
  } catch (error) {
    console.log('Error ', error);
    dispatch({type: types.FETCH_DRIVERS_ERROR, payload: 'Ошибка при запросе.'});
  }
};
