import { SET_OPEN_MENU_DRAWER, SET_MENU_TITLE } from '../actions/menu'

const defaultState = {
	drawerOpen: false,
	title: 'ISŠTE',
}

export default function menu(state = defaultState, action) {
  switch (action.type) {
    case SET_OPEN_MENU_DRAWER:
      return Object.assign({}, state, { drawerOpen: action.payload })
		case SET_MENU_TITLE:
			const title = action.payload || defaultState.title
			document.title = title
      return Object.assign({}, state, { title: title })
    default:
      return state
  }
}
