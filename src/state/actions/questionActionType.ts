import { DropResult } from 'react-beautiful-dnd';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DRAG_QUESTION = 'DRAG_QUESTION';
export const CLICK_REQUIRED = 'CLICK_REQUIRED';
export const SELECT_OPTION = 'SELECT_OPTION';
export const ADD_OPTION = 'ADD_OPTION';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const DRAG_OPTION = 'DRAG_OPTION';
export const DELETE_OPTION = 'DELETE_OPTION';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export interface AddQuestion {
  type: typeof ADD_QUESTION;
}

export interface DeleteQuestion {
  type: typeof DELETE_QUESTION;
  payload: string;
}

export interface DragQuestion {
  type: typeof DRAG_QUESTION;
  payload: DropResult;
}

export interface TypeOption {
  index: number;
  type: string;
}

export interface SelectOption {
  type: typeof SELECT_OPTION;
  payload: TypeOption;
}

export interface Required {
  index: number;
  isRequired: boolean;
}

export interface ClickRequired {
  type: typeof CLICK_REQUIRED;
  payload: Required;
}

export interface Option {
  index: number;
  addOption: { id: string; value: string };
}

export interface AddOption {
  type: typeof ADD_OPTION;
  payload: Option;
}

export interface ChangeOptionValue {
  arrayIndex: number;
  optionIndex: number;
  event: React.ChangeEvent<HTMLInputElement>;
}

export interface ChangeValue {
  type: typeof CHANGE_VALUE;
  payload: ChangeOptionValue;
}

export interface DragOptionValue {
  arrayIndex: number;
  result: DropResult;
}

export interface DragOption {
  type: typeof DRAG_OPTION;
  payload: DragOptionValue;
}

export interface DeleteOptionValue {
  arrayIndex: number;
  optionId: string;
}

export interface DeleteOption {
  type: typeof DELETE_OPTION;
  payload: DeleteOptionValue;
}

export interface ChangeTitleValue {
  arrayIndex: number;
  event: React.ChangeEvent<HTMLInputElement>;
}

export interface ChangeTitle {
  type: typeof CHANGE_TITLE;
  payload: ChangeTitleValue;
}

export type questionActionDispatch =
  | AddQuestion
  | DeleteQuestion
  | DragQuestion
  | SelectOption
  | ClickRequired
  | AddOption
  | ChangeValue
  | DragOption
  | DeleteOption
  | ChangeTitle;
