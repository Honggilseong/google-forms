export const TYPE_TITLE = 'TYPE_TITLE';

export interface TypeTitle {
  event: React.ChangeEvent<HTMLInputElement>;
  name: string;
}

export interface typeTitle {
  type: typeof TYPE_TITLE;
  payload: TypeTitle;
}

export type questionTitleActionDispatch = typeTitle;
