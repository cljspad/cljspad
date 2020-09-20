function addDependency(dep, provides, requires, opts) {
  deps.push([dep, provides, requires, opts]);
};

const deps = [];

goog = {
  addDependency: addDependency
};

function evalDeps(requires) {
  requires.forEach((r) => {
    require(r);
  });
  return deps;
};