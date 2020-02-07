import { createAction, props } from "@ngrx/store";
import { Member } from "../../models";

export const loadMembers = createAction("[Member] Load Members");

export const loadMembersSuccess = createAction(
  "[Member] Load Members Success",
  props<{ data: Member[] }>()
);

export const loadMembersFailure = createAction(
  "[Member] Load Members Failure",
  props<{ error: any }>()
);

export const logIn = createAction(
  "[Member] Check if User is in the Database",
  props<{ email: string, password: string }>()
);


