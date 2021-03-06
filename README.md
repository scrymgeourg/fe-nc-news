# Alex Carrie's ncNEWS

Welcome to the front-end app for Alex Carrie's ncNEWS, a demo news app created using my own api and data from Northcoders.
The project has a default, logged-in user, jessjelly. This is used to post comments on the articles, which can be deleted.

This project is a demonstration for the use of react, node and axios to create a simple, responsive App.

Node v13.11.0 is the minimum version required to run this app.

#### Links to the app

- [Alex Carrie ncNEWS App](https://alex-carrie-nc-news.netlify.app/)
- [API for project](https://ac-nc-news.herokuapp.com/api)
- [Git repo for API](https://github.com/acarriedev/be-nc-news)

---

## Setting up the project

### Step 1 - Install dependencies

```bash
npm i
```

---

### Step 2 - Run App in the browser

```bash
npm start
```

---

## Tests

Most of the testing and errors-handling for this project is handled by the [back-end](https://github.com/acarriedev/be-nc-news).
There is a tests folder containing tests for the dateFormatter utils function. This uses jest, which is installed with react.

To run this test enter this in the terminal

```bash
npm test utils
```

Jest will automatically run in watch mode. To escape watch mode enter this in the terminal

```bash
^c
```

---

## Author

- Alex Carrie - [github](https://github.com/acarriedev/)

---

### Acknowledgments

- Built using the Northcoders template by [Northcoders](https://northcoders.com/)
