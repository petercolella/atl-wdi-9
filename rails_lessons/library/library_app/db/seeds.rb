# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Author.create(name: 'Cao Xueqin',         nationality: 'China', birth_year: 1715);
Author.create(name: 'J.K. Rowling',       nationality: 'United Kingdom', birth_year: 1965);
Author.create(name: 'James Baldwin',      nationality: 'United States of America', birth_year: 1924);
Author.create(name: 'Jorge Luis Borges',  nationality: 'Argentina', birth_year: 1899);
Author.create(name: 'Haruki Murakami',    nationality: 'Japan', birth_year: 1949);
Author.create(name: 'Milan Kundera',      nationality: 'Czechoslovakia', birth_year: 1929);
Author.create(name: 'Albert Camus',       nationality: 'France', birth_year: 1913);
Author.create(name: 'George R.R. Martin', nationality: 'United States of America', birth_year: 1945);

# Cao Xueqin
Book.create(title: 'Dream of the Red Chamber', publication_date: 1750, author_id: 1);

# J.K. Rowling
Book.create(title: 'Harry Potter and the Philosophers Stone', publication_date: 1997, author_id: 2);
Book.create(title: 'Harry Potter and the Chamber of Secrets', publication_date: 1998, author_id: 2);
Book.create(title: 'Harry Potter and the Prisoner of Azkaban', publication_date: 1998, author_id: 2);
Book.create(title: 'Harry Potter and the Goblet of Fire', publication_date: 2000, author_id: 2);
Book.create(title: 'Harry Potter and the Order of the Phoenix', publication_date: 2003, author_id: 2);
Book.create(title: 'Harry Potter and the Half-Blood Prince', publication_date: 2005, author_id: 2);
Book.create(title: 'Harry Potter and the Deathly Hallows', publication_date: 2007, author_id: 2);
Book.create(title: 'The Casual Vacancy', publication_date: 2012, author_id: 2);

# James Baldwin
Book.create(title: 'Go Tell It on the Mountain', publication_date: 1953, author_id: 3);
Book.create(title: 'The Amen Corner', publication_date: 1954, author_id: 3);
Book.create(title: 'Notes of a Native Son', publication_date: 1955, author_id: 3);
Book.create(title: 'Giovannis Room', publication_date: 1956, author_id: 3);
Book.create(title: 'Nobody Knows My Name: More Notes of a Native Son', publication_date: 1961, author_id: 3);
Book.create(title: 'Another Country', publication_date: 1962, author_id: 3);
Book.create(title: 'A Talk to Teachers', publication_date: 1963, author_id: 3);
Book.create(title: 'The Fire Next Time', publication_date: 1963, author_id: 3);
Book.create(title: 'Blues for Mister Charlie', publication_date: 1964, author_id: 3);
Book.create(title: 'Going to Meet the Man', publication_date: 1965, author_id: 3);
Book.create(title: 'Tell Me How Long the Trains Been Gone', publication_date: 1968, author_id: 3);
Book.create(title: 'No Name in the Street', publication_date: 1972, author_id: 3);
Book.create(title: 'If Beale Street Could Talk', publication_date: 1974, author_id: 3);
Book.create(title: 'The Devil Finds Work', publication_date: 1976, author_id: 3);
Book.create(title: 'Just Above My Head', publication_date: 1979, author_id: 3);
Book.create(title: 'Jimmys Blues', publication_date: 1983, author_id: 3);
Book.create(title: 'The Evidence of Things Not Seen', publication_date: 1985, author_id: 3);
Book.create(title: 'The Price of the Ticket', publication_date: 1985, author_id: 3);
Book.create(title: 'The Cross of Redemption: Uncollected Writings', publication_date: 2010, author_id: 3);
Book.create(title: 'Jimmys Blues and Other Poems', publication_date: 2014, author_id: 3);

# Jean Luis Borges
Book.create(title: 'Fervor de Buenos Aires', publication_date: 1923, author_id: 4);
Book.create(title: 'Inquisiciones', publication_date: 1925, author_id: 4);
Book.create(title: 'Luna de Enfrente', publication_date: 1925, author_id: 4);
Book.create(title: 'El idioma de los argentinos', publication_date: 1928, author_id: 4);
Book.create(title: 'Cuaderno San Martín', publication_date: 1929, author_id: 4);
Book.create(title: 'Discusión', publication_date: 1957, author_id: 4);
Book.create(title: 'Historia de la eternidad', publication_date: 1936, author_id: 4);
Book.create(title: 'El jardín de senderos que se bifurcan', publication_date: 1941, author_id: 4);
Book.create(title: 'Seis problemas para don Isidro Parodi', publication_date: 1942, author_id: 4);

# Haruki Murakami
Book.create(title: 'Hear the Wind Sing', publication_date: 1987, author_id: 5);
Book.create(title: 'A Wild Sheep Chase', publication_date: 1989, author_id: 5);
Book.create(title: 'Norwegian Wood', publication_date: 2000, author_id: 5);
Book.create(title: 'Dance Dance Dance', publication_date: 1994, author_id: 5);
Book.create(title: 'South of the Border, West of the Sun', publication_date: 2000, author_id: 5);
Book.create(title: 'The Wind-Up Bird Chronicle', publication_date: 1997, author_id: 5);
Book.create(title: 'Sputnik Sweetheart', publication_date: 2001, author_id: 5);
Book.create(title: 'Kafka on the Shore', publication_date: 2005, author_id: 5);
Book.create(title: 'After Dark', publication_date: 2007, author_id: 5);
Book.create(title: '1Q84', publication_date: 2011, author_id: 5);

# Milan Kundera
Book.create(title: 'The Joke', publication_date: 1967, author_id: 6);
Book.create(title: 'The Farewell Waltz', publication_date: 1972, author_id: 6);
Book.create(title: 'Life Is Elsewhere', publication_date: 1973, author_id: 6);
Book.create(title: 'The Book of Laughter and Forgetting', publication_date: 1978, author_id: 6);
Book.create(title: 'The Unbearable Lightness of Being', publication_date: 1984, author_id: 6);
Book.create(title: 'Immortality', publication_date: 1990, author_id: 6);
Book.create(title: 'Slowness', publication_date: 1995, author_id: 6);
Book.create(title: 'Identity', publication_date: 1998, author_id: 6);
Book.create(title: 'Ignorance', publication_date: 2000, author_id: 6);

# Albert Camus
Book.create(title: 'The Stranger', publication_date: 1942, author_id: 7);
Book.create(title: 'The Plague', publication_date: 1947, author_id: 7);
Book.create(title: 'The Fall', publication_date: 1956, author_id: 7);
Book.create(title: 'A Happy Death', publication_date: 1971, author_id: 7);
Book.create(title: 'The First Man', publication_date: 1995, author_id: 7);

# George RR Martin
Book.create(title: 'A Game of Thrones', publication_date: 1996, author_id: 8);
Book.create(title: 'A Clash of Kings', publication_date: 1998, author_id: 8);
Book.create(title: 'A Storm of Swords', publication_date: 2000, author_id: 8);
Book.create(title: 'A Feast for Crows', publication_date: 2005, author_id: 8);
Book.create(title: 'A Dance with Dragons', publication_date: 2011, author_id: 8);
Book.create(title: 'I Swear the Dragons are Coming Soon', publication_date: 2014, author_id: 8);