CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id)
);