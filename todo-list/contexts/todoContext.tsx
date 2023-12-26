import createDataContext from './index'

const initialState = {
  date: (new Date()).getTime(),
}

export const { Context, Provider } = createDataContext(initialState)