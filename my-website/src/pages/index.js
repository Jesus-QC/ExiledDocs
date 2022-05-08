import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>

      <div className="title-box">
          <h1 className="title">
              EXILED
          </h1>
          <h2>
              <span>EX</span>tended <span>I</span>n-runtime <span>L</span>ibrary for <span>E</span>xternal <span>D</span>evelopment
          </h2>
      </div>

        <div className="button-box">
            <a className="button button--secondary button--lg" to="/">
                Documentation
            </a>
            <a className="button button--secondary button--lg" to="/">
                Documentation
            </a>
            <a className="button button--secondary button--lg" to="/">
                Documentation
            </a>
            <a className="button button--secondary button--lg" to="/">
                Documentation
            </a>
        </div>

    </Layout>
  );
}
