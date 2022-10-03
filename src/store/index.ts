import { atom, atomFamily } from "recoil";

const tiles = atomFamily<string, string>({
    key: 'Tiles',
    default: '0'
})

const tileIds = atom<string[]>({
    key: 'TileIds',
    default: []
})

const selectedId = atom<string>({
    key: 'SelectedId',
    default: ''
})

const updateHighlights = atom<boolean>({
    key: 'UpdateHighlights',
    default: false
})

export default {
    tiles,
    tileIds,
    selectedId,
    updateHighlights
}
