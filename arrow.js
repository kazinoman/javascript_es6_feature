// Arraw function is a javascript es6 feature.

const fun = () => console.log("Hi, I am a arraw function.");
fun();

const function2 = (a, b) => a + b;
console.log(function2(2, 3));

//param => expression       ||one parameter and single exression no need to parenthisys and return.

function func() {
  return arguments;
}
func("fun");
