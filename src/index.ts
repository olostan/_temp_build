
import "./test.less!";
import {Dep} from './dep';
import UIF from "ui/ui-framework";

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

console.log("index, UIF=",UIF);
let a:IA = new A();
a.do();