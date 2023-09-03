import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { interpolate } from 'flubber'

const NavSvg = ({hover, setHover}) => {
    const moonIcon = "M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
    const sunIcon = "M12 12.94L8.53044 9.46891L7.46954 10.5293L12 15.0618L16.5304 10.5293L15.4695 9.46891L12 12.94Z"


    const { t, x } = useSpring({
        t: hover ? 0 : 1,
        x : hover ? '#D1D7E0' : "#802BB1",
        config: {
            tension: 270
        },
    })

    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1
    })

    const customInterpolator = interpolate(moonIcon, sunIcon)

    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <animated.path
                style={{
                    fill: x.to(x => `${x}`),
                    ...fadeIn
                }}
                d={
                    t.to(customInterpolator)
                }
            />
        </svg>

    )
}

export default NavSvg

