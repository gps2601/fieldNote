/** @jsx jsx */
import {css, jsx} from '@emotion/core'

const SidebarDesktop = ({showActivities, activities, setCurrentActivity}) => {
    return (
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
                    `} onClick={() => {
                    setCurrentActivity(activity)
                }}>{activity.title}</li>
            })}
        </ul>
    )
}

export default SidebarDesktop