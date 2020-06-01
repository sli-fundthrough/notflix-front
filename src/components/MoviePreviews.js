import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { Container, Row, Col } from 'react-bootstrap';

import MoviePreview from "./MoviePreview";

class MoviePreviews extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        let moviePreviewsNode = this.props.moviePreviews.map(moviePreview => {
            return (
                <div key={moviePreview.id} className={"movie-preview-items"}>
                    <MoviePreview url={moviePreview.img_path} title={moviePreview.title}/>
                </div>
            );
        });

        return (
            <Container fluid>
                {moviePreviewsNode}
            </Container>
        );
    }
}

MoviePreviews.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    moviePreviews: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    moviePreviews: state.movies.items
});


export default connect(mapStateToProps, { fetchMovies })(MoviePreviews);