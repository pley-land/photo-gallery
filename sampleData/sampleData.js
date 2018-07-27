var files = `1.jpg  16.jpeg 22.jpg  29.jpg  35.jpg  41.jpg  49.jpg  55.jpg  61.jpg  68.jpg  74.jpg  80.jpg  10.jpg  17.jpg  23.jpg  3.jpg 36.jpg  42.jpg  5.jpg 56.jpg  62.jpg  69.jpg  75.jpg  81.png  11.jpg  18.jpg  24.jpg  30.jpg  37.jpg  43.jpg  50.jpg  57.jpg  63.jpg  7.jpg 76.jpg  9.jpg 12.jpg  19.jpg  25.jpg  31.jpg  38.jpg  45.jpg  51.jpg  58.jpg  64.jpg  70.jpg  77.jpg  13.jpg  2.jpg 26.jpg  32.jpg  39.jpg  46.jpg  52.jpg  59.jpg  65.jpg  71.jpg  78.jpg  14.jpg  20.jpg  27.jpg  33.jpg  4.jpg 47.jpg  53.jpg  6.jpg 66.jpg  72.jpg  79.jpg  15.jpeg 21.jpg  28.jpg  34.jpg  40.jpg  48.jpg  54.jpg  60.jpg  67.jpg  73.jpg  8.jpg`.split('  ');
var restaurants = [`Gogi Time `,
    `Boba Guys`,
    `Chipotle`,
    `Fork & Spoon`,
    `Halal Guys`,
    `EighTea`,
    `Burger King`,
    `In-n-Out`,
    `Popeyes`,
    `Tu Lan`,
    `KFC`,
    `Chick-fil-a`,
    `Blind Tiger`,
    `Wendy's`,
    `A&W`,
    `Rooster & Rice`,
    `Shakewell`,
    `Flipside`,
    `Urban Tavern`,
    `707 Sutter`,
    `Momofuku`,
    `Roaring Fork `,
    `Ippudo`,
    `The Melt`,
    `BunMee`,
    `Pei Wei `,
    `The Cavalier`,
    `Dirty Habit`,
    `Lin Jia Asian Kitchen`,
    `Colonial Donuts`,
    `Oakland Kosher Foods`,
    `Rolling Dunes`,
    `Grand Lake Kitchen`,
    `Soba Ichi`,
    `Proposition Chicken`,
    `Qi Dumpling Lounge`,
    `Warren's Webpack Bananza`,
    `Arizmendi Bakery`,
    `The Star on Grand`,
    `Holy Land Restuarant`,
    `Cheese Steak Shop`,
    `Anson's Handsome Hamburgers`,
    `Belcampo Restuarant & Butcher Shop`,
    `Daily Grill`,
    `Morton's The Steakhouse`,
    `The Mark `,
    `California Pizza Kitchen`,
    `Ikaros Greek Restuarant`,
    `Modigliani Cafe`,
    `JJ Burger`,
    `Sliver`,
    `Lakeshore Cafe`,
    `Belly`,
    `Lovely's`,
    `Mua`,
    `Flavor of India`,
    `Dosirak Shop`,
    `Super Duper Burgers`,
    `Hancook`,
    `Chan's Kitchen`,
    `Steven's Slow Today Deli `,
    `Aisle 5`,
    `CANA Cuban Parlor & Cafe`,
    `Homeroom`,
    `Justin's Koolaid Bar`,
    `CHICA Oakland`,
    `Penrose`,
    `Mockingbird`,
    `Wally's Cafe`,
    `Orchid Pavillion Cafe`,
    `Fogo de Chao`,
    `The Grove`,
    `Michael's Romantic Bulgogi Beef`,
    `Belotti Ristorante`,
    `Tacolicious`,
    `The Hog's Apothecary`,
    `Tim Ho Wan`,
    `Postino's `,
    `The Melting Pot`,
    `Rubio's`,
    `Bonchon `,
    `MOD Pizza`,
    `Wingstop `,
    `Tempest`,
    `Playland`,
    `Raven `,
    `Temple`,
    `Hawthorne`,
    `The Yellow Submarine`,
    `Subway`,
    `Umami Burger`,
    `Asian Box`,
    `Hopscotch`,
    `Shogun Japanese Sushi`,
    `Shane is Li's bestfriend`,
    `Champa Garden`,
    `Southern Cafe`,
    `Jong Ga House`,
    `Sidebar Oaktown`,
    `Mua`
];

const createRestaurantInsert = (restaurants) => {
  let insertStatement = '';
  for (let i = 0; i < restaurants.length; i += 1) {
    insertStatement += `INSERT INTO restaurants (name) VALUES ("${restaurants[i]}");\n`;
  }
  return insertStatement;
};

const createPictureInsert = (pictures, restaurants) => {
  const url = 'https://s3.ap-northeast-2.amazonaws.com/pleyland/';
  let insertStatement = '';
  let helpful;
  let notHelpful;
  for (let i = 1; i < restaurants.length + 1; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      const randPictureIndex = Math.floor(Math.random() * (pictures.length - 1));
      helpful = Math.floor(Math.random() * (15));
      notHelpful = Math.floor(Math.random() * (15));
      insertStatement += `INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("${url}${pictures[randPictureIndex]}", ${helpful}, ${notHelpful}, ${i});\n`;
    }
  }
  return insertStatement;
};

createRestaurantInsert(restaurants);

createPictureInsert(files, restaurants);

module.exports = {
  createRestaurantInsert,
  createPictureInsert,
};

// Restaurants
/*
INSERT INTO restaurants (name) VALUES ("Gogi Time ");
INSERT INTO restaurants (name) VALUES ("Boba Guys");
INSERT INTO restaurants (name) VALUES ("Chipotle");
INSERT INTO restaurants (name) VALUES ("Fork & Spoon");
INSERT INTO restaurants (name) VALUES ("Halal Guys");
INSERT INTO restaurants (name) VALUES ("EighTea");
INSERT INTO restaurants (name) VALUES ("Burger King");
INSERT INTO restaurants (name) VALUES ("In-n-Out");
INSERT INTO restaurants (name) VALUES ("Popeyes");
INSERT INTO restaurants (name) VALUES ("Tu Lan");
INSERT INTO restaurants (name) VALUES ("KFC");
INSERT INTO restaurants (name) VALUES ("Chick-fil-a");
INSERT INTO restaurants (name) VALUES ("Blind Tiger");
INSERT INTO restaurants (name) VALUES ("Wendy's");
INSERT INTO restaurants (name) VALUES ("A&W");
INSERT INTO restaurants (name) VALUES ("Rooster & Rice");
INSERT INTO restaurants (name) VALUES ("Shakewell");
INSERT INTO restaurants (name) VALUES ("Flipside");
INSERT INTO restaurants (name) VALUES ("Urban Tavern");
INSERT INTO restaurants (name) VALUES ("707 Sutter");
INSERT INTO restaurants (name) VALUES ("Momofuku");
INSERT INTO restaurants (name) VALUES ("Roaring Fork ");
INSERT INTO restaurants (name) VALUES ("Ippudo");
INSERT INTO restaurants (name) VALUES ("The Melt");
INSERT INTO restaurants (name) VALUES ("BunMee");
INSERT INTO restaurants (name) VALUES ("Pei Wei ");
INSERT INTO restaurants (name) VALUES ("The Cavalier");
INSERT INTO restaurants (name) VALUES ("Dirty Habit");
INSERT INTO restaurants (name) VALUES ("Lin Jia Asian Kitchen");
INSERT INTO restaurants (name) VALUES ("Colonial Donuts");
INSERT INTO restaurants (name) VALUES ("Oakland Kosher Foods");
INSERT INTO restaurants (name) VALUES ("Rolling Dunes");
INSERT INTO restaurants (name) VALUES ("Grand Lake Kitchen");
INSERT INTO restaurants (name) VALUES ("Soba Ichi");
INSERT INTO restaurants (name) VALUES ("Proposition Chicken");
INSERT INTO restaurants (name) VALUES ("Qi Dumpling Lounge");
INSERT INTO restaurants (name) VALUES ("Warren's Webpack Bananza");
INSERT INTO restaurants (name) VALUES ("Arizmendi Bakery");
INSERT INTO restaurants (name) VALUES ("The Star on Grand");
INSERT INTO restaurants (name) VALUES ("Holy Land Restuarant");
INSERT INTO restaurants (name) VALUES ("Cheese Steak Shop");
INSERT INTO restaurants (name) VALUES ("Anson's Handsome Hamburgers");
INSERT INTO restaurants (name) VALUES ("Belcampo Restuarant & Butcher Shop");
INSERT INTO restaurants (name) VALUES ("Daily Grill");
INSERT INTO restaurants (name) VALUES ("Morton's The Steakhouse");
INSERT INTO restaurants (name) VALUES ("The Mark ");
INSERT INTO restaurants (name) VALUES ("California Pizza Kitchen");
INSERT INTO restaurants (name) VALUES ("Ikaros Greek Restuarant");
INSERT INTO restaurants (name) VALUES ("Modigliani Cafe");
INSERT INTO restaurants (name) VALUES ("JJ Burger");
INSERT INTO restaurants (name) VALUES ("Sliver");
INSERT INTO restaurants (name) VALUES ("Lakeshore Cafe");
INSERT INTO restaurants (name) VALUES ("Belly");
INSERT INTO restaurants (name) VALUES ("Lovely's");
INSERT INTO restaurants (name) VALUES ("Mua");
INSERT INTO restaurants (name) VALUES ("Flavor of India");
INSERT INTO restaurants (name) VALUES ("Dosirak Shop");
INSERT INTO restaurants (name) VALUES ("Super Duper Burgers");
INSERT INTO restaurants (name) VALUES ("Hancook");
INSERT INTO restaurants (name) VALUES ("Chan's Kitchen");
INSERT INTO restaurants (name) VALUES ("Steven's Slow Today Deli ");
INSERT INTO restaurants (name) VALUES ("Aisle 5");
INSERT INTO restaurants (name) VALUES ("CANA Cuban Parlor & Cafe");
INSERT INTO restaurants (name) VALUES ("Homeroom");
INSERT INTO restaurants (name) VALUES ("Justin's Koolaid Bar");
INSERT INTO restaurants (name) VALUES ("CHICA Oakland");
INSERT INTO restaurants (name) VALUES ("Penrose");
INSERT INTO restaurants (name) VALUES ("Mockingbird");
INSERT INTO restaurants (name) VALUES ("Wally's Cafe");
INSERT INTO restaurants (name) VALUES ("Orchid Pavillion Cafe");
INSERT INTO restaurants (name) VALUES ("Fogo de Chao");
INSERT INTO restaurants (name) VALUES ("The Grove");
INSERT INTO restaurants (name) VALUES ("Michael's Romantic Bulgogi Beef");
INSERT INTO restaurants (name) VALUES ("Belotti Ristorante");
INSERT INTO restaurants (name) VALUES ("Tacolicious");
INSERT INTO restaurants (name) VALUES ("The Hog's Apothecary");
INSERT INTO restaurants (name) VALUES ("Tim Ho Wan");
INSERT INTO restaurants (name) VALUES ("Postino's ");
INSERT INTO restaurants (name) VALUES ("The Melting Pot");
INSERT INTO restaurants (name) VALUES ("Rubio's");
INSERT INTO restaurants (name) VALUES ("Bonchon ");
INSERT INTO restaurants (name) VALUES ("MOD Pizza");
INSERT INTO restaurants (name) VALUES ("Wingstop ");
INSERT INTO restaurants (name) VALUES ("Tempest");
INSERT INTO restaurants (name) VALUES ("Playland");
INSERT INTO restaurants (name) VALUES ("Raven ");
INSERT INTO restaurants (name) VALUES ("Temple");
INSERT INTO restaurants (name) VALUES ("Hawthorne");
INSERT INTO restaurants (name) VALUES ("The Yellow Submarine");
INSERT INTO restaurants (name) VALUES ("Subway");
INSERT INTO restaurants (name) VALUES ("Umami Burger");
INSERT INTO restaurants (name) VALUES ("Asian Box");
INSERT INTO restaurants (name) VALUES ("Hopscotch");
INSERT INTO restaurants (name) VALUES ("Shogun Japanese Sushi");
INSERT INTO restaurants (name) VALUES ("Shane is Li's bestfriend");
INSERT INTO restaurants (name) VALUES ("Champa Garden");
INSERT INTO restaurants (name) VALUES ("Southern Cafe");
INSERT INTO restaurants (name) VALUES ("Jong Ga House");
INSERT INTO restaurants (name) VALUES ("Sidebar Oaktown");
INSERT INTO restaurants (name) VALUES ("Mua");
*/

// Pictures
/*
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/19.jpg", 3, 3, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 9, 9, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/50.jpg", 6, 2, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 7, 7, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/18.jpg", 9, 4, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/32.jpg", 3, 3, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 13, 11, 3);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/51.jpg", 4, 13, 3);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 2, 3, 3);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/17.jpg", 5, 14, 4);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/1.jpg", 5, 1, 4);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 14, 2, 4);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 1, 13, 5);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/19.jpg", 4, 9, 5);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/65.jpg", 4, 6, 5);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 11, 11, 6);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/21.jpg", 9, 13, 6);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 2, 7, 6);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 11, 3, 7);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 8, 2, 7);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 4, 0, 7);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/42.jpg", 13, 12, 8);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 3, 5, 8);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 1, 12, 8);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/35.jpg", 13, 10, 9);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/65.jpg", 1, 11, 9);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/60.jpg", 4, 0, 9);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 6, 0, 10);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/9.jpg", 10, 6, 10);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 13, 4, 10);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 10, 13, 11);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 9, 0, 11);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/31.jpg", 2, 4, 11);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 5, 4, 12);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 2, 5, 12);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 10, 5, 12);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 3, 14, 13);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/43.jpg", 5, 1, 13);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/43.jpg", 11, 11, 13);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 3, 0, 14);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 1, 13, 14);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 2, 12, 14);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/18.jpg", 12, 12, 15);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 6, 13, 15);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 3, 12, 15);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/65.jpg", 8, 10, 16);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 2, 4, 16);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 6, 13, 16);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/72.jpg", 10, 1, 17);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 5, 10, 17);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 8, 8, 17);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 12, 5, 18);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 13, 2, 18);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/66.jpg", 4, 12, 18);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 14, 13, 19);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/21.jpg", 3, 4, 19);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 6, 4, 19);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/16.jpeg", 12, 9, 20);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 12, 4, 20);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/81.png", 5, 10, 20);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 11, 4, 21);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 4, 6, 21);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/2.jpg", 14, 12, 21);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 10, 4, 22);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/63.jpg", 4, 1, 22);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 9, 3, 22);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 6, 12, 23);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 12, 12, 23);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/36.jpg", 13, 0, 23);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 5, 11, 24);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/18.jpg", 0, 6, 24);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 11, 8, 24);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 11, 8, 25);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/7.jpg", 3, 6, 25);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 14, 12, 25);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 12, 10, 26);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 5, 1, 26);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 0, 7, 26);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/51.jpg", 2, 4, 27);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/19.jpg", 2, 5, 27);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 12, 6, 27);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 9, 9, 28);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 14, 0, 28);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 1, 13, 28);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 9, 4, 29);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 5, 5, 29);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 5, 6, 29);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 2, 9, 30);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/42.jpg", 13, 8, 30);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 6, 5, 30);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 4, 13, 31);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 8, 11, 31);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 11, 0, 31);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 5, 0, 32);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 1, 11, 32);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 5, 3, 32);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 2, 4, 33);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 6, 3, 33);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 14, 9, 33);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/46.jpg", 12, 9, 34);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/30.jpg", 12, 7, 34);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/21.jpg", 0, 10, 34);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 12, 7, 35);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/18.jpg", 12, 1, 35);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 13, 9, 35);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/14.jpg", 1, 9, 36);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 13, 13, 36);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 9, 12, 36);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/63.jpg", 14, 1, 37);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/38.jpg", 8, 14, 37);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/48.jpg", 5, 11, 37);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 5, 9, 38);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/49.jpg", 13, 9, 38);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 11, 10, 38);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 9, 14, 39);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 0, 5, 39);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 11, 6, 39);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/13.jpg", 14, 11, 40);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 7, 8, 40);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 8, 12, 40);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 9, 11, 41);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 4, 5, 41);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 8, 7, 41);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 10, 11, 42);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 0, 12, 42);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 7, 2, 42);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 0, 2, 43);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 5, 4, 43);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/16.jpeg", 2, 5, 43);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 14, 3, 44);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 3, 9, 44);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 1, 6, 44);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 12, 8, 45);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/42.jpg", 7, 4, 45);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 6, 6, 45);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 2, 10, 46);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/7.jpg", 6, 13, 46);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 11, 13, 46);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 0, 2, 47);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 14, 6, 47);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 0, 1, 47);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/2.jpg", 9, 4, 48);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/51.jpg", 6, 9, 48);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 7, 2, 48);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 2, 13, 49);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 8, 4, 49);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 2, 3, 49);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 7, 8, 50);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 0, 13, 50);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 2, 14, 50);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 8, 13, 51);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 11, 12, 51);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 6, 3, 51);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/31.jpg", 7, 6, 52);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 11, 2, 52);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/28.jpg", 6, 3, 52);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 4, 11, 53);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 3, 1, 53);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/1.jpg", 14, 8, 53);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 1, 10, 54);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/7.jpg", 6, 1, 54);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 14, 13, 54);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 11, 4, 55);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 3, 14, 55);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/30.jpg", 13, 6, 55);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 13, 12, 56);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 9, 0, 56);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/61.jpg", 14, 4, 56);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 9, 3, 57);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 13, 12, 57);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 3, 3, 57);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 1, 10, 58);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 9, 3, 58);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 5, 12, 58);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 1, 12, 59);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/16.jpeg", 5, 14, 59);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 13, 7, 59);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 9, 5, 60);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 7, 8, 60);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 8, 2, 60);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/35.jpg", 5, 3, 61);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/31.jpg", 0, 5, 61);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 6, 9, 61);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 4, 11, 62);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 7, 11, 62);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 12, 5, 62);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/16.jpeg", 11, 0, 63);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 0, 13, 63);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 1, 7, 63);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 14, 0, 64);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 11, 5, 64);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 11, 11, 64);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 11, 11, 65);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/38.jpg", 11, 14, 65);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/63.jpg", 10, 1, 65);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 10, 11, 66);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 0, 10, 66);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 0, 14, 66);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 12, 2, 67);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/63.jpg", 0, 11, 67);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 5, 11, 67);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 5, 7, 68);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 2, 11, 68);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 8, 14, 68);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 6, 8, 69);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 9, 3, 69);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 14, 14, 69);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/48.jpg", 10, 13, 70);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/32.jpg", 6, 11, 70);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/35.jpg", 9, 12, 70);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 9, 6, 71);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 7, 3, 71);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/1.jpg", 0, 10, 71);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 5, 2, 72);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 13, 7, 72);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 9, 10, 72);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 11, 9, 73);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 3, 2, 73);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/61.jpg", 11, 0, 73);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 11, 14, 74);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/36.jpg", 14, 1, 74);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 11, 0, 74);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/60.jpg", 14, 4, 75);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 4, 4, 75);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/80.jpg", 9, 11, 75);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/80.jpg", 0, 11, 76);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 9, 6, 76);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 1, 0, 76);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 10, 6, 77);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 0, 7, 77);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 5, 0, 77);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 2, 13, 78);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 12, 9, 78);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 8, 1, 78);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 3, 7, 79);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 13, 3, 79);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/36.jpg", 2, 9, 79);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 6, 5, 80);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 12, 13, 80);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 7, 5, 80);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/18.jpg", 4, 4, 81);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 12, 10, 81);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 1, 9, 81);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 14, 6, 82);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/43.jpg", 3, 6, 82);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 13, 2, 82);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/63.jpg", 9, 3, 83);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 1, 3, 83);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 9, 8, 83);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 8, 4, 84);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/66.jpg", 2, 2, 84);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/13.jpg", 10, 5, 84);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 10, 9, 85);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 13, 6, 85);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 7, 9, 85);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 9, 1, 86);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/50.jpg", 6, 13, 86);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/7.jpg", 9, 3, 86);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/32.jpg", 11, 3, 87);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/60.jpg", 1, 10, 87);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/65.jpg", 4, 9, 87);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 7, 10, 88);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/14.jpg", 11, 4, 88);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/3.jpg", 3, 9, 88);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 12, 14, 89);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 9, 5, 89);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 14, 13, 89);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/35.jpg", 14, 7, 90);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 4, 14, 90);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 10, 4, 90);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 3, 14, 91);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 14, 4, 91);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 10, 10, 91);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/9.jpg", 14, 13, 92);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 12, 1, 92);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/80.jpg", 9, 6, 92);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 7, 9, 93);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 14, 11, 93);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 0, 2, 93);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 2, 5, 94);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 10, 10, 94);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/43.jpg", 10, 11, 94);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 9, 5, 95);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/18.jpg", 2, 14, 95);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/48.jpg", 10, 2, 95);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/65.jpg", 6, 9, 96);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 13, 0, 96);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 5, 6, 96);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 7, 14, 97);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 11, 7, 97);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 2, 7, 97);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 0, 2, 98);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 12, 0, 98);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 9, 6, 98);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 5, 5, 99);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/48.jpg", 4, 7, 99);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 12, 11, 99);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 4, 10, 100);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 8, 13, 100);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 14, 14, 100);
*/
