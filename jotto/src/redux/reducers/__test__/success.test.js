import { CORRECT_GUESS } from '../../actions'
import  success  from '../success'

test('return default initial state of `false` when no action', () => {
    //Don't forget that it begins with no action.
    const newState = success(undefined, {})
    expect(newState).toBe(false)
});

test('returns state of true upon receiving action `CORRECT_GUESS`', () => {
    const newState = success(undefined, { type: CORRECT_GUESS })
    expect(newState).toBe(true)
});