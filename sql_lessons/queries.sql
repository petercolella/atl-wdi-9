--3. Use SQL to manipulate your database! 
	-- Write out the SQL statement to grab all data from one of your tables.

	SELECT * FROM users;

	-- Write out the SQL statement to grab all data from ALL of your tables.
	
	SELECT * FROM users FULL OUTER JOIN videos ON users = videos;

	-- Write out the SQL statement to grab one column EACH from two of your tables.
	
	SELECT users.username, video.video_title FROM users, videos;

	-- Write out the SQL to update all values in one of your tables' columns;
	
	UPDATE videos SET genre = 'Role Play' WHERE genre != 1;

	-- Write out the SQL statement to update a specific value in one of your models.

	UPDATE users SET username = 'Peter Colella' WHERE username = 'pcolella';