import React from 'react';

const $ = require('jquery');

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: ['Gogi Time',
        'Boba Guys',
        'Chipotle',
        'Fork & Spoon',
        'Halal Guys',
        'EighTea',
        'Burger King',
        'In-n-Out',
        'Popeyes',
        'Tu Lan',
        'KFC',
        'Chick-fil-a',
        'Blind Tiger',
        "Wendy's",
        'A&W',
        'Rooster & Rice',
        'Shakewell',
        'Flipside',
        'Urban Tavern',
        '707 Sutter',
        'Momofuku',
        'Roaring Fork ',
        'Ippudo',
        'The Melt',
        'BunMee',
        'Pei Wei ',
        'The Cavalier',
        'Dirty Habit',
        'Lin Jia Asian Kitchen',
        'Colonial Donuts',
        'Oakland Kosher Foods',
        'Rolling Dunes',
        'Grand Lake Kitchen',
        'Soba Ichi',
        'Proposition Chicken',
        'Qi Dumpling Lounge',
        "Warren's Webpack Bananza",
        'Arizmendi Bakery',
        'The Star on Grand',
        'Holy Land Restuarant',
        'Cheese Steak Shop',
        "Anson's Handsome Hamburgers",
        'Belcampo Restuarant & Butcher Shop',
        'Daily Grill',
        "Morton's The Steakhouse",
        'The Mark',
        'California Pizza Kitchen',
        'Ikaros Greek Restuarant',
        'Modigliani Cafe',
        'JJ Burger',
        'Sliver',
        'Lakeshore Cafe',
        'Belly',
        "Lovely's",
        'Mua',
        'Flavor of India',
        'Dosirak Shop',
        'Super Duper Burgers',
        'Hancook',
        "Chan's Kitchen",
        "Steven's Slow Today Deli",
        'Aisle 5',
        'CANA Cuban Parlor & Cafe',
        'Homeroom',
        "Justin's Koolaid Bar",
        'CHICA Oakland',
        'Penrose',
        'Mockingbird',
        "Wally's Cafe",
        'Orchid Pavillion Cafe',
        'Fogo de Chao',
        'The Grove',
        "Michael's Romantic Bulgogi Beef",
        'Belotti Ristorante',
        'Tacolicious',
        "The Hog's Apothecary",
        'Tim Ho Wan',
        "Postino's",
        'The Melting Pot',
        "Rubio's",
        'Bonchon ',
        'MOD Pizza',
        'Wingstop ',
        'Tempest',
        'Playland',
        'Raven ',
        'Temple',
        'Hawthorne',
        'The Yellow Submarine',
        'Subway',
        'Umami Burger',
        'Asian Box',
        'Hopscotch',
        'Shogun Japanese Sushi',
        "Shane is Li's bestfriend",
        'Champa Garden',
        'Southern Cafe',
        'Jong Ga House',
        'Sidebar Oaktown',
        'Mua'],
    };
    this.handleClick = this.handleClick.bind(this);
    this.enlargePicture = this.enlargePicture.bind(this);
    this.shrinkPicture = this.shrinkPicture.bind(this);
  }

  getRandomRestaurant() {
    const restuarant = this.state.restaurants[Math.floor(Math.random() * (100))];
    console.log(restuarant);
    return restuarant;
  }

  handleClick(e) {
    e.preventDefault();
    console.log('handleClick', e);
  }

  enlargePicture(e) {
    e.preventDefault();
    $('#img2').removeClass('selected');
    $('#img2').addClass('default');
    $(e.target).addClass('selected');
  }

  shrinkPicture(e) {
    e.preventDefault();
    $('#img2').addClass('selected');
    $('#img2').removeClass('default');
    $('#img3').removeClass('selected');
    $('#img3').addClass('default');
    $('#img1').removeClass('selected');
    $('#img1').addClass('default');
  }

  render() {
    // $.get(`http://localhost:3005/biz/${this.getRandomRestaurant()}`, (data) => {
    $.get('http://localhost:3005/biz/Ippudo', (data) => {
      data.forEach((element, index) => {
        $(`#img${index + 1}`).attr('src', element.url);
      });
    }).fail(() => {
      console.log('error');
    });

    return (
      <div id="top">
        <div id="map">
        Map Box
        </div>
        <div id="photo-gallery">
          <div id="photo1">
            <img
              id="img1"
              className="default photo"
              onClick={this.handleClick}
              onMouseEnter={this.enlargePicture}
              onMouseLeave={this.shrinkPicture}
              src=""
              alt="Could be portrait or landscape"
            />
          </div>
          <div id="photo2">
            <img
              id="img2"
              className="selected photo"
              onClick={this.handleClick}
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
              onClick={this.handleClick}
              onMouseEnter={this.enlargePicture}
              onMouseLeave={this.shrinkPicture}
              src=""
              alt="Could be portrait or landscape" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PhotoGallery;
