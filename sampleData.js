var files = `1.jpg	16.jpeg	22.jpg	29.jpg	35.jpg	41.jpg	49.jpg	55.jpg	61.jpg	68.jpg	74.jpg	80.jpg	10.jpg	17.jpg	23.jpg	3.jpg	36.jpg	42.jpg	5.jpg	56.jpg	62.jpg	69.jpg	75.jpg	81.png	11.jpg	18.jpg	24.jpg	30.jpg	37.jpg	43.jpg	50.jpg	57.jpg	63.jpg	7.jpg	76.jpg	9.jpg	12.jpg	19.jpg	25.jpg	31.jpg	38.jpg	45.jpg	51.jpg	58.jpg	64.jpg	70.jpg	77.jpg	13.jpg	2.jpg	26.jpg	32.jpg	39.jpg	46.jpg	52.jpg	59.jpg	65.jpg	71.jpg	78.jpg	14.jpg	20.jpg	27.jpg	33.jpg	4.jpg	47.jpg	53.jpg	6.jpg	66.jpg	72.jpg	79.jpg	15.jpeg	21.jpg	28.jpg	34.jpg	40.jpg	48.jpg	54.jpg	60.jpg	67.jpg	73.jpg	8.jpg`.split('	');
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
`Mua`];

var createRestaurantInsert = (restaurants) => {
	var insertStatement = '';
	for (let i = 0; i < restaurants.length; i++) {
		insertStatement += `INSERT INTO restaurants (name) VALUES ("${restaurants[i]}");\n`;
	}
	return insertStatement;
};

var createPictureInsert = (pictures) => {
	var url = 'https://s3.ap-northeast-2.amazonaws.com/pleyland/';
	var insertStatement = '';
	var helpful;
	var notHelpful;
	for (let i = 1; i < pictures.length + 1; i++) {
		for (let j = 0; j < 3; j++) {
			var randPictureIndex = Math.floor(Math.random() * (pictures.length - 1));
			helpful = Math.floor(Math.random() * (15));
			notHelpful = Math.floor(Math.random() * (15));
			insertStatement += `INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("${url}${pictures[randPictureIndex]}", ${helpful}, ${notHelpful}, ${i});\n`;
		}
	}
	return insertStatement;
};

createRestaurantInsert(restaurants);

createPictureInsert(files);

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
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 11, 14, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 4, 11, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 9, 4, 1);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 0, 12, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 1, 4, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 5, 4, 2);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/38.jpg", 3, 10, 3);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/43.jpg", 6, 9, 3);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 1, 7, 3);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/3.jpg", 2, 4, 4);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 4, 12, 4);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 6, 7, 4);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 12, 2, 5);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/80.jpg", 13, 12, 5);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 8, 3, 5);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 10, 14, 6);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/9.jpg", 10, 1, 6);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 8, 11, 6);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 0, 12, 7);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/66.jpg", 0, 7, 7);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 14, 3, 7);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 8, 2, 8);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 5, 4, 8);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 8, 0, 8);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 12, 12, 9);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/48.jpg", 12, 13, 9);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 13, 2, 9);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 7, 3, 10);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/65.jpg", 0, 2, 10);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/81.png", 14, 6, 10);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/80.jpg", 13, 6, 11);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 6, 11, 11);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/60.jpg", 8, 14, 11);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 12, 11, 12);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 6, 9, 12);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 6, 12, 12);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 12, 10, 13);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/32.jpg", 7, 7, 13);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 1, 11, 13);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 0, 11, 14);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 8, 3, 14);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 12, 1, 14);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 12, 8, 15);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 2, 4, 15);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/7.jpg", 9, 14, 15);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 6, 8, 16);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 2, 1, 16);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 8, 2, 16);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 7, 4, 17);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/36.jpg", 13, 2, 17);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 10, 8, 17);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 9, 11, 18);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 0, 4, 18);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 3, 8, 18);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 14, 1, 19);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/9.jpg", 2, 1, 19);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 13, 9, 19);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 2, 4, 20);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 0, 0, 20);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 13, 3, 20);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 6, 5, 21);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/17.jpg", 4, 0, 21);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/21.jpg", 14, 8, 21);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 6, 13, 22);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/46.jpg", 6, 4, 22);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/63.jpg", 13, 10, 22);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/28.jpg", 9, 9, 23);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 4, 1, 23);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 13, 8, 23);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 10, 7, 24);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/1.jpg", 1, 7, 24);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 1, 14, 24);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 0, 4, 25);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/49.jpg", 5, 14, 25);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 11, 7, 25);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 5, 10, 26);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/14.jpg", 6, 7, 26);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/21.jpg", 7, 9, 26);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/28.jpg", 10, 0, 27);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 10, 8, 27);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 4, 13, 27);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/35.jpg", 11, 9, 28);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/50.jpg", 7, 5, 28);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/71.jpg", 3, 2, 28);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 13, 6, 29);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 14, 7, 29);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/2.jpg", 6, 9, 29);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 6, 7, 30);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 14, 11, 30);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 3, 5, 30);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/9.jpg", 13, 13, 31);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/72.jpg", 14, 8, 31);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 14, 2, 31);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 2, 0, 32);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/72.jpg", 3, 2, 32);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 4, 11, 32);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 1, 13, 33);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 7, 4, 33);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 3, 4, 33);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 1, 2, 34);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 8, 6, 34);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 2, 7, 34);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 0, 12, 35);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 6, 4, 35);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 3, 11, 35);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 5, 14, 36);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/47.jpg", 14, 8, 36);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 8, 5, 36);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/80.jpg", 4, 13, 37);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 1, 10, 37);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 2, 13, 37);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/79.jpg", 2, 0, 38);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 5, 5, 38);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/60.jpg", 8, 3, 38);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 11, 6, 39);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 1, 2, 39);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/35.jpg", 13, 9, 39);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 4, 2, 40);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 11, 7, 40);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 7, 5, 40);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/57.jpg", 5, 4, 41);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 13, 3, 41);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 5, 2, 41);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 12, 8, 42);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 8, 3, 42);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/19.jpg", 9, 5, 42);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 2, 14, 43);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/61.jpg", 11, 13, 43);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/73.jpg", 3, 14, 43);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 10, 4, 44);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 1, 9, 44);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 0, 7, 44);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 9, 0, 45);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 8, 12, 45);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/78.jpg", 14, 10, 45);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 9, 2, 46);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/43.jpg", 2, 2, 46);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 14, 5, 46);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 10, 14, 47);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/50.jpg", 11, 6, 47);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 14, 10, 47);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 2, 13, 48);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 7, 7, 48);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 7, 11, 48);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 9, 9, 49);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/66.jpg", 9, 11, 49);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/51.jpg", 8, 10, 49);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 13, 14, 50);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 11, 5, 50);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/49.jpg", 13, 1, 50);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 8, 1, 51);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 2, 0, 51);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 14, 10, 51);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 10, 2, 52);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 5, 6, 52);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 14, 10, 52);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 1, 0, 53);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 9, 9, 53);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 9, 4, 53);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 3, 12, 54);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/53.jpg", 5, 7, 54);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 5, 11, 54);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 0, 5, 55);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 1, 12, 55);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 14, 12, 55);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/56.jpg", 12, 4, 56);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 8, 8, 56);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/28.jpg", 13, 6, 56);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 3, 3, 57);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/22.jpg", 10, 11, 57);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 7, 9, 57);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/64.jpg", 5, 7, 58);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/61.jpg", 11, 14, 58);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/72.jpg", 3, 6, 58);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 9, 4, 59);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/77.jpg", 10, 12, 59);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 4, 4, 59);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/9.jpg", 10, 4, 60);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/58.jpg", 0, 6, 60);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 7, 5, 60);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 12, 10, 61);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 14, 8, 61);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/40.jpg", 9, 4, 61);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 14, 3, 62);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/39.jpg", 14, 14, 62);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 12, 2, 62);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/67.jpg", 11, 4, 63);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 5, 14, 63);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 13, 2, 63);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/37.jpg", 12, 14, 64);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 9, 14, 64);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 14, 11, 64);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 8, 11, 65);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/13.jpg", 14, 1, 65);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/45.jpg", 2, 4, 65);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/66.jpg", 0, 5, 66);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/54.jpg", 2, 8, 66);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/36.jpg", 4, 9, 66);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/61.jpg", 0, 11, 67);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 8, 11, 67);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/49.jpg", 8, 7, 67);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/6.jpg", 8, 6, 68);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/11.jpg", 1, 4, 68);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 12, 10, 68);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 11, 11, 69);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/70.jpg", 12, 7, 69);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 4, 3, 69);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 6, 11, 70);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/69.jpg", 13, 11, 70);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/15.jpeg", 2, 13, 70);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/26.jpg", 9, 3, 71);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/30.jpg", 9, 6, 71);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/66.jpg", 6, 2, 71);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/25.jpg", 1, 3, 72);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/33.jpg", 11, 0, 72);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/20.jpg", 5, 5, 72);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/81.png", 7, 13, 73);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/62.jpg", 13, 2, 73);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/10.jpg", 9, 6, 73);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/72.jpg", 9, 3, 74);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/5.jpg", 3, 1, 74);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/61.jpg", 6, 5, 74);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/55.jpg", 3, 3, 75);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/24.jpg", 0, 5, 75);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/4.jpg", 11, 2, 75);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/34.jpg", 14, 8, 76);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/51.jpg", 0, 13, 76);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/41.jpg", 0, 3, 76);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/23.jpg", 7, 1, 77);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/30.jpg", 8, 1, 77);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/68.jpg", 9, 8, 77);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/81.png", 10, 2, 78);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/16.jpeg", 0, 9, 78);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/75.jpg", 3, 1, 78);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/29.jpg", 8, 11, 79);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/27.jpg", 1, 8, 79);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/59.jpg", 8, 9, 79);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/76.jpg", 2, 10, 80);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/12.jpg", 2, 11, 80);
INSERT INTO pictures (url, helpful, not_helpful, restaurant_id) VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/52.jpg", 1, 1, 80);
*/

