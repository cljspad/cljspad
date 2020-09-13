# cljsfiddle

[cljsfiddle](https://cljsfiddle.dev) is a code playground for [ClojureScript](https://clojurescript.org/)

# Usage

## Sandbox Environments

* Reagent + re-frame: demo
* Rum: demo
* Elk: demo

Refer to the [Contributing](#contributing) section if you would like to add your favorite frontend library to cljsfiddle.

## Running

Code is evaluated by pressing the 'Run' button

To render something (eg a React component) to the right-hand pane, a hook fn is provided for each environment:

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

Load a gist into cljsfiddle:

Eg: https://gist.github.com/wavejumper/5d395f78257aab1da2536e5875b12d3d

Becomes: https://cljsfiddle.net/#!/wavejumper/5d395f78257aab1da2536e5875b12d3d

# Contributing 

1) Add desired library to `package.json` or `deps.edn`
2) Add stubbed impl to [cljsfiddle.env.packages](https://github.com/wavejumper/cljsfiddle/blob/master/src/cljsfiddle/env/packages.cljs) 
3) If you are rendering to the right-hand pane, add a render fn to [cljsfiddle](https://github.com/wavejumper/cljsfiddle/blob/master/src/cljsfiddle.cljs)