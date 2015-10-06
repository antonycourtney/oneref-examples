# OneRef Examples

This repository contains example applications for [OneRef](https://github.com/antonycourtney/oneref), a minimalist approach to unidirectional data flow for React applications.

OneRef and these examples are described in the article **TODO: link to article**.

The examples here were ported from the corresponding [Flux examples](https://github.com/facebook/flux/tree/master/examples):

- **oneref-todomvc/** - Port of Flux's port of the classic [TodoMVC](http://todomvc.com/) example to OneRef.
- **oneref-chat/** - Port of Flux's [chat example](https://github.com/facebook/flux/tree/master/examples/flux-chat)  

# Running the Examples

The pre-compiled JavaScript is checked in, so you should be able to just `cd` to each example directory and start a local web server; for example:

    python -m SimpleHTTPServer

and then open a web browser at the location where your local web browser serves its content; e.g. [localhost:8000](http://localhost:8000/).

# Building The Examples

In each example directory, run these commands:

First install dependencies:

    npm install

You will only need to run that once.

Then build the generated JavaScript using webpack:

    webpack -d --watch

That will perform an initial build and start a watcher process that will rebuild the generated code when any source files are updated.

Once webpack generates a `.bundle.js` file, start a local web server and open a browser to run the examples as described in the previous section.

# License

These examples are BSD-licensed (the same License, attribution and copyright notice of the original Flux examples).