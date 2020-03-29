Here 3 use cases described:

- creating 'hello world' and add(3, 5) functions on C++ side, and envoking it on JS side (functionexample)
- creating a classwith two methods on C++ side and creating a class example on JS side (classexample),
- based on previous case, passing this object (class example) back to C++ side, create a new class instance, and envoking its method (classexample).

Hints come in handy:

- n-api creates a wrapper for each function, e.g. add() and addWrapper() in cppsrc/Samples/functionexample.cpp
- add namespace for each function in the appropriate .h file, like in cppsrc/Samples
- to add a new function to the existing module, make the appropriate changes in cppsrc/Samples/functionexample.cpp (add two function - itself and a wrapper), cppsrc/Samples/functionexample.h (namespace for both).
- to add the completely new module, create new _.cpp, _.h files, add them to binding.gyp file ("sources" section) and to cppsrc/main.cpp
- for class the logic is the same as for functions (it just split between classexample and actualclass)
- keep in mind that each time you make changes to C++ implementations it needs to be re-compiled ('npm run build' or 'node-gyp rebuild'). 'npm start' both rebuilds it and runs index.js file

That's it. You can use it in your js (see index.js).

Implemented by the brilliant manual:
https://medium.com/@atulanand94/beginners-guide-to-writing-nodejs-addons-using-c-and-n-api-node-addon-api-9b3b718a9a7f
