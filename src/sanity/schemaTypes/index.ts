// schemas/schema.js
import author from './author';

import post from './postType'; // Adjust the path to the `post` schema file

export const schema = {
  types: [post, author,], // Register the `post` schema here
};
