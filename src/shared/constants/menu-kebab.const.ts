import { ActionKebab } from "../enums/action-kebab.enum";
import { ItemKebabMenu } from "../interfaces/menu-kebab.interface";

export const PHRASE_KEBAB_MENU: ItemKebabMenu[] = [
  {
    id: ActionKebab.PREVIEW,
    name: "COMMON.PREVIEW",
  },
  {
    id: ActionKebab.REMOVE,
    name: "COMMON.REMOVE",
  },
];
