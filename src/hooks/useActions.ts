import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreators from '../redux/actions/userActions'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(UserActionCreators, dispatch)
}
