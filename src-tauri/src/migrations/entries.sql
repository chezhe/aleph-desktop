CREATE TABLE entries (
  id TEXT PRIMARY KEY NOT NULL,
  link TEXT,
  title TEXT,
  description TEXT,
  entryType INTEGER,
  media TEXT,
  cover TEXT,
  feedUrl TEXT,
  read INTEGER,
  bookmarked INTEGER,
  tags TEXT,
  published INTEGER
);