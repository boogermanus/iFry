import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {IfryService} from "../services/ifry.service";
import {inject} from "@angular/core";

type IFryType = {
  temp: number;
  time: number;
}

export const IFryInitialState: IFryType = {
  temp: 0,
  time: 0
}

export const IFryStore = signalStore(
  withState<IFryType>(IFryInitialState),
  withMethods((store, service = inject(IfryService)) => ({
    update(temp: number, time: number): void {
      let result = service.calculate(temp, time);

      if(result.Temp > 0 && result.Time > 0) {
        patchState(store, {temp: result.Temp, time: result.Time});
      }
    }
  }))
);

