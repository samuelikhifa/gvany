import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
};

export default function SEO({
  title = "GVANY Sales & Distribution",
  description = "Adding Value Across Africa through excellence in marketing, logistics, and distribution services.",
  ogImage = "/og-image.jpg",
  canonical
}: Props) {

  const fullTitle = `${title} | GVANY`;
  const url = canonical ? `https://www.gvany.com${canonical}` : "https://www.gvany.com";

  useEffect(() => {
    /** TITLE **/
    document.title = fullTitle;

    /** DESCRIPTION **/
    updateTag("meta[name='description']", "content", description);

    /** CANONICAL **/
    updateLink("link[rel='canonical']", "href", url);

    /** OG TAGS **/
    updateTag("meta[property='og:title']", "content", fullTitle);
    updateTag("meta[property='og:description']", "content", description);
    updateTag("meta[property='og:url']", "content", url);
    updateTag("meta[property='og:image']", "content", ogImage);

    /** TWITTER TAGS **/
    updateTag("meta[name='twitter:title']", "content", fullTitle);
    updateTag("meta[name='twitter:description']", "content", description);
    updateTag("meta[name='twitter:image']", "content", ogImage);

  }, [fullTitle, description, ogImage, url]);

  return null;
}

/** Utility to update or create <meta> */
function updateTag(selector: string, attr: string, value: string) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const [type, nameOrProperty] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=");

    element.setAttribute(type, nameOrProperty.replace(/"/g, ""));
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}

/** Utility to update canonical <link> */
function updateLink(selector: string, attr: string, value: string) {
  let element = document.querySelector(selector) as HTMLLinkElement;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}
