# cljsfiddle

[cljsfiddle](https://cljsfiddle.dev) is a code playground for [ClojureScript](https://clojurescript.org/)

## Demo

* Reagent + re-frame
* Rum
* ElkJS

## Sandbox

cljsfiddle leverages the [cljs.js](http://cljs.github.io/api/cljs.js/) "Bootstrapped Compiler" at runtime to provide a sandboxed environment for code evaluation inside your browser.

Sandboxes contain a common set of libraries (eg, reagent, re-frame) available for use in the environment.

Sandboxed environments are versioned. Changes to the sandbox (library version bumps, additional libraries etc) constitute a new sandbox version.

This means that every version of the cljsfiddle sandbox contains stable, known versions of packaged ClojureScript libraries. GitHub gists are saved against a sandbox version, meaning your gist should never break as cljsfiddle progresses.

### Sandbox Limitations

* JavaScript libraries are leaky + global. It is a WIP for cljsfiddle to include NPM dependencies (such as React) as a dependency within a sandboxed environment. 

## Packages

Packages are 

## Running

Code is evaluated by pressing the 'Run' button

To render something (eg a React component) to the right-hand pane, a render fn is provided for each environment:

```clojure
(defn my-component []
 [:div "Hello world"])
 
(cljsfiddle/reagent-render! my-component)
```

Refer to the [Environments](#environments) section for examples of each hook fn

## REPL

The bottom right hand pane contains a REPL connected to your current environment

## Saving

cljsfiddle integrates with GitHub gists to save your sketches. 

## Loading

To load a gist into cljsfiddle:

Eg: https://gist.github.com/wavejumper/5d395f78257aab1da2536e5875b12d3d

Becomes: https://cljsfiddle.net/gist/5d395f78257aab1da2536e5875b12d3d

# Contributing 

1) Add desired library to `package.json` or `deps.edn`
2) Add stubbed impl to [cljsfiddle.env.packages](https://github.com/wavejumper/cljsfiddle/blob/master/src/cljsfiddle/env/packages.cljs) 
3) If you are rendering to the right-hand pane, add a render fn to [cljsfiddle](https://github.com/wavejumper/cljsfiddle/blob/master/src/cljsfiddle.cljs)