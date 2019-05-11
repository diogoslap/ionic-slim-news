# Ionic Slim News

This project is an interface to the [slim-news](https://github.com/diogoslap/slim-news) project. Built with Ionic 3. This application only reads news and events, but has authentication to access the events page.

This project uses the following stacks:

- Node.js 8.*
- Ionic 3
- Cordova 8

Change the url in the <strong>src/providers/api.ts</strong> file to your api link, by default it is http://localhost:8000/v1


Run the initial command:
```
npm install
```

Then:

```
ionic serve
```

The ionic itself will open a tab in the browser and will already connect with your api if it is set up correctly.
