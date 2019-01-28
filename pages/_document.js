import React from 'react'
import PropTypes from 'prop-types'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const bf = {
    background:'#fff'
}
class DFJXDocument extends Document{
    render(){
        const { pageContext } = this.props;
        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="minimum-scale=1,initial-scale=1, width=device-width,shrink-to-fit=no" />
                    <meta name="theme-color" content={pageContext ? pageContext.theme.palette.primary.main : null} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.12&key=f61753b6268b265646c318ef0b4cec46"></script> 
                </Head>
                <body style={bf}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

DFJXDocument.getInitialProps = ctx => {
    // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.

  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
        pageContext = props.pageContext;
        return <Component {...props}/>
    }

    WrappedComponent.propTypes = {
        pageContext: PropTypes.object.isRequired,
    };
    return WrappedComponent
  })

  let css;
  if(pageContext){
     
      css = pageContext.sheetsRegistry.toString()
  }

  return {
      ...page,
      pageContext,
      styles: (
          <React.Fragment>
              <style id="jss-server-side" dangerouslySetInnerHTML={{__html: css}} />
              {flush() || null}
          </React.Fragment>
      )
  }
}
export default DFJXDocument