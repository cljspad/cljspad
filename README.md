![Clojure CI](https://github.com/cljsfiddle/cljsfiddle/workflows/Clojure%20CI/badge.svg?branch=master)
[![Slack](https://img.shields.io/badge/Clojurians-cljspad-lightgrey)](https://clojurians.slack.com/messages/C01B1JQALKZ/)

# cljsfiddle

[cljsfiddle](https://cljsfiddle.dev) is a code playground for [ClojureScript](https://clojurescript.org/)

## Examples

* Reagent + re-frame
* ElkJS

## Sandbox

cljsfiddle leverages the [cljs.js](http://cljs.github.io/api/cljs.js/) "Bootstrapped Compiler" at runtime to provide a sandboxed environment for code evaluation inside your browser.

Sandboxes contain a common set of libraries (eg, reagent, re-frame) available for use in the environment.

Sandboxed environments are versioned. Changes to the sandbox (library version bumps, additional libraries etc) constitute a new sandbox version.

This means that every version of the cljsfiddle sandbox contains stable, known versions of packaged ClojureScript libraries. GitHub gists are saved against a sandbox version, meaning your gist should never break as cljsfiddle progresses.

You can view the sandbox changelog by visiting the [releases](https://github.com/cljsfiddle/cljsfiddle/releases) page.

## Rendering to the sandbox

Code gets evaluated by pressing the 'Run' button

To render something (eg a React component) to the right-hand pane, a render function has been provided for each library:

```clojure
(require '[sandbox.reagent :refer [render]])

(defn my-component []
  [:div {} "Hello world"])

(render [my-component])
```

## Utility functions

`sandbox.user` contains a few hepler functions:

### Injecting CSS

If you would like to style the right-hand pane, you can use the `inject-stylesheet` fn

```clojure 
(inject-stylesheet "https://path/to/stylesheet.css")
```

## Loading/sharing code

To load a GitHub gist into cljsfiddle:

Gist: https://gist.github.com/wavejumper/05fca1e4d543078227e24081c2f2764c

Becomes: https://cljsfiddle.dev/gist/05fca1e4d543078227e24081c2f2764c

The above link will always load the gist against the latest version of cljsfiddle

To load a gist against a specific version of cljsfiddle:

https://cljsfiddle.dev/gist/1/05fca1e4d543078227e24081c2f2764c

Where the path param `/1/` is the version of the sandbox

### Notes on Gist loading

cljsfiddle will load the first file in the gist containing a `.cljs` extension. 

If no files are found with a `.cljs` extension, the first file from the API response will be loaded instead.

## Embedding cljsfiddle

cljsfiddle can be embedded into your website via an iframe:

```html
<iframe src="https://cljsfiddlle.dev/embed/GIST_ID" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>
```

# Contributing

## Libraries

If you would like to contribute by adding a library to the cljsfiddle sandbox:

1) Add desired library to `package.json` or `deps.edn`
2) Add an entry to [cljsfiddle.manifest.edn](https://github.com/cljsfiddle/cljsfiddle/blob/master/resources/public/cljsfiddle.manifest.edn)
3) (Optional) add a helper namespace if your library renders anything to the right-hand pane. Eg: `sandbox.reagent`. Example [here](https://github.com/cljsfiddle/cljsfiddle/blob/master/src/sandbox/reagent.cljs)
4) Add an entry for the desired namespace entries in [shadow-cljs.edn](https://github.com/cljsfiddle/cljsfiddle/blob/master/shadow-cljs.edn)

Instructions on how to run cljsfiddle locally can be found in the server repo's [README](https://github.com/cljsfiddle/server)

## Examples

If you would like to contribute by adding an example to the cljsfiddle sandbox:

1) Create a public [gist](https://gist.github.com/) of your example
2) Update [cljsfiddle.manifest.edn](https://github.com/cljsfiddle/cljsfiddle/blob/master/resources/public/cljsfiddle.manifest.edn) and include your example

## Manifest EDN

You can view the spec for `cljsfiddle.manifest.edn` [here](https://github.com/cljsfiddle/cljsfiddle/blob/master/src/cljsfiddle/manifest.cljc)

Running `./lint.sh` in the project's root will validate that the EDN file conforms to the spec.
