import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
};

export default function SEO({ 
  title = "GVANY Sales & Distribution", 
  description = "Adding Value Across Africa through excellence in marketing, logistics, and distribution services.",
  ogImage = "https://www.gvany.com/og-image.jpg",
  canonical
}: Props) {
  const fullTitle = title + " | GVANY";
  const url = canonical ? `https://www.gvany.com${canonical}` : "https://www.gvany.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}