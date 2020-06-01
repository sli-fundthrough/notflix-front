import React, {Component} from 'react';

// Props: {
//   title:string,
//   url:string,
// }

class MoviePreview extends  Component {


    render() {
        return (
          <div className={"movie-preview col-4"}>
              <img className={"movie-preview-img"}
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face/${this.props.url}`}
              />
              <h3 className={"movie-preview-title"}>{this.props.title}</h3>
          </div>
        );
    }
}

export default MoviePreview;