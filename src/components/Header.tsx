import store from "store"
import { useRecoilValue } from "recoil"
import Controls from "./Controls"

const Header = () => {
    const tileIds = useRecoilValue(store.tileIds)
    const selectedTileId = useRecoilValue(store.selectedId)

    return (
        <div>
            <h1 className="Title">Quickbits Atom Family</h1>
            <div className="Header">
                <div className='Info'>
                    <div className="Count"># of Tiles: {tileIds.length}</div>
                    <div className="Selection">Selected Pair: {selectedTileId}</div>
                </div>
                <Controls />
            </div>
        </div>
    )
}

export default Header
