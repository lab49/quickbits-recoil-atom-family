import useTiles from "hooks/useTiles";
import { useState, useCallback, ChangeEvent } from "react";
import useFaker from "hooks/useFaker";

const Controls = () => {
    const [tileCount, setTileCount] = useState(0)
    const [tickRate, setTickRate] = useState(50) // ms
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

    return (
        <div className="Controls">
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
