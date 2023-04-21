import { MutableRefObject } from "react";
import { IQuote, IAuthorDetails } from "./interfaces";

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

export type TAuthorCard = {
  author: IAuthorDetails;
  handleAuthor: (arg1: string) => void;
};

export type TLoginForm = {
  handleSubmit: () => void;
  handleReset?:()=>void;
};

//------------------------organisms---------
export type TBanner = {
  quote: string | undefined;
  handleDetails: () => void;
};

export type INavbar = {
  type: "login" | "loggedin";
  btnRef?: MutableRefObject<null>;
  onOpen?: () => void;
};

export type TFramer = {
  style?: object;
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
};
//-------------------------utils--------------

//-----------------------------------------
export type IChildren = {
  children: JSX.Element;
};
