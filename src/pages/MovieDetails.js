import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

import constants from "../constants";
import moment from "moment";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class MovieDetails extends Component {


    componentDidMount = () => {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetails(movieId);
    }

    render() {
        const value = this.props.movieDetails.vote_average;
        return <div className="col-md-12 mb-5">
                <div className="d-flex
                flex-md-row
                flex-column
                single-movie
                ">
                    <img className="single-movie-image" alt=""
                    src={constants.basePosterURL + this.props.movieDetails.poster_path}/>
                    <div className="p-3 d-flex flex-column ml-5">
                        <div className="pb-3">
                            <h2 className="single-movie-title">{this.props.movieDetails.title} <a style={{color: '#ff8d2a'}}>({moment(this.props.movieDetails.release_date).format("YYYY")})</a></h2>
                            <p className="single-movie-description"><i>Release date: {moment(this.props.movieDetails.release_date).format("MMMM Do YYYY")}</i></p>
                            <div className="mt-3 single-movie-description paragraph border-top pt-3">
                                    <h4 className="single-movie-title">Overview</h4>
                                <p>{this.props.movieDetails.overview}</p>

                                <div className="row mt-3">
                                    <div className="single-movie-description col-2" style={{width: '10%'}}>
                                    <CircularProgressbar value={value} maxValue={10} text={`${value*10}%` } />
                                    </div>
                                    <div className="mt-2 col-1 single-movie-description">Rating on users</div>
                                    <div className="mt-2 col-1 single-movie-description border-right "></div>
                                    <div className="mt-2 col-8 single-movie-description">
                                        <div>Original language: <b style={{textTransform: 'uppercase'}}>{this.props.movieDetails.original_language}</b></div>
                                        <div>Budget: <b style={{textTransform: 'uppercase'}}>${this.props.movieDetails.budget}</b></div>
                                        <div>Revenue: <b style={{textTransform: 'uppercase'}}>${this.props.movieDetails.revenue}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

const mapStateToProps = state => {
    return {
        movieDetails: state.movieDetails,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovieDetails: actions.setMovieDetails,
        getMovieDetails: actions.getMovieDetails,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)
        (withRouter(MovieDetails));
