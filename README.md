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

## Rendering to the sandbox

Code gets evaluated by pressing the 'Run' button

To render something (eg a React component) to the right-hand pane, a render function is provided for each library:

```clojure
(require '[sandbox.reagent :refer [render]])

(defn my-component []
  [:div {} "Hello world"])

(render [my-component])
```

## Loading code

To load a GitHub gist into cljsfiddle:

Eg: https://gist.github.com/wavejumper/5d395f78257aab1da2536e5875b12d3d

Becomes: https://cljsfiddle.net/gist/5d395f78257aab1da2536e5875b12d3d

## Embedding

# Contributing 

If you would like to contribute by adding a library to the cljsfiddle sandbox:

1) Add desired library to `package.json` or `deps.edn`
2) Add an entry to [cljsfiddle.manifest.edn](https://github.com/cljsfiddle/cljsfiddle/blob/master/resources/public/cljsfiddle.manifest.edn)
3) (Optional) add a helper namespace if your library renders anything to the right-hand pane. Eg: `sandbox.reagent`. Example [here](https://github.com/cljsfiddle/cljsfiddle/blob/master/src/sandbox/reagent.cljs)
4) Add an entry for the desired namespaces in [shadow-cljs.edn](https://github.com/cljsfiddle/cljsfiddle/blob/master/shadow-cljs.edn)

Instructions on how to run cljsfiddle locally can be found in the server repo's [README](https://github.com/cljsfiddle/server)