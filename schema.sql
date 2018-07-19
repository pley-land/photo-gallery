DROP DATABASE IF EXISTS pley;

CREATE DATABASE pley;

USE pley;


CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	username varchar(100) NOT NULL,
	profile_picture varchar(100),
	location varchar(50),  
	PRIMARY KEY(id)
);

CREATE TABLE restaurants (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	website varchar(100),
	phone varchar(20),
	tags varchar(50),
	price varchar(5),
	address_line1 varchar(60),
	address_line2 varchar(60),
	zip varchar(15),
	city varchar(50),
	state varchar(2),
	average_rating DECIMAL(2,1),
	PRIMARY KEY (id)
);

CREATE TABLE pictures (
	id int NOT NULL AUTO_INCREMENT,
	url varchar(200) NOT NULL,
	helpful int NOT NULL,
	not_helpful int NOT NULL,
	restaurant_id int NOT NULL,
	users_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);


INSERT into users (username, profile_picture, location) 
VALUES ("Enji Kim", "https://s3.ap-northeast-2.amazonaws.com/pleyland/blank-profile-picture-973460_640-300x300.png", "Oakland");

INSERT into restaurants (name, website, phone, tags, price, address_line1, address_line2, zip, city, state, average_rating) 
VALUES ("Gogi Time", 'http://gogitime.com/', '(510) 834-5757', 'Korean, AYCE', '$$', '2600 Telegraph Ave', NULL, '94612', 'Oakland', 'CA', 4.4);

INSERT into pictures (url, helpful, not_helpful, restaurant_id, users_id)
VALUES ("https://s3.ap-northeast-2.amazonaws.com/pleyland/Both.png", 0, 0, 1, 1);