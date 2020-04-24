# The Ultimate `npm run dev`

This is a starter app for [Express.js](https://expressjs.com/).

The `src/devApp.js` runs your `src/app.js` using [Nodemon](https://nodemon.io/) as a module, starting [Ngrok](https://ngrok.com/) when the app is run, gracefully stopping Ngrok when the app is closed.

## How Can I Use This?

`src/app.js` is just a standard [hello-world/app.js from the Express.js site](https://expressjs.com/en/starter/hello-world.html). You probably just need to start as you normally would, editing `src/app.js` as you build your app.

Clone this repository.

```shell
git clone https://github.com/lukeocodes/express-nodemon-ngrok-starter.git
```

Install the dependencies.

```shell
npm install
```

## Production Mode

[Nodemon](https://nodemon.io/), [Ngrok](https://ngrok.com/) and [Dotenv](https://www.npmjs.com/package/dotenv) are all `devDependencies` and only required inside `src/devApp.js`, so in production mode none of these libraries which are great for development are installed or required by the app.

Start the app without these modules.

```shell
npm start
```

## Development Mode

Start development mode with the [Nodemon](https://nodemon.io/), [Ngrok](https://ngrok.com/), and [Dotenv](https://www.npmjs.com/package/dotenv) modules.

```shell
npm run dev
```

## What Else?

You could use [Livereload](https://www.npmjs.com/package/livereload) to refresh your browser window automatically, if you're working on something which has views.

You could use the [Nodemon](https://nodemon.io/) lifecycle events to update API integrations with your [Ngrok](https://ngrok.com/) address whenever your app comes online in development mode.

## License

Please see [the license](LICENSE).

## Contributing

Please see [the contributing guidance](CONTRIBUTING.md).

## Code of Conduct

Please see [the code of conduct](CODE_OF_CONDUCT.md).