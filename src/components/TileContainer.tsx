import store from 'store'
import { useRecoilValue } from 'recoil'
import Tile from './Tile'
import { createRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TileContainer = () => {
    const tileIds = useRecoilValue(store.tileIds)
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
