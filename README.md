# OneRef Examples

This repository contains example applications for [OneRef](https://github.com/antonycourtney/oneref), a minimalist approach to unidirectional data flow for React applications.

OneRef and these examples are described in [A Tutorial Introduction to OneRef](https://antsrants.dev/oneref-intro/) and [Asynchrony Support in OneRef](https://antsrants.dev/oneref-async/).

Examples:

- [todomvc](./todomvc) - Port of the classic [TodoMVC](http://todomvc.com/) example to OneRef
- [multitodo](./multitodo) - Demonstration of composition in OneRef, by combining two todo lists in one app.
- [todo-async-basic](./todo-async-basic) - Basic asynchrony in OneRef, by simulating a todo list with simple subscriptions.
- [hello-aync](./hello-async) - A OneRef implementation of [hello-async](https://github.com/tylerlong/hello-async), based on [this answer](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559) to a question on Stack Overflow.
- [flux-challenge](./flux-challenge) - My answer to the [Flux Challenge](https://github.com/staltz/flux-challenge), by Andre Staltz

# Building and Running the Examples

The examples were all developed using create-react-app.

To build and run the examples, `cd` to the example directory and run:

```sh
$ npm install
$ npm start
```

# License

These examples are BSD-licensed (the same License, attribution and copyright notice of the original Flux examples).
