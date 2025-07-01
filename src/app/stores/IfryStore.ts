import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {IfryService} from "../services/ifry.service";
import {inject} from "@angular/core";

type IFryType = {
  inputTemp: number;
  inputTime: number;
  outputTemp: number;
  outputTime: number;
}

export const IFryInitialState: IFryType = {
  inputTemp: 0,
  inputTime: 0,
  outputTemp: 0,
  outputTime: 0
}

export const IFryStore = signalStore(
  withState<IFryType>(IFryInitialState),
  withMethods((store, service = inject(IfryService)) => ({
    updateTemp(temp: number): void {
      if(temp >= 0) {
        patchState(store, {inputTemp: temp});
      }
      this.calculate(store.inputTemp(), store.inputTime());
    },
    updateTime(time: number): void {
      if(time >= 0) {
        patchState(store, {inputTime: time});
      }
      this.calculate(store.inputTemp(), store.inputTime());
    },
    calculate(temp: number, time: number): void {
      let result = service.calculate(temp, time);

      if(result.Temp >= 0 || result.Time >= 0) {
        patchState(store, {outputTemp: result.Temp, outputTime: result.Time});
      }
    }
  }))
);

