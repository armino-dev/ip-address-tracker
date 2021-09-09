import React from 'react'
import dynamic from 'next/dynamic';

const Map = dynamic(
    () => import('./map'),
    {
        ssr: false,
        loading: function loading() {
            return (<p>Loading map...</p>)
        }
    }
)

export default class Body extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }

    render() {
        const { position } = this.props.position ? this.props : {position: [45.398066, 26.885366]}

        return (
            <div className="flex flex-1">
                <Map 
                    position={position}
                />
            </div>
        )
    }
}
