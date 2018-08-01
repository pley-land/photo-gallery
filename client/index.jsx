import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './components/photogallery';

const restName = location.pathname.slice(5, location.pathname.length - 1);
ReactDOM.render(<PhotoGallery restaurantid={restName}/>, document.getElementById('gallery'));
