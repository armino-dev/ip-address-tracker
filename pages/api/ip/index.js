import Cors from 'cors'
import { validateIpExtended } from '../../../helpers/validation';

const cors = Cors({
    methods: ['GET', 'POST', 'HEAD'],
})

async function getIpInfo(ip) {
    const apiKey = process.env.IPIFY_API_KEY
    const endpoint = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`
    
    if (!validateIpExtended(ip)) {
        return {error: 'Invalid IP address format.'}
    }

    const res = await fetch(endpoint)

    return await res.json()
}

async function getAPILimit() {
    const apiKey = process.env.IPIFY_API_KEY
    const endpoint = `https://geo.ipify.org/service/account-balance?apiKey=${apiKey}`

    const res = await fetch(endpoint)

    return await res.json()
}

function middleware(req, res, callback) {
    return new Promise((resolve, reject) => {
        callback(req, res, data => {
            if (data instanceof Error) {
                return reject(data)
            }

            return resolve(data)
        })
    })
}

async function handler(req, res) {
    await middleware(req, res, cors)

    const forwarded = req.headers['x-forwarded-for']
    let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress

    if (req.query.ip) {
        ip = req.query.ip
    }

    const data = {
        info: await getIpInfo(ip),
        credits: await getAPILimit(),
    }

    res.status(200).json({ data })
}

export default handler