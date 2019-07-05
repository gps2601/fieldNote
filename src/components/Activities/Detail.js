/** @jsx jsx */
import {css, jsx} from '@emotion/core'

const Detail = ({showActivities, currentActivity}) => {
    return (
        <div className="Detail" css={css`
               grid-area: main;
               display: ${showActivities ? 'none' : 'block'};
               `}>
            <h1 css={css`
                    padding-top: 40px;
                    padding-bottom: 40px;
                `}>{currentActivity.title}</h1>
            <p>{currentActivity.description}</p>
        </div>
    )
}

export default Detail