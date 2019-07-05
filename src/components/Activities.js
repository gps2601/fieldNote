/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import { useState } from 'react'

import Detail from './Activities/Detail'
import SidebarMobile from "./Activities/SidebarMobile"
import SidebarDesktop from "./Activities/SidebarDesktop"


const Activities = ({activities}) => {
    const [showActivities, setShowActivities] = useState(false)
    const [currentActivity, setCurrentActivity] = useState({})

    return (
        <div className="Activities" css={css`
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-areas: "sidebar-desktop main";
        width: 100vw;
        height: 100vh;
        @media (max-width: 800px) {
            grid-template-columns: 80px auto;
            grid-template-areas: "sidebar-mobile 
            ${showActivities ? 'sidebar-desktop' : 'main' }";
        }
        `}>
            <SidebarDesktop
                showActivities={showActivities}
                activities={activities}
                setCurrentActivity={setCurrentActivity}
            />
            <SidebarMobile
                showActivities={showActivities}
                setShowActivities={setShowActivities}
            />
            <Detail
                showActivities={showActivities}
                currentActivity={currentActivity}
            />
        </div>
    )
}

export default Activities