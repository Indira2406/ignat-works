import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return (
                action.payload ==='up' ? state.sort((a,b)=> a.name.localeCompare(b.name)) : state.sort((a,b)=> b.name.localeCompare(a.name))
            )
                    }
        case 'check': {
            state.sort((a,b)=> a.name.localeCompare(b.name))
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
