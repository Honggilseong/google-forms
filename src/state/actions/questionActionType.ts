import { DropResult } from 'react-beautiful-dnd';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DRAG_QUESTION = 'DRAG_QUESTION';
export const CLICK_REQUIRED = 'CLICK_REQUIRED';
export const SELECT_OPTION = 'SELECT_OPTION';
export const ADD_OPTION = 'ADD_OPTION';

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

export type questionActionDispatch =
  | AddQuestion
  | DeleteQuestion
  | DragQuestion
  | SelectOption
  | ClickRequired
  | AddOption;
