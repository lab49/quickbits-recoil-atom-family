import store from "store";
import { useRecoilState } from "recoil";
import { useCallback, useMemo } from "react";

export default function useTile(id: string) {
    const [tileValue, setTileValue] = useRecoilState(store.tiles(id))
    const [selectedId, setSelectedId] = useRecoilState(store.selectedId)

    const increment = useCallback(() => setTileValue(prev => prev + 1), [setTileValue])

    const setAsSelected = useCallback(() => setSelectedId(id), [id, setSelectedId])

    return useMemo(() => ({
        value: tileValue,
        setAsSelected,
        selected: id === selectedId
    }), [increment, tileValue, id, selectedId])
}
