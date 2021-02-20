export default {
  repository: 'https://github.com/LukasPolak/tidbit',
  titleSuffix: ' – TidBit',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">TidBit</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        a small piece of interesting information
      </span>
    </>
  ),
  head: (
    <>
      <title>TidBit - a small piece of interesting information</title>
      <meta
        name="title"
        content="TidBit - a small piece of interesting information"
      />
      <meta
        name="description"
        content="TidBit - a small piece of interesting information"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tidbit.dev/" />
      <meta
        property="og:title"
        content="TidBit - a small piece of interesting information"
      />
      <meta
        property="og:description"
        content="TidBit - a small piece of interesting information"
      />
      <meta property="og:image" content="https://tidbit.dev/cover.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tidbit.dev/" />
      <meta
        property="twitter:title"
        content="TidBit - a small piece of interesting information"
      />
      <meta
        property="twitter:description"
        content="TidBit - a small piece of interesting information"
      />
      <meta property="twitter:image" content="https://tidbit.dev/cover.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  docsRepository: '',
  footerText: <>MIT {new Date().getFullYear()} © TidBit.</>,
}
