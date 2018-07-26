import React from 'react';

const PhotoGallery = () => (
  <div id="top">
    <div id="map">
    Map Box
    </div>
    <div id="photo-gallery">
      <div id="photo1">
        <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1519844002%2Ffast-food-mobile-apps-chick-fil-a-FT-BLOG0218.jpg%3Fitok%3D7d_gu0JA&w=700&q=85" alt="Could be portrait or landscape" />
      </div>
      <div id="photo2">
        <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817.jpg%3Fitok%3Dig79fdSU&w=700&q=85" alt="Could be portrait or landscape" />
      </div>
      <div id="photo3">
        <span className="centered">
        See All Photos
        </span>
        <img src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" alt="Could be portrait or landscape" />
      </div>
    </div>
  </div>
);

module.exports = PhotoGallery;
