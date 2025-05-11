import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let mahasiswa = [
    {
        nama: "Chihaya Anon",
        nim: "1270015173"
    },
    {
        nama: "Nagasaki Soyo",
        nim: "1270015174"
    }
];

/**
 * @swagger
 * {
 *     "/api/mahasiswa": {
 *         "get": {
 *             "tags": ["Mahasiswa"],
 *             "summary": "Get mahasiswa list",
 *             "description": "Get all mahasiswa data",
 *             "responses": {
 *                 "200": {
 *                     "description": "Success responses",
 *                     "content": {
 *                         "application/json": {
 *                             "schema": {
 *                                 "$ref": "#/components/schemas/MahasiswaArray"
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
    res.send(mahasiswa);
});

/**
 * @swagger
 * {
 *     "/api/mahasiswa": {
 *         "post": {
 *             "tags": ["Mahasiswa"],
 *             "summary": "Create mahasiswa data",
 *             "description": "Store mahasiswa data to database",
 *             "requestBody": {
 *                 "required": true,
 *                 "content": {
 *                     "application/json": {
 *                         "schema": {
 *                             "$ref": "#/components/schemas/MahasiswaRequestBody"
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
 *                                 "message": "Mahasiswa data created successfully"
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
    const mhs = req.body;

    mahasiswa.push(mhs);

    res.send(`Mahasiswa data created successfully`);
});

/**
 * @swagger
 * {
 *     "/api/mahasiswa/{nim}": {
 *         "get": {
 *             "tags": ["Mahasiswa"],
 *             "summary": "Get mahasiswa data",
 *             "description": "Get mahasiswa data by nim",
 *             "parameters": [
 *                 {
 *                     "$ref": "#/components/parameters/NIM"
 *                 }
 *             ],
 *             "responses": {
 *                 "200": {
 *                     "description": "Success responses",
 *                     "content": {
 *                         "application/json": {
 *                             "schema": {
 *                                 "$ref": "#/components/schemas/Mahasiswa"
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
 *                                 "message": "Mahasiswa data not found"
 *                             }
 *                         }
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * }
 */
router.get('/:nim', (req, res) => {
    const { nim } = req.params;

    if (mahasiswa.find((mhs) => mhs.nim === nim)) {
        const foundItem = mahasiswa.find((mhs) => mhs.nim === nim);
        
        res.send(foundItem);
    } else {
        res.send(`Mahasiswa data not found`);
    }
});

/**
 * @swagger
 * {
 *     "/api/mahasiswa/{nim}": {
 *         "delete": {
 *              "tags": ["Mahasiswa"],
 *              "summary": "Delete mahasiswa data",
 *              "description": "Delete mahasiswa data by nim",
 *              "parameters": [
 *                  {
 *                      "$ref": "#/components/parameters/NIM"
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
 *                                  "message": "Mahasiswa data deleted successfully"
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
 *                                  "message": "Mahasiswa data not found"
 *                              }
 *                          }
 *                      }
 *                  }
 *              }
 *          }
 *     }
 * }
 */
router.delete('/:nim', (req, res) => {
    const { nim } = req.params;

    if (mahasiswa.find((mhs) => mhs.nim === nim)) {
        mahasiswa = mahasiswa.filter((mhs) => mhs.nim !== nim);

        res.send(`Mahasiswa data deleted successfully`);
    } else {
        res.send(`Mahasiswa data not found`);
    }
});

/**
 * @swagger
 *  {
 *      "components": {
 *          "parameters": {
 *              "NIM": {
 *                  "name": "nim",
 *                  "in": "path",
 *                  "required": true,
 *                  "description": "Nomor Induk Mahasiswa",
 *                  "schema": {
 *                      "type": "string"
 *                  }
 *              }
 *          },
 *          "schemas": {
 *              "Mahasiswa": {
 *                  "type": "object",
 *                  "properties": {
 *                      "nama": {
 *                          "type": "string"
 *                      },
 *                      "nim": {
 *                          "type": "string"
 *                      }
 *                  },
 *                  "example": {
 *                      "nama": "John Doe",
 *                      "nim": "12700180"
 *                  }
 *              },
 *              "MahasiswaArray": {
 *                  "type": "array",
 *                  "items": {
 *                      "$ref": "#/components/schemas/Mahasiswa"
 *                  },
 *                  "example": [
 *                      {
 *                          "nama": "John Doe",
 *                          "nim": "12700180"
 *                      },
 *                      {
 *                          "nama": "Jane Doe",
 *                          "nim": "12700181"
 *                      }
 *                  ]
 *              },
 *              "MahasiswaRequestBody": {
 *                  "type": "object",
 *                  "properties": {
 *                      "nama": {
 *                          "type": "string"
 *                      },
 *                      "nim": {
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
