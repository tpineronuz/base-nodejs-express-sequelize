define({ "api": [
  {
    "type": "get",
    "url": "/api/auth/login",
    "title": "Login",
    "name": "login",
    "group": "Credentials",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"email\": \"john@connor.net\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  user: {\n    \"email\": \"john@connor.net\",\n    \"firstName\": \"John\",\n    \"id\": 1,\n    \"isAdmin\": false\n    \"lastName\": \"Connor\",\n  },\n  \"token\": \"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Authentication error",
          "content": "HTTP/1.1 403 Unauthorized\n{\n  \"errorMessage\":\"Incorrect Email Id/Password\",\n  \"data\": null,\n  \"success\":false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Credentials"
  },
  {
    "type": "post",
    "url": "/api/auth/recoverPassword",
    "title": "Recover Password",
    "name": "recover-password",
    "group": "Credentials",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"email\": \"john@connor.net\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"data\": {},\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n   \"errorMessage\": \"User not found\",\n   \"data\": null,\n   \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Credentials"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register",
    "name": "register",
    "group": "Credentials",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeatPassword",
            "description": "<p>User Repeat Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"email\": \"john@connor.net\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Connor\",\n    \"password\": \"JohnConnor34$$\"\n    \"repeatPassword\": \"JohnConnor34$$\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  user: {\n    \"email\": \"john@connor.net\",\n    \"firstName\": \"John\",\n    \"id\": 1,\n    \"isAdmin\": false\n    \"lastName\": \"Connor\",\n  },\n  \"token\": \"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Authentication error",
          "content": "HTTP/1.1 403 Unauthorized\n{\n  \"errorMessage\":\"Incorrect Email Id/Password\",\n  \"data\": null,\n  \"success\":false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Credentials"
  },
  {
    "type": "post",
    "url": "/api/auth/resetPassword",
    "title": "Reset Password",
    "name": "reset-password",
    "group": "Credentials",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeatPassword",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"password\": \"JohnConnor34$$\"\n    \"repeatPassword\": \"JohnConnor34$$\"\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"data\": {},\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n   \"errorMessage\": \"token is required\",\n   \"data\": null,\n   \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Credentials"
  },
  {
    "type": "post",
    "url": "/api/nft/nfts",
    "title": "Create nft",
    "name": "Create_nft",
    "group": "NFTs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_url",
            "description": "<p>External url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alt_image",
            "description": "<p>Alt image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "attributes",
            "description": "<p>Attributes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "poweredBy",
            "description": "<p>Powered By</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"This is a test NFT [1]\",\n  \"external_url\": \"https://foo.com/token/1\",\n  \"image\": \"https://arweave.net/8t772YqnzqHy864cmE9cAXpD4Qt-mOvfo_-pqKXBKW0/1.png\",\n  \"alt_image\": \"https://ipfs.io/ipfs/QmNLei78zWmzUdbeRB3CiUfAizWUrbeeZh5K1rhAQKCh51/1.png\",\n  \"description\": \"This is a test Description\",\n  \"attributes\": [\n    {\n      \"trait_type\": \"Tier\",\n      \"value\": \"bronze\"\n    },\n    {\n      \"trait_type\": \"Editions\",\n      \"value\": \"1 of 20\"\n    },\n    {\n      \"trait_type\": \"Edition #\",\n      \"value\": \"5\"\n    },\n    {\n      \"display_type\": \"number\",\n      \"trait_type\": \"Redeemed\",\n      \"value\": 0\n    }\n  ],\n  \"poweredBy\": \"https://www.nameless.io/\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"data\": {},\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Authentication error",
          "content": "HTTP/1.1 403 Unauthorized\n{\n  \"errorMessage\":\"Incorrect Params\",\n  \"data\": null,\n  \"success\":false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/nft.js",
    "groupTitle": "NFTs"
  },
  {
    "type": "get",
    "url": "/nft/nfts/:id",
    "title": "Nft Details",
    "name": "Nft_Details",
    "group": "NFTs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 200,\n    \"data\": {\n        \"nft\": {\n            \"name\": \"This is a test NFT [1]\",\n            \"external_url\": \"https://foo.com/token/1\",\n            \"image\": \"https://arweave.net/8t772YqnzqHy864cmE9cAXpD4Qt-mOvfo_-pqKXBKW0/1.png\",\n            \"alt_image\": \"https://ipfs.io/ipfs/QmNLei78zWmzUdbeRB3CiUfAizWUrbeeZh5K1rhAQKCh51/1.png\",\n            \"description\": \"This is a test Description\",\n            \"attributes\": [\n              {\n                \"trait_type\": \"Tier\",\n                \"value\": \"bronze\"\n              },\n              {\n                \"trait_type\": \"Editions\",\n                \"value\": \"1 of 20\"\n              },\n              {\n                \"trait_type\": \"Edition #\",\n                \"value\": \"5\"\n              },\n              {\n                \"display_type\": \"number\",\n                \"trait_type\": \"Redeemed\",\n                \"value\": 0\n              }\n            ],\n            \"poweredBy\": \"https://www.nameless.io/\"\n        }\n    },\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Find error",
          "content": "HTTP/1.1 404\n{\n    \"errorMessage\": \"Incorrect token is provided, try re-login\",\n    \"data\": null,\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/nft.js",
    "groupTitle": "NFTs"
  },
  {
    "type": "get",
    "url": "api/nft/nfts",
    "title": "Return the all Nfts",
    "name": "allNfts",
    "group": "NFTs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n {\n    \"code\": 200,\n    \"data\": {\n        \"nfts\": {\n            \"count\": 2,\n            \"rows\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"This is a test NFT [1]\",\n                    \"external_url\": \"https://foo.com/token/1\",\n                    \"image\": \"https://arweave.net/8t772YqnzqHy864cmE9cAXpD4Qt-mOvfo_-pqKXBKW0/1.png\",\n                    \"alt_image\": \"https://ipfs.io/ipfs/QmNLei78zWmzUdbeRB3CiUfAizWUrbeeZh5K1rhAQKCh51/1.png\",\n                    \"description\": \"This is a test Description\",\n                    \"attributes\": [\n                      {\n                        \"trait_type\": \"Tier\",\n                        \"value\": \"bronze\"\n                      },\n                      {\n                        \"trait_type\": \"Editions\",\n                        \"value\": \"1 of 20\"\n                      },\n                      {\n                        \"trait_type\": \"Edition #\",\n                        \"value\": \"5\"\n                      },\n                      {\n                        \"display_type\": \"number\",\n                        \"trait_type\": \"Redeemed\",\n                        \"value\": 0\n                      }\n                    ],\n                    \"poweredBy\": \"https://www.nameless.io/\"\n                }\n                {\n                    \"id\": 2,\n                    \"name\": \"This is a test NFT [2]\",\n                    \"external_url\": \"https://foo.com/token/2\",\n                    \"image\": \"https://arweave.net/8t772YqnzqHy864cmE9cAXpD4Qt-mOvfo_-pqKXBKW0/2.png\",\n                    \"alt_image\": \"https://ipfs.io/ipfs/QmNLei78zWmzUdbeRB3CiUfAizWUrbeeZh5K2rhAQKCh52/2.png\",\n                    \"description\": \"This is a test Description\",\n                    \"attributes\": [\n                      {\n                        \"trait_type\": \"Tier\",\n                        \"value\": \"bronze\"\n                      },\n                      {\n                        \"trait_type\": \"Editions\",\n                        \"value\": \"2 of 20\"\n                      },\n                      {\n                        \"trait_type\": \"Edition #\",\n                        \"value\": \"5\"\n                      },\n                      {\n                        \"display_type\": \"number\",\n                        \"trait_type\": \"Redeemed\",\n                        \"value\": 0\n                      }\n                    ],\n                    \"poweredBy\": \"https://www.nameless.io/\"\n                }\n            ]\n        }\n    },\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Find error",
          "content": "HTTP/1.1 404\n{\n    \"errorMessage\": \"Incorrect token is provided, try re-login\",\n    \"data\": null,\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/nft.js",
    "groupTitle": "NFTs"
  },
  {
    "type": "get",
    "url": "api/user/allUsers",
    "title": "Return the all Users",
    "name": "allUsers",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n {\n    \"code\": 200,\n    \"data\": {\n        \"users\": {\n            \"count\": 14,\n            \"rows\": [\n                {\n                    \"id\": 24,\n                    \"firstName\": \"Roary\",\n                    \"lastName\": \"Martinez\",\n                    \"email\": \"roary@martinez.net\",\n                    \"profilePic\": null,\n                    \"isVerified\": false,\n                    \"createdAt\": \"2021-07-15T15:36:52.000Z\",\n                    \"updatedAt\": \"2021-07-15T15:36:52.000Z\"\n                },\n                {\n                    \"id\": 23,\n                    \"firstName\": \"Irma\",\n                    \"lastName\": \"Gallagher\",\n                    \"email\": \"irma@gallgher.net\",\n                    \"profilePic\": null,\n                    \"isVerified\": false,\n                    \"createdAt\": \"2021-07-15T15:26:58.000Z\",\n                    \"updatedAt\": \"2021-07-15T15:26:58.000Z\"\n                }\n            ]\n        }\n    },\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Find error",
          "content": "HTTP/1.1 404\n{\n    \"errorMessage\": \"Incorrect token is provided, try re-login\",\n    \"data\": null,\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/api/user/change-password",
    "title": "Edit User password",
    "name": "change-password",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Oldpassword",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"oldPassword\": \"JohnConnor34$$\"\n    \"newPassword\": \"JohnConnor34$$\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"data\": {},\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 404\n{\n    \"errorMessage\": \"Incorrect token is provided, try re-login\",\n    \"data\": null,\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/user/me",
    "title": "User Profile",
    "name": "me",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"id\": 19,\n            \"firstName\": \"John\",\n            \"lastName\": \"Connor\",\n            \"email\": \"john@connor.com\",\n            \"profilePic\": null,\n            \"isVerified\": false,\n            \"createdAt\": \"2021-07-14T13:29:59.000Z\",\n            \"updatedAt\": \"2021-07-14T13:29:59.000Z\"\n        }\n    },\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Find error",
          "content": "HTTP/1.1 404\n{\n    \"errorMessage\": \"Incorrect token is provided, try re-login\",\n    \"data\": null,\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "Users"
  }
] });
