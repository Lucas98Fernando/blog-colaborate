import { IDialogOptions } from "../types/dto";

export interface IDialog extends Event {
  data?: IDialogOptions;
}
