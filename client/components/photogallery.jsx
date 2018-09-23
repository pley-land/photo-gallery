import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const $ = require('jquery');

let images = [];

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      photos: [{ url: '' }, { url: '' }, { url: '' }],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    $.get(`http://localhost:3005/biz/${this.props.restaurantid}`, (data) => {
      this.setState({
        photos: data,
      });
    }).fail(() => {
      console.log('error getting photos');
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
          <div id="photo-gallery">
            <div id="photo1">
              <img
                id="img1"
                className="default photo"
                onClick={this.onClickHandler}
                onKeyDown={this.handleKeyDown}
                src={this.state.photos[0].url}
                alt=""
              />
              {isOpen && (
                <div id="lightbox-wrapper">
                  <Lightbox
                    className="default photo"
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() => this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                    }
                    onMoveNextRequest={() => this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                    }
                  />
                </div>
              )}
            </div>
            <div id="photo2">
              <img
                id="img2"
                className="selected photo"
                onClick={this.onClickHandler}
                onKeyDown={this.handleKeyDown}
                src={this.state.photos[1].url}
                alt=""
              />
            </div>
            <div id="photo3">
              <span
                className="centered shadow"
                onClick={this.onClickHandler}
                onKeyDown={this.handleKeyDown}
              >
                <img
                  id="squares"
                  src="https://s3-us-west-1.amazonaws.com/pley-land/4squares.jpg"
                  alt="squares"
                />
                <br />
                See All 3
              </span>
              <img
                id="img3"
                className="default photo"
                onClick={this.onClickHandler}
                onKeyDown={this.handleKeyDown}
                src={this.state.photos[2].url}
                alt=""
              />
            </div>
          </div>
    );
  }
}

module.exports = PhotoGallery;
