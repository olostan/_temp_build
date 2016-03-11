
import "./test.less!";
import {Dep} from './dep';


interface IA { 
   do();
}

class A implements IA {
   do() { 
	var d = new Dep();
        d.foo();
	console.log("A.do !!!");
   }
}

console.log("index");
let a:IA = new A();
a.do();