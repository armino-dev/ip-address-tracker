import React from 'react'
import Image from 'next/image'
import iconArrow from '../public/icon-arrow.svg'
import { validateIpv4 } from '../helpers/validation'
//import fetch from 'node-fetch'

export default class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ipAddress: '',
            canSearch: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.startSearch = this.startSearch.bind(this)
    }

    handleChange(event) {
        const ipAddress = event.target.value
        if (!validateIpv4(ipAddress)) return;
        
        console.info('we have a valid ipv4 address');

        this.setState({ipAddress, canSearch:true})
        
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.startSearch()
        }
    }

    async startSearch() {
        if (!this.state.canSearch) return;

        console.info(`Search started for ip ${this.state.ipAddress}`);

        const {getInfo} = this.props

        const endpoint = process.env.NEXT_PUBLIC_LOCAL_DEVELOPMENT ?
            `${process.env.NEXT_PUBLIC_HOST}/api/ip?ip=${this.state.ipAddress}` :
            `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/ip?ip=${this.state.ipAddress}`


        const data = await fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                console.error(response);
                //throw new Error(`${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
            return;
        });

        this.setState(getInfo(this.state.ipAddress, data.data))
    }

    render() {
        return (
            <div className="w-full lg:w-8/12 flex flex-row items-center justify-center">
                <input 
                    className="w-full lg:w-[496px] focus:font-bold h-[60px] p-2 pl-6 rounded-l-[15px] border-none outline-none" 
                    type="text" 
                    placeholder="Enter an IP address to track"
                    onInput={this.handleChange} 
                    onKeyDown={this.handleChange}
                />
                <button 
                    type="button"
                    className="h-[60px] w-[70px] lg:w-[60px] bg-black hover:bg-gray-800 rounded-r-[15px] flex flex-row items-center justify-center"
                    onClick={this.startSearch}
                >
                    <Image alt="search" src={iconArrow} />
                </button>
            </div>
        )
    }
}
