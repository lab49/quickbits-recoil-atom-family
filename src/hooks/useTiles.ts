import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import store from "store";
import { randomCurrencyPairs } from "lib/util";

export default function useTiles(n: number) {
    const [tileIds, setTileIds] = useRecoilState(store.tileIds)

    useEffect(() => {
        if (n === tileIds.length) return

        if (n > tileIds.length) {
            const increase = n - tileIds.length
            const newCurrencyPairs = randomCurrencyPairs(increase)
            setTileIds(prev => [...prev, ...newCurrencyPairs])
        }

        if (n < tileIds.length) {
            const decrease = tileIds.length - n
            setTileIds(prev => prev.slice(0, tileIds.length - decrease))
        }
    }, [n, setTileIds, tileIds])
}
