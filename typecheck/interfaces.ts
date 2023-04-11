export interface IQuote {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}

export interface IQuoteDetails {
  quote: IQuote;
}

export interface IQuoteId {
  quoteId: string;
}

export interface IParams {
  params: IQuoteId;
}