import { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input
                        id="gif-searcher"
                        type="text"
                        placeholder="Search for a Gif"
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                </form>
            </div>
        )
    }
}