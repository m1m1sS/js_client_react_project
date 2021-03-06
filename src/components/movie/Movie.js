import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from 'react-router-dom';

class Movie extends Component {


    showMovieDetails = () => {
        this.props.history.push(`/moviedetails/${this.props.id}`);
    }
    render() {
        return <div className="col-md-6">
                <div className="d-flex
                flex-md-row
                flex-column
                border shadow-sm mb-3 bg-white rounded
                movie
                ">
                    <img className="movie-image" alt=""
                    src={constants.basePosterURL + this.props.poster_path}/>
                    <div className="p-3 d-flex flex-column">
                        <div className="pb-3">
                            <h4 className="movie-title">{this.props.title}</h4>
                            <i style={{color: '#6b3200'}}>{moment(this.props.release_date).format("MMMM Do YYYY")}</i>
                            <div className="mt-3 movie-description">
                                {this.props.overview}
                            </div>
                        </div>
                        <div className="mt-auto border-top pt-3" >
                            <button type="button"
                            onClick={this.showMovieDetails} 
                            className="btn btn-link"  style={{color: '#ff7700'}}>
                                More information
                            </button>
                        </div> 
                    </div>
                </div>
        </div>
    }
}

export default withRouter(Movie);