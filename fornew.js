

document.getElementById("ppp").addEventListener("click",xyz);


function xyz (){
var a = document.getElementById("cal1").value
var b = document.getElementById("cal2").value
var c =  Number(a)+ Number(b);

document.getElementById("cal3").value = c};


document.getElementById("div1").addEventListener("click",mng);


function mng(){
	var k = document.getElementById("input").value
	var p = new Number(k);

	if(p == 0){
		alert("PLEASE FILL VAILD NUMBER");
	
	}else if(p % 2 == 0){
		alert("THIS IS A EVEN NUMBER");
	
	}else{
		alert("THIS IS A ODD NUMBER");
	}

};

document.getElementById("div2").addEventListener("click",mango);

function mango(){
	var k = document.getElementById("input").value
	var a =  Number(k)

	if(a==1 || a==2){
	alert("prime")	
	}


for(var m = 2;m<a ;m++){
	 if (a%m == 0){
	alert("composite")
	console.log(m)
	break}else if(m ==a-1){
	alert("prime");
	}else{
		continue;
	}
}
};
document.getElementById("btn").addEventListener('click',function(){


	var a = document.getElementById("color").style.background = "#" + Math.ceil(Math.random()* 1000000);
	console.log(a);
})





