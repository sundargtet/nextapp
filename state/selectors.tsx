import axios from "axios";
import { selector } from "recoil";
import { bookmarkQuotes, fetchQuoute } from './atoms'

export const bookmarkQuotesCount = selector({
    key: 'bookmarkQuotesCount',
    get: ({ get }) => {
        const quotes = get(bookmarkQuotes)
        return quotes.length
    }
})