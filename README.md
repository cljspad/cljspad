# cljsfiddle

[cljsfiddle](https://cljsfiddle.dev) is a code playground for [ClojureScript](https://clojurescript.org/)

# Usage

## Environments 

On the left hand pane you can select common ClojureScript environments for libraries such as:

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
 
(reagent-render! my-component)
```

Refer to the [Environments](#environments) section for examples of each hook fn

## REPL

The bottom right hand pane contains a REPL connected to your current environment

## Saving

cljsfiddle integrates with GitHub gists to save your sketches. 

## Loading

Load a gist into cljsfiddle:

Eg: https://gist.github.com/wavejumper/5d395f78257aab1da2536e5875b12d3d

Becomes: cljsfiddle.net/#!/wavejumper/5d395f78257aab1da2536e5875b12d3d

# Contributing 

