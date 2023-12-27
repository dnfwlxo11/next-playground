import createDataContext from './index'

const initialState = {
  date: null,
}

export const { Context, Provider } = createDataContext(initialState)