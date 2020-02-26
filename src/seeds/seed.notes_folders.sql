INSERT INTO folders (name)
VALUES
  ('one'),
  ('two'),
  ('three');

INSERT INTO notes (name, content, folderid)
VALUES
  ('Cats', 'This is a note about Cats. They have fur. Meow!', '1'),
  ('Dogs', 'This is a note about Dogs. They also have fur. Woof!', '1'),
  ('Birds', 'This is a note about Birds. They fly. Tweet!', '2'),
  ('Bats', 'This is a note about Bats. They also fly. Squeak!', '2'),
  ('Bees', 'This is a note about Bees. They make honey. And sting. Buzz!', '3'),
  ('Platipuses', 'This is a note about Platipuses, they are strange.', '3');