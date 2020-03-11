import React, {Component} from "react";
import MovieImg from '../assets/img/movie.png'

class Home extends Component {

    render() {
        return <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <p className="paragraph">
                        Movies DB App is an online database of information related to films, 
                        television programs, home videos, video games, 
                        and streaming content online – including cast, 
                        production crew and personal biographies, plot summaries, 
                        trivia, fan and critical reviews, and ratings. 
                        An additional fan feature, message boards, 
                        was abandoned in February 2017. Originally a fan-operated website, 
                        the database is owned and operated by IMDb.com, Inc., 
                        a subsidiary of Amazon.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="d-flex
                                    flex-md-row
                                    flex-column
                                    border
                                    shadow-sm
                                    bg-white
                                    rounded">
                        <img className="home-img" src={MovieImg} alt="Home-img"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home; 