import useTiles from "hooks/useTiles";
import { useState, useCallback, ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useFaker from "hooks/useFaker";
import store from "store";

const Controls = () => {
    const [tileCount, setTileCount] = useState(0)
    const [tickRate, setTickRate] = useState(50)
    const setUpdateHighlights = useSetRecoilState(store.updateHighlights)
    const selectedId = useRecoilValue(store.selectedId)
    useTiles(tileCount)
    useFaker(tickRate)

    const handleTileCountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setTileCount(parseInt(value))
    }, [setTileCount])

    const handleTickRateChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setTickRate(parseInt(value))
    }, [setTickRate])

    const handleHighlightsCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUpdateHighlights(prev => !prev)
    }, [setUpdateHighlights])

    return (
        <div className="Controls">
            <div className="Control">
                <div>Update {selectedId.length > 0 ? selectedId : 'Selected'}</div>
                <input
                    type='checkbox'
                    onChange={handleHighlightsCheckbox}
                />
            </div>
            <div className="Control">
                <div>Tile Count</div>
                <input
                    value={tileCount}
                    type='range'
                    onChange={handleTileCountChange}
                />
            </div>
            <div className="Control">
                <div>Tick Rate</div>
                <input
                    value={tickRate}
                    type='range'
                    onChange={handleTickRateChange}
                    min={1}

                />
            </div>
        </div>
    )
}

export default Controls
