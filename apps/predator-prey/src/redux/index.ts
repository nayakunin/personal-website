import { RootState } from './store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export { addPredator, changeSpeed, init, step } from './reducers/map';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;