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
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ isOpen: true });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    console.log('gallery', this.props.restaurantid);
    $.get(`http://localhost:3005/biz/${this.props.restaurantid}`, (data) => {
      images = [];
      data.forEach((element, index) => {
        $(`#img${index + 1}`).attr('src', element.url);
        images.push(element.url);
      });
    }).fail(() => {
      console.log('error');
    });

    return (
          <div id="photo-gallery">
            <div id="photo1">
              <img
                id="img1"
                className="default photo"
                onClick={this.onClickHandler}
                onMouseEnter={(e) => {
                  if (e.target.nodeName === 'SPAN') {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $('#img3').addClass('selected');
                  } else {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $(e.target).addClass('selected');
                  }
                }}
                onMouseLeave={() => {
                  $('#img2').addClass('selected');
                  $('#img2').removeClass('default');
                  $('#img3').removeClass('selected');
                  $('#img3').addClass('default');
                  $('#img1').removeClass('selected');
                  $('#img1').addClass('default');
                }}
                onKeyDown={this.handleKeyDown}
                src=""
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
                onMouseEnter={(e) => {
                  if (e.target.nodeName === 'SPAN') {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $('#img3').addClass('selected');
                  } else {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $(e.target).addClass('selected');
                  }
                }}
                onMouseLeave={() => {
                  $('#img2').addClass('selected');
                  $('#img2').removeClass('default');
                  $('#img3').removeClass('selected');
                  $('#img3').addClass('default');
                  $('#img1').removeClass('selected');
                  $('#img1').addClass('default');
                }}
                onKeyDown={this.handleKeyDown}
                src=""
                alt=""
              />
            </div>
            <div id="photo3">
              <span
                className="centered shadow"
                onClick={this.onClickHandler}
                onMouseEnter={(e) => {
                  if (e.target.nodeName === 'SPAN') {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $('#img3').addClass('selected');
                  } else {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $(e.target).addClass('selected');
                  }
                }}
                onMouseLeave={() => {
                  $('#img2').addClass('selected');
                  $('#img2').removeClass('default');
                  $('#img3').removeClass('selected');
                  $('#img3').addClass('default');
                  $('#img1').removeClass('selected');
                  $('#img1').addClass('default');
                }}
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
                onMouseEnter={(e) => {
                  if (e.target.nodeName === 'SPAN') {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $('#img3').addClass('selected');
                  } else {
                    $('#img2').removeClass('selected');
                    $('#img2').addClass('default');
                    $(e.target).addClass('selected');
                  }
                }}
                onMouseLeave={() => {
                  $('#img2').addClass('selected');
                  $('#img2').removeClass('default');
                  $('#img3').removeClass('selected');
                  $('#img3').addClass('default');
                  $('#img1').removeClass('selected');
                  $('#img1').addClass('default');
                }}
                onKeyDown={this.handleKeyDown}
                src=""
                alt=""
              />
            </div>
          </div>
    );
  }
}

module.exports = PhotoGallery;
