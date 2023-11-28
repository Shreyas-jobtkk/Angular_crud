// home.state.ts
import { State, Selector, Action, StateContext } from '@ngxs/store';

export interface SomeData {
  id: string;
  name: string;
  progress: string;
  color: string;
  newProperty?: string;
}

export interface SomeValue {
  id: number;
  name: string;
  progress: string;
  color: string;
  newProperty?: string;
}

export interface HomeStateModel {
  data: SomeData[];
  values: SomeValue[]; // Add a new property for SomeValue
}

export class AddData {
  static readonly type = '[Home] Add Data';
  constructor(public payload: SomeData[]) {}
}

export class AddValue {
  static readonly type = '[Home] Add Value';
  constructor(public payload: SomeValue[]) {}
}

@State<HomeStateModel>({
  name: 'home',
  defaults: {
    data: [],
    values: [] // Initialize the new property
  }
})
export class HomeState {
  @Selector()
  static getHomeData(state: HomeStateModel): SomeData[] {
    return state.data;
  }

  @Selector()
  static getHomeValues(state: HomeStateModel): SomeValue[] {
    return state.values;
  }

  @Action(AddData)
  addData(ctx: StateContext<HomeStateModel>, action: AddData): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      data: [...state.data, ...action.payload]
    });

    // console.log('After Add Data2:', ctx.getState());
  }

  @Action(AddValue)
  addValue(ctx: StateContext<HomeStateModel>, action: AddValue): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      values: [...state.values, ...action.payload]
    });

    // console.log('After Add Value:', ctx.getState());
  }
}