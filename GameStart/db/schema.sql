<<<<<<< HEAD
\c postgres;


DROP DATABASE IF EXISTS gamestart;
CREATE DATABASE gamestart;

\c gamestart;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  username varchar(14) NOT NULL,
  password varchar(14) NOT NULL,
  games TEXT[],
  consoles TEXT[],
  address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE type current_status as enum ('pending', 'accepted', 'rejected');

CREATE TABLE trades (
  id SERIAL PRIMARY KEY NOT NULL,
  gameRecieve TEXT[],
  gameSend TEXT[],
  userRecieve varchar(14) NOT NULL,
  userSend varchar(14),
  trade_status current_status
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  body TEXT,
  username varchar(14),
  conversationID INT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY NOT NULL,
  messagesID INT[]
);
=======
\c postgres;


DROP DATABASE IF EXISTS gamestart;
CREATE DATABASE gamestart;

\c gamestart;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  username varchar(14) NOT NULL,
  password varchar(14) NOT NULL,
  games TEXT[],
  consoles TEXT[],
  address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE type current_status as enum ('pending', 'accepted', 'rejected');

CREATE TABLE trades (
  id SERIAL PRIMARY KEY NOT NULL,
  gameRecieve TEXT[],
  gameSend TEXT[],
  userRecieve varchar(14) NOT NULL,
  userSend varchar(14),
  trade_status current_status
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  body TEXT,
  username varchar(14),
  conversationID INT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY NOT NULL,
  messagesID INT[]
);
>>>>>>> 740d3eba25fe2541ce94445fd57770987618faa7
