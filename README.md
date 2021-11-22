This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I created this repository to guide the following blog bost: https://dev.to/elisabethleonhardt/create-a-custom-error-component-in-nextjs-ssr-csr-4kk9

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To see the SSR-Errors

Build the project

```bash
npm run build
npm run start
```

then, navigate to [http://localhost:3000/characters](http://localhost:3000/characters) to see the error for the server-side rendered page.

## To fix the errors

See comments in pages/locations.js and pages/characters.js, fix the API calls and you will see the data as described in my blog post.

Feel free to fork this and experiment a lot! Happy coding!
