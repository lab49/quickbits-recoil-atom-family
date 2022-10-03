import { useRecoilCallback } from "recoil";
import store from "store";
import { currencyPairs } from "lib/const";
import { useEffect } from "react";
import { faker } from '@faker-js/faker'

export default function useFaker(tickRate: number) {
    const setRandomValue = useRecoilCallback(({ set, snapshot }) => async () => {
        const updateHighlights = await snapshot.getPromise(store.updateHighlights)
        const selectedId = await snapshot.getPromise(store.selectedId)
        if (updateHighlights) {
            if (selectedId) {
                set(store.tiles(selectedId), faker.finance.amount())
                return
            }
        }

        for (const pair of currencyPairs) {
            if (selectedId === pair) continue

            if (Math.random() > 0.5) {
                set(store.tiles(pair), faker.finance.amount())
            }
        }
    }, [])

    useEffect(() => {
        const interval = window.setInterval(setRandomValue, 1000 / tickRate)

        return () => {
            window.clearInterval(interval)
        }
    }, [setRandomValue, tickRate])
}
