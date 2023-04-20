import axios from "axios";
import { selector, selectorFamily, atom } from "recoil";

export const randomQuoteValue = atom({
  key: "randomQuoteValue",
  default: '',
});

export const fetchRandomQuote = selectorFamily({
  key: "fetchRandomQuote",
  get: (userID) => async () => {
    const res = await axios.get("https://api.quotable.io/quotes/random");
    const data = await res.data;
    return data;
  },
});

export const getRandomeQuote = selector({
  key: "getRandomeQuote",
  get: ({ get }) => {
    const res = get(fetchRandomQuote(get(randomQuoteValue)));
    return res;
  },
});
