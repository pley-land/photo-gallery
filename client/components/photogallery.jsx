import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import searchBarIMG from '../../public/StaticSearch.png';
import mapIMG from '../../public/StaticMap.png';


const $ = require('jquery');

const images = [
  'https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg',
  'https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg',
  'https://s3.ap-northeast-2.amazonaws.com/pleyland/36.jpg',
];

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };

    this.enlargePicture = this.enlargePicture.bind(this);
    this.shrinkPicture = this.shrinkPicture.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    console.log(this.state.isOpen);
    console.log(this.state.photoIndex);
    this.setState({ isOpen: true });
    return;
  }

  enlargePicture(e) {
    $('#img2').removeClass('selected');
    $('#img2').addClass('default');
    $(e.target).addClass('selected');
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
      data.forEach((element, index) => {
        $(`#img${index + 1}`).attr('src', element.url);
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
            id="map-img"
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
              <span className="centered">
              See All Photos
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
