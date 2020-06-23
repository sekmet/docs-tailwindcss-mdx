const tailwindJson = require('./tailwind.json');
const packageJson = require('./node_modules/tailwindcss/package.json');
const navigationJson = require('./navigation.json');

module.exports = {
    baseUrl: '',
    production: false,
    collections: [],
    docSearchVersion: 'v1',
    config: tailwindJson,
    version: packageJson.version,
    colors: ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'],
    categoryName: (page) => {
    if (page && `${page.__resourcePath}`.startsWith('/docs')) {
        return 'Documentation';
    } else if (page && `${page.__resourcePath}`.startsWith('/components')) {
        return 'Components';
    } else if (page && `${page.__resourcePath}`.startsWith('/course') || page && `${page.__resourcePath}`.startsWith('/screencasts')) {
        return 'Screencasts';
    } else if (page && `${page.__resourcePath}`.startsWith('/resources')) {
        return 'Resources';
    } else if (page && `${page.__resourcePath}`.startsWith('/community')) {
        return 'Community';
    } else {
        return 'Documentation';
    }
    },
    active: (page, link) => {
        if (!link)
            return false;

        let path = link; //instanceof Collection ? link['url'] : link;

        //console.log(`/${page.__resourcePath}`.replace(/\.mdx$/, ''), link)

        if (path === '/course/coming-soon')
            return false;

        return (`/${page.__resourcePath}`.replace(/\.mdx$/, '') === path);
    },
    categoryActive: (page, link) => {
        if (!link)
            return false;
        let path = link //instanceof Collection ? link['url'] : link;
        return `/${page.__resourcePath}`.startsWith(path);
    },
    getLink: (page) => {
        return `/${page.__resourcePath}`.replace(/\.mdx$/, '')
    },
    isExternal: (page, link) => {
        return link //instanceof Collection ? link['external'] : false;
    },
    anyChildrenActive: (page, children) => {
        //return $children->contains(function (link) use (page) => {
        //    return page.__resourcePath == '/docs/'. link;
        //});
    },
    navigation: navigationJson,
}