import { MutableRefObject } from "react";
import { IQuote } from "./interfaces";
import { icons } from "@/utils/icons";

//------------------------atoms-----------

export type TIcon = {
  type: string;
  handleClick?: () => void;
  [x: string]: any;
};
//------------------------molecules--------
export type TCard = {
  data: IQuote;
  handleBookmark: (arg1: IQuote) => void;
  handleOpen: (arg1: IQuote) => void;
};

//------------------------organisms---------
export type TBanner = {
  quote: string | undefined;
  handleDetails: () => void;
};

export type INavbar = {
  type: "login" | "loggedin";
  btnRef?:MutableRefObject<null>;
  onOpen?:()=>void;
};
//-------------------------utils--------------

//-----------------------------------------
export type IChildren = {
  children: JSX.Element;
};
