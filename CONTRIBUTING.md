# Contributing

**Note:** as the maintainer of cljspad, I want to curate a high quality collection of libraries that have been adopted by the community. 

In order to keep things maintainable (eg, to not dive into dependency hell) I hope to add some requirements around libraries as cljspad progresses.

## Libraries

If you would like to contribute by adding a library to the cljspad sandbox:

1) Add desired library to [depstrap](https://github.com/cljspad/depstrap) - depstrap is a public repository of ClojureScript libraries for cljs.js projects.
2) Add the library to [cljspad.manifest.edn](https://github.com/cljspad/cljspad/blob/master/resources/public/cljspad.manifest.edn)

Instructions on how to run cljspad locally can be found in the server repo's [README](https://github.com/cljspad/server)

## Examples

If you would like to contribute by adding an example to the cljspad sandbox:

1) Create a public [gist](https://gist.github.com/) of your example
2) Update [cljspad.manifest.edn](https://github.com/cljspad/cljspad/blob/master/resources/public/cljspad.manifest.edn) and include your example

## Manifest EDN

You can view the spec for `cljspad.manifest.edn` [here](https://github.com/cljspad/cljspad/blob/master/src/cljspad/manifest.cljc)

Running `./lint.sh` in the project's root will validate that the EDN file conforms to the spec.
