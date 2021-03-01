# node-clitools-mockapi-protoservices

## Service Mocking 

To get started we will be serving our static directory with `serve`

```sh
npm install -g serve
```

> serve `static` with default values
```sh
serve static
```

> install dependencies
```sh
cd mock-srv
npm install
```

## Optional commands for serve

> serve `static` with cors enabled
```sh
serve static -C
```

> serve `static` with cors and https enabled
```sh
serve static -C --ssl-key full-path-to/key.pem --ssl-cert full-path-to/cert.pem
```

