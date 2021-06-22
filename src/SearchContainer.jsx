import { Component } from 'react'
import Search from './Search'
import Results from './Results'

export default class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            searchResults: ""
        }
    }

    setSearch = (e) => {
        let newSearchValue = e.target.value
        this.setState({
            searchValue: newSearchValue
        })
    }

    handleSearch = (e) => {
        e.preventDefault()
        // let newSearchValue = e.target.value
        let filteredResults = this.props.gifData.data.filter(gif => {
            return gif.url
                .toLowerCase()
                .includes(this.state.searchValue
                .toLowerCase())
        })
        this.setState({
            // searchValue: newSearchValue,
            searchResults: filteredResults
        })
    }

    render() {
        return (
            <div>
                <Search 
                    value={this.state.searchValue}
                    onChange={this.setSearch}
                    onSubmit={this.handleSearch}
                />
                <Results 
                    value={this.state.searchValue}
                    gifData={this.state.searchResults}
                />
            </div>
        )
    }
}