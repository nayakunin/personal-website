import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "./store";

export { addPredator, changeSpeed, init, step } from "./reducers/map";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
