const withMdxEnhanced = require("next-mdx-enhanced");
const withCss = require("@zeit/next-css");
const withLess = require('@zeit/next-less');
//const withPurgeCss = require("next-purgecss");

const path = require("path");
const glob = require("glob");

module.exports = {
    webpack: (config, { dev }) => {
        config.module.rules.push(
            {
                test: /\.(css|less)/,
                loader: "emit-file-loader",
                options: {
                    name: "dist/[path][name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: ["babel-loader", "raw-loader", "postcss-loader"]
            },
            {
                test: /\.(l|e)ss$/,
                use: [
                    "babel-loader",
                    "raw-loader",
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            includePaths: ["styles", "node_modules"]
                                .map(d => path.join(__dirname, d))
                                .map(g => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        return config;
    }
};

// next.config.js
module.exports =
    withMdxEnhanced({
        layoutPath: 'layouts',
        defaultLayout: true,
        fileExtensions: ['mdx'],
        remarkPlugins: [],
        rehypePlugins: [],
        extendFrontMatter: {
            process: (mdxContent, frontMatter) => {},
            phase: 'prebuild|loader|both',
        },
    })(withCss(withLess({})))
/*(
    withCss(
      withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
        purgeCss: {
          whitelist: ["html", "body"],
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["html", "js", "css", "jsx"]
            }
          ]
        }
      })));*/
