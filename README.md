This is a [Dynamic form](https://ulventech-dynamic-form-exam-thomas.vercel.app/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install node_modules by running below command:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [https://ulventech-react-exam.netlify.app/api/form](https://ulventech-react-exam.netlify.app/api/form). This endpoint can be edited in `.env`.

## Learn More

You can use `@material-ui/core` instead of `@mui/material`

- `@material-ui/core` - Using this module got some broken components on the UI by stypled-components error in next.js project.
- `@mui/material` - Installing this module got some error with version of the node.
  You can install `@mui/material` with `@emotion/react` and `@emotion/styled`
  ```bash
  npm install @emotion/react @emotion/styled @mui/material
  ```

## Deploy on Vercel

You need to add Environment Variables to the vercel project when you deploy
`NEXT_PUBLIC_THEME_COLOR` = my-key-for-theme-color
`NEXT_PUBLIC_GET_URL` = my-key-for-get-url
`NEXT_PUBLIC_POST_ENDPOINT` = my-key-for-post-endpoint

Check out our [Dynamic-form deployment production](https://ulventech-dynamic-form-exam-thomas.vercel.app/) for the review.

[`by Thomas Anderson`](https://developmentservice.vercel.app)
