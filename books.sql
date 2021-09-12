CREATE DATABASE greatnovels;

CREATE USER 'love2Read'@'localhost' identified by 'readingrocks!';
GRANT all privileges on greatnovels.* to 'love2Read'@'localhost';
flush privileges;

use greatnovels;

create table authors (
id int auto_increment,
firstName varchar(255),
lastName varchar(255),
updatedAt datetime default NOW() on update now(),
createdAt datetime default now(),
deletedAt datetime,
primary key(id)
);

create table novels (
id int auto_increment,
title varchar(255),
authorId INT,
updatedAt datetime default NOW() on update now(),
createdAt datetime default now(),
deletedAt datetime,
primary key(id),
foreign key (authorId) references authors(id)
);

create table genres (
id int auto_increment,
genre varchar(255),
updatedAt datetime default NOW() on update now(),
createdAt datetime default now(),
deletedAt datetime,
primary key(id)
);

create table novelgenres (
novelId int,
genreId int,
updatedAt datetime default NOW() on update now(),
createdAt datetime default now(),
deletedAt datetime,
primary key(novelId, genreId),
foreign key(novelId) references novels(id),
foreign key(genreId) references genres(id)
);



INSERT INTO authors (firstName, lastName) VALUES ('Bram', 'Stoker'),
('Oscar','Wilde'),
('Alice','Walker'),
('Leo', 'Tolstoy'),
('Charles','Dickens'),
('Arthur','Miller'),
('Alexandre','Dumas'),
('Arthur','Conan Doyle'),
('Robert','Louis Stevenson'),
('Fyodor','Dostoyevsky'),
('Agatha','Christie'),
('Ray','Bradbury'),
('George','Orwell'),
('H.G.','Wells'),
('Chinua', 'Achebe');

insert into novels (title, authorId) values ('Dracula','1'), 
('The Picture of Dorian Gray','2'),
('The Color Purple','3'),
('War and Peace','4'),
('A Tale of Two Cities','5'),
('The Crucible','6'),
('The Three Musketeers','7'),
('The Hound of the Baskervilles','8'),
('The Strange Case of Dr. Jekyll and Mr. Hyde','9'),
('Crime and Punishment','10'),
('Murder on the Orient Express','11'),
('Fahrenheit 451','12'),
('Animal Farm','13'),
('The Time Machine','14'),
('Things Fall Apart','15');

insert into genres (genre) values ('Fiction'),
('Horror'),
('Fantasy'),
('Gothic'),
('Historical Fiction'),
('War'),
('Russian Literature'),
('Drama'),
('Plays'),
('Adventure'),
('French Literature'),
('Mystery'),
('Crime'),
('Thriller'),
('Science Fiction'),
('Dystopia'),
('Time Travel'),
('African Liteature');

insert into novelgenres (novelId, genreId) values 
(1,1), (1,2), (1,3),
(2,1), (2,2), (2,4), (2,3),
(3,1),(3,5),
(4, 1),(4,5), (4,6), (4,7),
(5,1),(5,5),
(6,1),(6,5),(6,8),(6,9),
(7,1),(7,5),(7,10),(7,11),
(8,1),(8,12),(8,13),(8,14),
(9,1),(9,12),(9,15),(9,2),
(10, 1),(10,7),(10,12),
(11, 1),(11, 12),
(12, 1),(12,15),(12,16),
(13,1),(13,15),(13,16),
(14, 1),(14,15),(14,17),
(15, 1),(15,5),(15,18);


select * from novels;
select * from novelgenres;
select * from genres;
select * from authors


