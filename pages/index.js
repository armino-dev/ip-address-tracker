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
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
                    />
                    <meta name="description" content="Ip Address Tracker - An app build for frontendmentor.com challange." />
                    <meta name="keywords" content="ip address tracker, frontend mentor" />
                    <meta property="og:title" content={pageTitle} key="title" />
                    <meta name="theme-color" content="#90cdf4" />
                    <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/logo/logo-96x96.png" />
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
