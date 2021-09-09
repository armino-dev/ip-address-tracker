import Head from 'next/head'
//import Image from 'next/image'
import React from 'react'
import 'tailwindcss/tailwind.css'
import Header from '../components/header'
import Info from '../components/info'
import Body from '../components/body'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            ip: null,
            location: null,
            timezone: null,
            isp: null,
            position: null,
            credits: 0
        }
        this.getIpInfo = this.getIpInfo.bind(this)
    }

    getIpInfo(ip, data) {
        const info = data.info
        const location = info.location
        this.setState({
            ip: ip,
            location: [location.city, location.region + ' ' + location.postalCode, location.country].join(', '),
            timezone: location.timezone,
            isp: info.isp,
            position: [location.lat, location.lng],
            credits: data.credits.credits,
        })
    }

    render() {
        const { ip, isp, location, timezone, position } = this.state
        const pageTitle = 'Ip Address Tracker';

        return (
            <div className="flex flex-col h-screen max-width-1440">
                <Head>
                    <title>{pageTitle}</title>
                    <meta property="og:title" content={pageTitle} key="title" />
                </Head>
                <Header getIpInfo={this.getIpInfo} />
                <Info
                    ip={ip}
                    location={location}
                    timezone={timezone}
                    isp={isp}
                />
                <Body position={position} />
            </div>
        )
    }
}
