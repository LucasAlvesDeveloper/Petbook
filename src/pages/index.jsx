// Import libs
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// Import Components
import Image from '../components/Image'
import Text from '../components/Text'
import ButtonArea from '../components/ButtonArea'

// TO-DO: Styled-Components

export default function LandingPage() {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Recife, PE
            </div>
            <div>
                <Image img="logo" />
                <Image img="name" />
            </div>
            <div>
                <Text />
            </div>
            <div>
                <ButtonArea />
            </div>
        </>
    )
}