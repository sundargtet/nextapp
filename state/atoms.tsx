import { IQuote } from "@/typecheck/interfaces";
import { atom, RecoilState } from "recoil";

export const randomQuote: RecoilState<{}> = atom({
    key: 'randomQuote',
    default: {}
})

export const quotesList: RecoilState<[]> = atom({
    key: 'quotesList',
    default: []
})

export const bookmarkQuotes = atom<IQuote[]>({
    key: 'bookamark',
    default: []
})