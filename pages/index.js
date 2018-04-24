import React from 'react'
import Head from 'next/head';

import stylesheet from 'styles/index.scss'
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Nav from '../components/navigation';
import Footer from '../components/footer';

// export default () =>
//   <div>
//     <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
//     <p>ciao</p>
//   </div>

const Home = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>amagazi</title>
        <meta name="description"
              content="A full-service digital agency experienced in branding, business strategy,
              and crafting share-worthy consumer experiences. We don't walk the line, we create it."/>
        <meta name="keywords" content="creative agency, business strategy, advertising"/>
        <meta name="author" content="amagazi"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Nav/>
        <div className="homepage">
          <img src='/static/homepage.gif' alt="amagazi creative agency" className="img-fluid"/>
        </div>
        <div className="homepage-mobile">
          <img src='/static/homepage-m.gif' alt="amagazi creative agency" className="img-fluid"/>
        </div>


        <div class="footer-copyright py-3 text-center">
          <p>© 2018 copyright |
          <a href="/privacy"> privacy </a></p>
        </div>
    </div>
  )
};

export default Home;
