import { Component } from "react";

export default class DocSearch extends Component {
    componentDidMount() {

        const {version} = this.props;

        const d = document.createElement("script")
        d.async = true
        d.src = "https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"
        d.onload = () => {
            window.docsearch({
                apiKey: '3df93446658cd9c4e314d4c02a052188',
                indexName: 'tailwindcss',
                inputSelector: '#docsearch',
                algoliaOptions: {'facetFilters': [`version:${version}`]}
                // for styling
                // debug: true,
            })
        }
        document.getElementsByTagName("body")[0].appendChild(d)
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (<></>)
    }

}