import {signalStore, withState} from "@ngrx/signals";

type IFryType = {
  temp: number;
}

export const IFryInitialState: IFryType = {
  temp: 0,
}

export const IFryStore = signalStore(
  withState<IFryType>(IFryInitialState)
)

