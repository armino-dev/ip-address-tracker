This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is part of the [Frontend Mentor Challenge - IP address tracker](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)

![Design preview for the IP address tracker coding challenge](./desktop-preview.jpg)
## Getting Started

First create a file `.env.local` in the root of the project. Copy the environment variables from `.env.local.example` to your `.env.local` and edit them per your needs.

You will have something like this:
```bash
# Environment variables secret available on server side

# add your ipify api key below
IPIFY_API_KEY=your_secret_api_key_here

# Public Environment variables available on client side
NEXT_PUBLIC_LOCAL_DEVELOPMENT=true
NEXT_PUBLIC_HOSTNAME=localhost
NEXT_PUBLIC_PORT=3000
NEXT_PUBLIC_HOST=http://$NEXT_PUBLIC_HOSTNAME:$NEXT_PUBLIC_PORT
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Have fun!** 🚀