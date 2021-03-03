# node-clitools-mockapi-protoservices

Use Node.js powers to Mock RESTful JSON APIs, Prototype real-time services and Discover and use ecosystem utilities.


## Service Mocking - Server

> install dependencies
```sh
cd mock-srv
npm install
npm run dev
``` 

> Make any modifications as needed to the `mock-srv/routes` and `mock-srv/plugins`

## Service Mocking - Client

> Install and serve our static directory with `serve` from the project's root directory

```sh
npm install -g serve
```

> serve `static` with default values
```sh
serve static
```
> Then open http://localhost:5000/ to interact with the mock server

### Optional commands for serve

> serve `static` with cors enabled
```sh
serve static -C
```

> serve `static` with cors and https enabled
```sh
serve static -C --ssl-key full-path-to/key.pem --ssl-cert full-path-to/cert.pem
```

## Service Mocking - CLI

> install dependencies
```sh
cd my-cli
npm install
npm link
my-cli
``` 

> Link the `my-cli` with npm to be used from any directory in the terminal
```sh
npm link
``` 

> Let's run the interactive cli
```sh
my-cli --help
# or
my-cli
``` 