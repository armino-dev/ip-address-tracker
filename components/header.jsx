import React from 'react'
import Search from './search'

export default class Header extends React.Component {
    constructor() {
        super()
        this.getInfo = this.getInfo.bind(this)
    }

    getInfo(ip, info) {
        const {getIpInfo} = this.props

        this.setState(getIpInfo(ip, info))
    }

    render() {
        return (
            <div
                className="flex flex-col bg-blue-400 px-5 h-[300px] lg:h-[280px] items-center pattern-bg"
            >
                <h1 className="my-5 lg:mt-6 text-[25px] lg:text-[30px] tracking-wide font-bold text-white">IP Address Tracker</h1>
                <Search getInfo={this.getInfo} />
            </div>
        )
    }
}