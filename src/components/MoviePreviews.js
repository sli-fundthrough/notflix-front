import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { Container, Row, Col } from 'react-bootstrap';

import MoviePreview from "./MoviePreview";
import Config from "../config";

class MoviePreviews extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        let ctr = 1;
        let row = null;
        let completedRow = null;
        let grid = null;

        this.props.moviePreviews.forEach(moviePreview => {
            let colItem = (
                <Col>
                    <div key={moviePreview.id} className={"movie-preview-items"}>
                        <MoviePreview url={moviePreview.img_path} title={moviePreview.title}/>
                    </div>
                </Col>
            );

            row += colItem;
            ctr++;
            if (ctr > Config.NUM_COLS_IN_ROW) {
                row = <Row>{row}</Row>;
                completedRow = row;
                grid += completedRow;
                row = null;
                ctr = 1;
            }
        });

        return (
            <Container fluid>
                {grid}
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