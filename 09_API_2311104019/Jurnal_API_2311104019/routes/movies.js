import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let movies = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        id: "cb1e42c9-8914-494f-961c-77a5dde8429c"
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        stars: ["Marlon Brando", "Al Pacino", "James Caan"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        id: "468e6450-894c-4c83-a1fc-7aa5260650a2"
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
        id: "cb1e42c9-8914-494f-a1fc-7aa5260650a2"
    }
];

/**
 * @swagger
 * {
 *     "/api/movies": {
 *         "get": {
 *             "tags": ["Movies"],
 *             "summary": "Get movies list",
 *             "description": "Get all movies data",
 *             "responses": {
 *                 "200": {
 *                     "description": "Success responses",
 *                     "content": {
 *                         "application/json": {
 *                             "schema": {
 *                                 "$ref": "#/components/schemas/MoviesArray"
 *                             }
 *                         }
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * }
 */
router.get('/', (req, res) => {
    res.send(movies);
});

/**
 * @swagger
 * {
 *     "/api/movies": {
 *         "post": {
 *             "tags": ["Movies"],
 *             "summary": "Create movie data",
 *             "description": "Store movie data to database",
 *             "requestBody": {
 *                 "required": true,
 *                 "content": {
 *                     "application/json": {
 *                         "schema": {
 *                             "$ref": "#/components/schemas/MovieRequestBody"
 *                         }
 *                     }
 *                 }
 *             },
 *             "responses": {
 *                 "200": {
 *                     "description": "Success responses",
 *                     "content": {
 *                         "application/json": {
 *                             "schema": {
 *                                 "$ref": "#/components/schemas/Message"
 *                             },
 *                             "example": {
 *                                 "message": "Movie data created successfully"
 *                             }
 *                         }
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * }
 */
router.post('/', (req, res) => {
    const movie = req.body;

    movies.push({
        ...movie,
        id: uuidv4()
    });

    res.send(`Movie data created successfully`);
});

/**
 * @swagger
 * {
 *     "/api/movies/{id}": {
 *         "get": {
 *             "tags": ["Movies"],
 *             "summary": "Get movie data",
 *             "description": "Get movie data by id",
 *             "parameters": [
 *                 {
 *                     "$ref": "#/components/parameters/MovieId"
 *                 }
 *             ],
 *             "responses": {
 *                 "200": {
 *                     "description": "Success responses",
 *                     "content": {
 *                         "application/json": {
 *                             "schema": {
 *                                 "$ref": "#/components/schemas/Movie"
 *                             }
 *                         }
 *                     }
 *                 },
 *                 "404": {
 *                     "description": "Error responses",
 *                     "content": {
 *                         "application/json": {
 *                             "schema": {
 *                                 "$ref": "#/components/schemas/Message"
 *                             },
 *                             "example": {
 *                                 "message": "Movie data not found"
 *                             }
 *                         }
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * }
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (movies.find((movie) => movie.id === id)) {
        const foundItem = movies.find((movie) => movie.id === id);
        
        res.send(foundItem);
    } else {
        res.send(`Movie data not found`);
    }
});

/**
 * @swagger
 * {
 *     "/api/movies/{id}": {
 *         "delete": {
 *              "tags": ["Movies"],
 *              "summary": "Delete movie data",
 *              "description": "Delete movie data by id",
 *              "parameters": [
 *                  {
 *                      "$ref": "#/components/parameters/MovieId"
 *                  }
 *              ],
 *              "responses": {
 *                  "200": {
 *                      "description": "Success responses",
 *                      "content": {
 *                          "application/json": {
 *                              "schema": {
 *                                  "$ref": "#/components/schemas/Message"
 *                              },
 *                              "example": {
 *                                  "message": "Movie data deleted successfully"
 *                              }
 *                          }
 *                      }
 *                  },
 *                  "404": {
 *                      "description": "Error responses",
 *                      "content": {
 *                          "application/json": {
 *                              "schema": {
 *                                  "$ref": "#/components/schemas/Message"
 *                              },
 *                              "example": {
 *                                  "message": "Movie data not found"
 *                              }
 *                          }
 *                      }
 *                  }
 *              }
 *          }
 *     }
 * }
 */
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    if (movies.find((movie) => movie.id === id)) {
        movies = movies.filter((movie) => movie.id !== id);

        res.send(`Movie data deleted successfully`);
    } else {
        res.send(`Movie data not found`);
    }
});

/**
 * @swagger
 *  {
 *      "components": {
 *          "parameters": {
 *              "MovieId": {
 *                  "name": "id",
 *                  "in": "path",
 *                  "required": true,
 *                  "description": "Movie Id using uuidv4",
 *                  "schema": {
 *                      "type": "string"
 *                  }
 *              }
 *          },
 *          "schemas": {
 *              "Movie": {
 *                  "type": "object",
 *                  "properties": {
 *                      "title": {
 *                          "type": "string"
 *                      },
 *                      "director": {
 *                          "type": "string"
 *                      },
 *                      "stars": {
 *                          "type": "array"
 *                      },
 *                      "description": {
 *                          "type": "string"
 *                      }
 *                  }
 *              },
 *              "MoviesArray": {
 *                  "type": "array",
 *                  "items": {
 *                      "$ref": "#/components/schemas/Movie"
 *                  }
 *              },
 *              "MovieRequestBody": {
 *                  "type": "object",
 *                  "properties": {
 *                      "title": {
 *                          "type": "string"
 *                      },
 *                      "director": {
 *                          "type": "string"
 *                      },
 *                      "stars": {
 *                          "type": "array",
 *                          "items": {
 *                              "type": "string"
 *                          }
 *                      },
 *                      "description": {
 *                          "type": "string"
 *                      }
 *                  }
 *              },
 *              "Message": {
 *                  "type": "string",
 *                  "properties": {
 *                      "message": {
 *                          "type": "string"
 *                      }
 *                  }
 *              }
 *          }
 *      }
 *  }
 */

export default router;
