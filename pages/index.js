import Head from 'next/head'
import Nav from './components/Nav'
import Landing from './components/Landing'
import About from './components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gamershub</title>
        <meta name="description" content="A site to get information and download games for your console" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Landing/>
      <About/>
    </div>
  )
}
