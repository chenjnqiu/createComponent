const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/docz',

  siteMetadata: {
    title: 'Chenjinqiu Component',
    description: 'test my component',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/mnt/f/personTest/createComponent/.docz',
        base: '/docz',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/my-dist-folder',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Chenjinqiu Component',
        description: 'test my component',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/mnt/f/personTest/createComponent',
          templates:
            '/mnt/f/personTest/createComponent/node_modules/docz-core/dist/templates',
          docz: '/mnt/f/personTest/createComponent/.docz',
          cache: '/mnt/f/personTest/createComponent/.docz/.cache',
          app: '/mnt/f/personTest/createComponent/.docz/app',
          appPackageJson: '/mnt/f/personTest/createComponent/package.json',
          appTsConfig: '/mnt/f/personTest/createComponent/tsconfig.json',
          gatsbyConfig: '/mnt/f/personTest/createComponent/gatsby-config.js',
          gatsbyBrowser: '/mnt/f/personTest/createComponent/gatsby-browser.js',
          gatsbyNode: '/mnt/f/personTest/createComponent/gatsby-node.js',
          gatsbySSR: '/mnt/f/personTest/createComponent/gatsby-ssr.js',
          importsJs: '/mnt/f/personTest/createComponent/.docz/app/imports.js',
          rootJs: '/mnt/f/personTest/createComponent/.docz/app/root.jsx',
          indexJs: '/mnt/f/personTest/createComponent/.docz/app/index.jsx',
          indexHtml: '/mnt/f/personTest/createComponent/.docz/app/index.html',
          db: '/mnt/f/personTest/createComponent/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
