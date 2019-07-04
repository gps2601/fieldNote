/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import { useState } from 'react'


const Activities = ({activities}) => {
    const [showActivities, setShowActivities] = useState(false)

    return (
        <div className="Activities" css={css`
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-areas: "sidebar-desktop main";
        width: 100vw;
        height: 100vh;
        @media (max-width: 800px) {
            grid-template-columns: 80px 100%;
            grid-template-areas: "sidebar-mobile 
            ${showActivities ? 'sidebar-desktop' : 'main' }";
        }
        `}>
            <ul className="List" css={css`
               grid-area: sidebar-desktop;
               border-right: 1px solid black;
               height: 100%;
               text-align: left;
               list-style-type: none;
               @media (max-width: 800px) {
                    display: ${showActivities ? 'block' : 'none'};
               }
                `}>
                {activities.map((activity, index) => {
                    return <li key={index} css={css`
                    padding: 20px;
                    border-bottom: 1px solid black;
                    &:hover {
                        background-color: lightgray;
                        cursor: pointer;
                     }
                    `}>{activity.title}</li>
                })}
            </ul>
            <ul css={css`
               grid-area: sidebar-mobile;
               border-right: 1px solid black;
               height: 100%;
               text-align: left;
               list-style-type: none;
               @media (min-width: 800px) {
                display: none;
               }
                `}>
                <div css={css`
                    display: block;
                    padding-top: 20px;
                    padding-left: 20px;
                    `} onClick={() => setShowActivities(!showActivities)}>
                    <span css={css`
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 4px;
                        position: relative;
                        background: #cdcdcd;
                        border-radius: 3px;
                        z-index: 1;
                    `}/>
                    <span/>
                    <span css={css`
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 4px;
                        position: relative;
                        background: #cdcdcd;
                        border-radius: 3px;
                        z-index: 1;
                    `}/>
                    <span/>
                    <span css={css`
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 4px;
                        position: relative;
                        background: #cdcdcd;
                        border-radius: 3px;
                        z-index: 1;
                    `}/>
                    <span/>
                </div>
            </ul>
            <div className="Detail" css={css`
               grid-area: main;
               display: ${showActivities ? 'none' : 'block'};
               `}>
            </div>
        </div>
    )
}

export default Activities