INSERT INTO folders (id, name)
VALUES
  (1, 'one'),
  (2, 'two'),
  (3, 'three');

INSERT INTO notes (id, name, content, folderid)
VALUES
  (1, 'Cats', 'This is a note about Cats. They have fur. Meow!', '1'),
  (2, 'Dogs', 'This is a note about Dogs. They also have fur. Woof!', '1'),
  (3, 'Birds', 'This is a note about Birds. They fly. Tweet!', '2'),
  (4, 'Bats', 'This is a note about Bats. They also fly. Squeak!', '2'),
  (5, 'Bees', 'This is a note about Bees. They make honey. And sting. Buzz!', '3'),
  (6, 'Platipuses', 'This is a note about Platipuses, they are strange.', '3');