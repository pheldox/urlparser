## Overview

```
The repository contain code with an endpoint that parses url and return a response.
```

## Installation of Dependencies

```bash
$ cd urlparser && npm install
```

## Running the app

```
-create .env in root folder
- Create mysql database locally
- Connect to application by specifying database url in .env
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# Open second terminal
$ cd urlparser

```

## Saved urls.

```
const urls = [
  { '_id': '1', 'longurl': 'https://stackoverflow.com/' },
  { '_id': '2', 'longurl': 'https://www.instagram.com/' },
  { '_id': '3', 'longurl': 'https://github.com/' },
  { '_id': '4', 'longurl': 'https://edition.cnn.com/' },
  { '_id': '5', 'longurl': 'https://www.ghanaweb.com/' },
  { '_id': '6', 'longurl': 'https://www.myjoyonline.com/' },
];
```

## Sample Request and Response

```
Go to second terminal

$ curl localhost:5000/urls/6
```

## Response

```
{"id":42,
"title":"MyJoyOnline.com - Ghana's most comprehensive website. Credible, fearless and independent journalism",
"icon":"https://www.myjoyonline.com/wp-content/uploads/2020/03/cropped-cropped-myjoyonline-logo-2-1-32x32.png",
"longurl":"https://www.myjoyonline.com/","description":"Ghana's most comprehensive website. Credible, fearless and independent journalism"}
```
