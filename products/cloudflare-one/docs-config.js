const productIconKey = "cloudflare-one";

module.exports = {
  product: "Cloudflare Zero Trust",
  pathPrefix: "/cloudflare-one",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/cloudflare-one",
  logoSVGContent: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.29 40.55L33.12 43.38L43.61 32.89L33.12 22.41L30.29 25.24L35.95 30.89H6.01001V34.89H35.95L30.29 40.55Z" fill="black"/> <path d="M51.43 13.78L50.06 13.59C44.2675 12.7343 38.8907 10.0791 34.69 6.00003L33.5 4.66003H30.5L29.34 6.00003C25.1513 10.0791 19.7839 12.7348 14 13.59L12.63 13.78L10.91 15.78V27H14.91V17.5C21.3366 16.4645 27.2966 13.5001 32 9.00003C36.7215 13.5083 42.7031 16.473 49.15 17.5V29.9C49.15 46.26 34 54.73 32 55.75C30.47 55 20.58 49.43 16.57 39H12.33C16.74 52.43 29.75 59.09 30.41 59.42L31.12 59.78H32.91L33.62 59.42C34.42 59.03 53.15 49.42 53.15 29.9V15.76L51.43 13.78Z" fill="black"/> </svg>',
  externalLinks: [
    {
      title: "Blog: Introducing Cloudflare One",
      url: "https://blog.cloudflare.com/introducing-cloudflare-one/",
    },
    {
      title: "Cloudflare for Teams pricing",
      url: "https://www.cloudflare.com/teams-pricing/",
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:cloudflare-one"]' },
  },
  siteMetadata: {
    title: "Cloudflare Zero Trust docs",
    description: "Cloudflare One™ is the culmination of engineering and technical development guided by conversations with thousands of customers about the future of the corporate network. It provides secure, fast, reliable, cost-effective network services, integrated with leading identity management and endpoint security providers. These docs contain step-by-step, use case driven, tutorials to use Cloudflare One products.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/cloudflare-one",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
