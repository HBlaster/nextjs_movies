import Head from 'next/head'
import React from 'react'

const Meta = ({ keywords, description, title }) => {
  return (

    // Setting up meta description
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'TMDB',
  keywords: 'moive app',
  description: 'watch movie overviews'
}

export default Meta