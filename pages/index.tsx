import Head from 'next/head'
import Image from 'next/image'
import {Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';

import Bar from '../components/appBar'
import Form from '../components/form';

const themeColor = process.env.NEXT_PUBLIC_THEME_COLOR || ''

const theme = createTheme({
  palette: {
    primary: {
      main: themeColor,
    },
  },
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dynamic Form</title>
        <meta name="description" content="Dynamic Form made using next.js(typescript) by Thomas Anderson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <ThemeProvider theme={theme}>
        <Bar />
        <Container maxWidth="md" style={{marginTop:"6rem"}}>
          <div>
            <Box style={{display:"flex",alignItems:"center", marginBottom:"16px", justifyContent:"space-between"}}>
              <Typography variant="h5" paragraph>
                  Dynamic Form
              </Typography>
            </Box>
            <Form />
          </div>
        </Container>
      </ThemeProvider>
      </main>
    </div>
  )
}
