import { CSSProperties, useRef } from 'react'
import { useMemo } from 'react'
import { FC } from 'react'
import useTile from 'hooks/useTile'

interface TileProps {
    id: string
}

const Tile: FC<TileProps> = ({ id }) => {
    const { value, setAsSelected, selected } = useTile(id)
    const renderCount = useRef(0)
    const ref = useRef(null)

    const style = useMemo((): CSSProperties =>
        selected ?
            {
                backgroundColor: 'lightgreen',
                animation: "pop 300ms ease-in-out"
            }
            :
            {}
        , [selected])

    renderCount.current++
    return (

        <div
            ref={ref}
            onClick={setAsSelected}
            style={style}
            className='Tile'
        >
            <h3>{id}</h3>
            <div>{value}</div>
            <div>Renders:</div>
            <div>{renderCount.current}</div>
        </div>
    )
}

export default Tile
