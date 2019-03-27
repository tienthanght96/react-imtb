import { UserState } from "./UserState";
import { HomeState } from "./HomeState";
export interface AppState {
  userState: UserState;
  homeState: HomeState;
}
