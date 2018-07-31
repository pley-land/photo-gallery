import React from 'react';
import Lightbox from 'react-image-lightbox';
import searchBarIMG from '../../public/StaticSearch.png';
import mapIMG from '../../public/StaticMap.png';
import squares from '../../public/4squares.jpg';


const $ = require('jquery');

let images = [];

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      photoCount: 0,
    };

    this.enlargePicture = this.enlargePicture.bind(this);
    this.shrinkPicture = this.shrinkPicture.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ photoCount: images.length });
  }

  onClickHandler(e) {
    this.setState({ isOpen: true });
  }

  enlargePicture(e) {
    console.log(e.target);
    if (e.target.nodeName === 'SPAN') {
      $('#img2').removeClass('selected');
      $('#img2').addClass('default');
      $('#img3').addClass('selected');
    } else {
      $('#img2').removeClass('selected');
      $('#img2').addClass('default');
      $(e.target).addClass('selected');
    }
  }

  shrinkPicture() {
    $('#img2').addClass('selected');
    $('#img2').removeClass('default');
    $('#img3').removeClass('selected');
    $('#img3').addClass('default');
    $('#img1').removeClass('selected');
    $('#img1').addClass('default');
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    $.get('http://localhost:3005/biz/Ippudo', (data) => {
      images = [];
      data.forEach((element, index) => {
        $(`#img${index + 1}`).attr('src', element.url);
        images.push(element.url);
      });
    }).fail(() => {
      console.log('error');
    });

    return (
      <div id="topshelf">
        <img
          id="searchbar"
          src={searchBarIMG}
          alt="Searchbar"
        />
        <div id="top">
          <img
            id="mapIMG"
            src={mapIMG}
            alt="mapIMG"
          />
          <div id="photo-gallery">
            <div id="photo1">
              <img
                id="img1"
                className="default photo"
                onClick={this.onClickHandler}
                onMouseEnter={this.enlargePicture}
                onMouseLeave={this.shrinkPicture}
                src=""
                alt="Could be portrait or landscape"
              />
              {isOpen && (
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
              )}
            </div>
            <div id="photo2">
              <img
                id="img2"
                className="selected photo"
                onClick={this.onClickHandler}
                onMouseEnter={this.enlargePicture}
                onMouseLeave={this.shrinkPicture}
                src=""
                alt="Could be portrait or landscape" />
            </div>
            <div id="photo3">
              <span className="centered shadow"
                onClick={this.onClickHandler}
                onMouseEnter={this.enlargePicture}
                onMouseLeave={this.shrinkPicture}
              >
                <img
                  id="squares"
                  src={squares}
                  alt="squares"
                />
              <br />See All 3
              </span>
              <img
                id="img3"
                className="default photo"
                onClick={this.onClickHandler}
                onMouseEnter={this.enlargePicture}
                onMouseLeave={this.shrinkPicture}
                src=""
                alt="Could be portrait or landscape" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PhotoGallery;

// openModal(e) {
//   this.setState({ modalIsOpen: true });

//   let imgSource = e.target.src;
//   // console.log($('#img1-modal'));
//   // $('#img1-modal').attr('src', imgSource);
// }

// closeModal() {
//   this.setState({ modalIsOpen: false });
// }

// const customStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.85)',
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     background: 'black',
//     padding: '0px, 0px, 0px, 0px',
//     border: '0px',
//     width: '90%',
//   },
// };

/*
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel='Example Modal'
            >
              <div className="modal-box">
                <button onClick={this.closeModal}>close</button>
                <img
                id="img1"
                className="modal-content"
                src=""
                alt=""
                />
                <div id="sidebar">test</div>
              </div>
            </Modal>
            */
