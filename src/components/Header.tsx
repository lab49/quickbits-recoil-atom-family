import store from "store"
import { useRecoilValue } from "recoil"
import Controls from "./Controls"

const Header = () => {
    const tileIds = useRecoilValue(store.tileIds)
    const selectedTileId = useRecoilValue(store.selectedId)

    return (
        <div className="Header">
            <h1>Quickbits Atom Family</h1>

            <h5># of Tiles: <em>{tileIds.length}</em></h5>
            <h5>Selected Pair: <em>{selectedTileId}</em></h5>

            <Controls />
        </div>
    )
}

export default Header
