# Contents

* [Global Requisites](#global-requisites)
* [Install, Configure & Run](#install-configure--run)
* [Routes](#list-of-routes)
* [API Docs]("#swagger)

# Global Requisites

* node (>= 10.5.0)
* tsc (>= 3.0.1)
* typescript (>= 3.0.1)

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Without Docker

# Install NPM dependencies.
npm install;

# Edit your DotEnv file using any editor of your choice.
vim .env;

# Run the app
npm run dev;
```

```bash
# With Docker

# Run the app in docker as a foreground process
docker-compose up

# Run the app in docker as a background process
docker-compose up -d

# default Host
http://localhost:4040/

```


# List of Routes

```sh
# SWAGGER Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET   | /swagger/api-docs
+--------+-------------------------+

# API Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/alphabet/validate
+--------+-------------------------+

# Example Payload
## Matrix is the alphabet soup
## Word is the coincidence
## Rows is the number of rows
## Columns is the number of columns
{
  "matrix": [["a", "b"], ["a", "b"]],
  "word": "ab",
  "rows": 2,
  "columns": 2
}
```
# Swagger

```sh
# To view Swagger you must access http://localhost:4040//swagger/api-docs
```