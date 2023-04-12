import { IQuote } from "./interfaces";
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
  quote: string;
  handleDetails: () => void;
};

export type INavbar = {
  type: "login" | "loggedin";
};
//-------------------------utils--------------

//-----------------------------------------
export type IChildren = {
  children: JSX.Element;
};
