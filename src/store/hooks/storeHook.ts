import {AppDispatch, AppRootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppRootState>();
