import { DropResult } from 'react-beautiful-dnd';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DRAG_QUESTION = 'DRAG_QUESTION';

export type Question = {
  id: string;
};

// interface DragObject {
//   droppableId: string;
//   index: number;
// }

// export interface DragResult {
//   combine: null;
//   destination: DragObject;
//   draggableId: string;
//   mode: string;
//   reason: string;
//   source: DragObject;
//   type: string;
// }

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

export type questionActionDispatch =
  | AddQuestion
  | DeleteQuestion
  | DragQuestion;
