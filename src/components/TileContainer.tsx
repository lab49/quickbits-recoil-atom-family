import store from 'store'
import { useRecoilValue } from 'recoil'
import Tile from './Tile'
import { createRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import EmptyState from './EmptyState'

const TileContainer = () => {
    const tileIds = useRecoilValue(store.tileIds)

    if (tileIds.length === 0) return <EmptyState />

    return (
        <TransitionGroup className='TileContainer'>
            {tileIds.map((id, index) => {
                const ref = createRef<HTMLDivElement>()
                return <CSSTransition
                    key={index}
                    nodeRef={ref}
                    timeout={500}
                    classNames='tile'
                >
                    <div ref={ref}>
                        <Tile id={id} />
                    </div>
                </CSSTransition>
            })}
        </TransitionGroup>
    )
}

export default TileContainer
