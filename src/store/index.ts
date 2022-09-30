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

export default {
    tiles,
    tileIds,
    selectedId
}
