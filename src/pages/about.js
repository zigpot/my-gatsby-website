import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I've been keeping a diary since six. What's inside, mainly just how I've woken up, some grocery lists, and affairs with strangers. But once in a while, I write cool things. Things that might benefit someone out there. Hence this site was brought online.</p>
      <p>if you fancy having a correspondence, kindly send an mail to: <code>farizmade[at]yahoo[dot]com</code></p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage