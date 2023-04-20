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

export interface IAuthors {
  authors: IAuthorDetails[];
}

export interface IAuthorDetails {
  bio: string;
  dateAdded: string;
  dateModified: string;
  description: string;
  link: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
}

export interface IAuthorQuery {
  query: {
    slug: string | undefined;
  };
}

export interface IRoutePages {
  path: string;
  name: string;
}

