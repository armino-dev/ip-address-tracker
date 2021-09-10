import React from 'react'

export default class Info extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }

    render() {
        const {ip, location, timezone, isp} = this.props
        return (
            <div 
                className="absolute h-[338px] top-[146px] p-5 lg:p-0 lg:h-[160px] lg:top-[200px] w-full flex flex-row items-center justify-center z-40"
            >
                <div 
                    className="flex flex-col w-full h-full p-5 lg:p-2 lg:pt-[34px] lg:w-full lg:mx-[165px] lg:flex-row bg-gradient-to-b from-gray-200 to-white rounded-2xl lg:rounded-[15px] items-center lg:items-start justify-between lg:justify-start"
                >
                    <div className="flex flex-col h-full items-center lg:items-start lg:border-r lg:px-5 lg:w-1/4">
                        <h2 className="text-gray-500 font-bold tracking-wider text-[10px] mb-1 lg:text-[14px]">IP ADDRESS</h2>
                        <p className="font-bold tracking-wide lg:text-[22px]">{ip}</p>
                    </div>
                    <div className="flex flex-col h-full items-center lg:items-start lg:border-r lg:px-5 lg:w-1/4">
                        <h2 className="text-gray-500 font-bold tracking-wider text-[10px] lg:text-[14px] mb-1">LOCATION</h2>
                        <p className="font-bold tracking-wide lg:text-[22px]">{location}</p>
                    </div>
                    <div className="flex flex-col h-full items-center lg:items-start lg:border-r lg:px-5 lg:w-1/4">
                        <h2 className="text-gray-500 font-bold tracking-wider text-[10px] lg:text-[14px] mb-1">TIMEZONE</h2>
                        <p className="font-bold tracking-wide lg:text-[22px]">{timezone}</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start lg:px-5 lg:w-1/4">
                        <h2 className="text-gray-500 font-bold tracking-wider text-[10px] lg:text-[14px] mb-1">ISP</h2>
                        <p className="font-bold tracking-wide lg:text-[22px]">{isp}</p>
                    </div>
                </div>
            </div>
        )
    }
}
