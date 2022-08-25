import { useDispatch } from 'react-redux'
import type { RootState } from '../redux/reducers'

export const useAppDispatch: () => RootState = useDispatch 