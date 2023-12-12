import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Terms = () => {
  const site = "farizw.net";
  return (
    <Layout pageTitle="Terms of Use">
      <div>
        <p><strong>Terms of Use</strong></p>
        <p></p>
        <p><strong>Effective Date:  {Date()}</strong></p>
        <p></p>
        <p>Welcome to {site}! By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>
        <p><strong>Acceptance of Terms: </strong></p>
        <p>
        By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms of use.</p>
        <p><strong>User Conduct: </strong></p>
        <p>
        You agree to use this website in a manner consistent with all applicable laws and regulations. Prohibited activities include, but are not limited to, harassment, defamation, spamming, and illegal activities.</p>
        <p><strong>Content Ownership: </strong></p>
        <p>
        All content on this blog, including text, images, and other media, is the property of {site}. You may not reproduce, distribute, or otherwise use any content without our express permission.</p>
        <p><strong>Privacy Policy: </strong></p>
        <p>
        For information on how we collect, use, and protect your personal data, please refer to our Privacy Policy.</p>
        <p><strong>Intellectual Property: </strong></p>
        <p>
        All trademarks, logos, and copyrighted materials displayed on this website are the property of their respective owners. You may not use, reproduce, or distribute any intellectual property without the owner&#39;s express consent.</p>
        <p><strong>External Links: </strong></p>
        <p>
        This website may contain links to external websites for your convenience. We do not endorse or have control over the content on these sites and are not responsible for any information or materials on them.</p>
        <p><strong>Disclaimer: </strong></p>
        <p>
        The information provided on this blog is for general informational purposes only. We make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or usefulness of the information.</p>
        <p><strong>Modification of Terms: </strong></p>
        <p>
        We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting. We encourage you to review these terms regularly.</p>
        <p><strong>Termination of Access: </strong></p>
        <p>
        We reserve the right to terminate or suspend your access to our website for any reason without prior notice.</p>
        <p><strong>Governing Law: </strong></p>
        <p>
        These terms are governed by and construed in accordance with the laws of The Indonesian Republic.</p>
        <p><strong>Contact Information: </strong></p>
        <p>
        For questions or concerns regarding these terms, please contact us at: <code>farizmade[at]yahoo[dot]com</code></p>
        <p>Thank you for visiting site</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Terms of Use" />

export default Terms