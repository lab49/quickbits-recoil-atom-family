import store from "store"
import { useRecoilValue } from "recoil"

const Footer = () => {
    const tileIds = useRecoilValue(store.tileIds)
    const selectedTileId = useRecoilValue(store.selectedId)

    return (
        <footer className="Footer">
            <h1># of Tiles: <em>{tileIds.length}</em></h1>
            <h1>Selected Currency Pair: <em>{selectedTileId}</em></h1>
        </footer>
    )
}

export default Footer
