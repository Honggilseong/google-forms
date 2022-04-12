export const TYPE_TITLE = 'TYPE_TITLE';
export const FOCUS_TITLE = 'FOCUS_TITLE';
export const UNFOCUS_TITLE = 'UNFOCUS_TITLE';

export interface TypeTitle {
  event: React.ChangeEvent<HTMLInputElement>;
  name: string;
}

export interface typeTitle {
  type: typeof TYPE_TITLE;
  payload: TypeTitle;
}

export interface focusTitle {
  type: typeof FOCUS_TITLE;
}

export interface unfocusTitle {
  type: typeof UNFOCUS_TITLE;
}

export type questionTitleActionDispatch = typeTitle | focusTitle | unfocusTitle;
