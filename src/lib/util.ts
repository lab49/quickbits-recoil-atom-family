import { currencyPairs } from "./const"

export const randIndex = (n: number) => Math.floor(Math.random() * n)

export const randomCurrencyPair = () => currencyPairs[randIndex(currencyPairs.length)]

export const randomCurrencyPairs = (n: number) => Array.from({ length: n }).map(() => randomCurrencyPair())
