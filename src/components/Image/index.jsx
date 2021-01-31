import React from 'react'

import appLogo from '../../assets/app-icon.svg'
import appName from '../../assets/app-name.svg'
import landingImage from '../../assets/landing-image.svg'

export default function Image({ img }) {
    const images = {
        'logo': appLogo,
        'name': appName,
        'landing-image': landingImage
    }

    return (
        <div>
            <img src={images[img]} alt="" />
        </div>
    )
}