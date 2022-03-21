import React, { FC } from 'react'
import Head from 'next/head';
import { Navbar } from '../ui';

type Props = {
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name="author" content="Rodolfo Lara" />
            <meta name="description" content="Informacion del pokemon" />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`ESta es la informacion sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
