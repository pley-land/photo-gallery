const sampleData = require('./sampleData');

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('Generating insert statements for restuarants', () => {
  test('Output is string type', () => {
    expect(typeof sampleData.createRestaurantInsert(['KFC', 'Burger King'])).toBe('string');
  });

  test('Create INSERT statements given array of restaurant strings', () => {
    expect(sampleData.createRestaurantInsert(['KFC', 'Burger King'])).toBe(`INSERT INTO restaurants (name) VALUES ("KFC");
INSERT INTO restaurants (name) VALUES ("Burger King");
`);
  });
});

describe('Generating insert statements for pictures', () => {
  test('Output is string type', () => {
    expect(typeof sampleData.createPictureInsert(['food.jpeg', 'drink.jpeg'], ['KFC', 'Burger King'])).toBe('string');
  });

  test('Create INSERT statements given array of pictures and restaurants', () => {
    expect(sampleData.createPictureInsert(['food.jpeg', 'drink.jpeg'], ['KFC', 'Burger King'])).toBe(`INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/food.jpeg", 7, 7, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/food.jpeg", 7, 7, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/food.jpeg", 7, 7, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/food.jpeg", 7, 7, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/food.jpeg", 7, 7, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/food.jpeg", 7, 7, 2);
`);
  });
});
