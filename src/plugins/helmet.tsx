import { Helmet } from 'react-helmet';
import { IReactHelmetProps } from 'types';

const ReactHelmet = ({
  lang,
  type,
  canonical,
  themeColor,
  width,
  height,
  image,
  robots,
  keywords,
  description,
  title,
  favicon,
  viewport,
}: IReactHelmetProps) => {
  return (
    <>
      <Helmet titleTemplate="%s">
        <html lang={lang || 'ko'} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {image ? <link rel="image_src" href={image} /> : null}
        {image ? <meta itemProp="image" content={image} /> : null}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content={viewport || ''} />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={favicon} />
        <meta property="og:site_name" content="Hostingkr" />
        <meta property="og:description" content={description} />
        <meta name="robots" content={robots || 'all'} />
        <meta name="googlebot" content={robots || 'all'} />
        <meta
          name="google-site-verification"
          content="IEQdCO8M3OHxVHlGTxrht0K1Hq9rYB-qnVAgKP_G8VE"
        />
        <meta name="theme-color" content={themeColor || `#ffffff`} />
        <meta
          name="msapplication-navbutton-color"
          content={themeColor || `#ffffff`}
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={themeColor || `#ffffff`}
        />
        {canonical ? <meta property="og:url" content={canonical} /> : null}
        <meta property="og:locale" content={lang || 'ko'} />
        <meta property="og:type" content={type} />
        {width ? <meta property="og:image:width" content={width} /> : null}
        {height ? <meta property="og:image:height" content={height} /> : null}
        <meta property="fb:pages" content="YOUR WEB SITE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {description ? (
          <meta name="twitter:description" content={description} />
        ) : null}
        {image ? <meta name="twitter:image" content={image} /> : null}
        <meta name="twitter:site" content="@YOURWEBSITE" />
        {canonical ? (
          <link rel="alternate" href={canonical} hrefLang={lang || 'ko'} />
        ) : null}
      </Helmet>
    </>
  );
};

export default ReactHelmet;
