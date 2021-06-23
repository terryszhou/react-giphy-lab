// FUNCTIONAL VERSION
const Search = (props) => {
    return (
        <div>
        <form onSubmit={props.onSubmit}>
            <input
                id="gif-searcher"
                type="text"
                placeholder="Search for a Gif"
                value={props.value}
                onChange={props.onChange}
            />
            <div>
                <button class="m-2 rounded">Search</button>
            </div>
        </form>
    </div>
    )
}
export default Search

// CLASS-BASED VERSION
// import { Component } from 'react'

// export default class Search extends Component {
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.props.onSubmit}>
//                     <input
//                         id="gif-searcher"
//                         type="text"
//                         placeholder="Search for a Gif"
//                         value={this.props.value}
//                         onChange={this.props.onChange}
//                     />
//                     <div>
//                         <button>Search</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }