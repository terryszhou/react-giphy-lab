import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

const gifData = {
    "data": [
        {
            "type": "gif",
            "id": "iuHaJ0D7macZq",
            "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
            "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
            "rating": "pg",
            "images": {
                "fixed_height": {
                    "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
                }
            }
        },
        {
            "type": "gif",
            "id": "Z1kpfgtHmpWHS",
            "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
            "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
            "rating": "g",
            "images": {
                "fixed_height": {
                    "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
                }
            }
        }
    ],
    "meta": {
        "status": 200,
        "msg": "OK"
    },
    "pagination": {
        "total_count": 1947,
        "count": 25,
        "offset": 0
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Home gifData={gifData} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
