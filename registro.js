let btnregistro = document.querySelector("#registro");
let registro = document.querySelector("#registro");
let contador=0;

if(registro){
	registro.addEventListener("click",function() {
	guardar();
});

}

function guardar (){
	var a= document.getElementById('email').value;
	if(a!="")
	{
	
	}else{
		contador++;
	}
	var b= document.getElementById('contraseña').value;
	if(b!="")
	{
	
	}else{
		contador++;
	}
	var c= document.getElementById('nombre').value;
	if(c!="")
	{
	
	}else{
		contador++;
	}
	var d= document.getElementById('apellido').value;
	if(d!="")
	{
	
	}else{
		contador++;
	}
	if(contador<1)
	{
		localStorage.setItem("emailuser",a);
		localStorage.setItem("contraseñauser",b);
		localStorage.setItem("nombreuser",c);
		localStorage.setItem("apellidouser",d);
		alert("Registrado con exito!");
		window.close("registro.html");
		window.open("./login.html");
	}else{
		alert("Intentalo otra vez campos sin llenar");
		localStorage.setItem("emailuser","");
		localStorage.setItem("contraseñauser","");
		localStorage.setItem("nombreuser","");
		localStorage.setItem("apellidouser","");
	}
}
//Login parte
let entrar = document.querySelector("#entrar");
if(entrar)
{
	entrar.addEventListener("click",function() {
	inicio();
	
});
}


function inicio(){
	var mail= document.getElementById('email').value;
	var mailstorage=localStorage.getItem("emailuser");
	var pass= document.getElementById('contraseña').value;
	var passstorage=localStorage.getItem("contraseñauser");
	var en=0;
	if(mail==mailstorage){
		if(pass==passstorage)
		{
			alert("Bievenid@ "+localStorage.getItem("nombreuser"))
			window.open("./index.html");
			window.close("./login.html");
		}else{
			alert("Contraseña incorrecta")
		}
	}else{
		ent++;
		if(en>1){
			alert("No se encontro usuario");
		}
	}
}
//productos
var lente=4;
var playera=3;
var taza=2;
var sombrero=4;

if(localStorage.getItem('lente') || localStorage.getItem('playera') || localStorage.getItem('taza') || localStorage.getItem('sombrero')){
}else{
localStorage.setItem("lente",lente);
localStorage.setItem("playera",playera);
localStorage.setItem("taza",taza);
localStorage.setItem("sombrero",sombrero);
}


let c1 = document.getElementById("lente");
let c2 = document.getElementById("playera");
let c3 = document.getElementById("taza");
let c4 = document.getElementById("sombrero");

if(c1){
	c1.addEventListener("click",function(){
	if(localStorage.getItem("lente")>0)
	{
	alert("Se añadio al carrito lente");
	var cont=localStorage.getItem('lente');
	cont=cont-1;
	alert("lentes restantes:"+cont);
	localStorage.setItem("lente",cont);
	}
	if(localStorage.getItem("lente")<1)
{	
	c1.style.color="black";
	c1.style.background="#dbdee0";
}

});
}
	if(localStorage.getItem("lente")<1)
{	
	if(c1)
	{
		c1.style.color="black";
	c1.style.background="#dbdee0";
	}
	
}
if(c2){
	c2.addEventListener("click",function(){
	if(localStorage.getItem("playera")>0)
	{
	alert("Se añadio al carrito playera");
	var cont=localStorage.getItem('playera');
	cont=cont-1;
	alert("Playeras restantes:"+cont);
	localStorage.setItem("playera",cont);
	}
	if(localStorage.getItem("playera")<1)
{
	c2.style.color="black";
	c2.style.background="#dbdee0";
}
});
}
	if(localStorage.getItem("playera")<1)
{
	if(c2)
	{
		c2.style.color="black";
	c2.style.background="#dbdee0";
	}
	
}

if(c3){
	c3.addEventListener("click",function(){
	if(localStorage.getItem("taza")>0)
	{
	alert("Se añadio al carrito taza");
	var cont=localStorage.getItem('taza');
	cont=cont-1;
	alert("Tazas restantes:"+cont);
	localStorage.setItem("taza",cont);
	}
	if(localStorage.getItem("taza")<1)
{
	c3.style.color="black";
	c3.style.background="#dbdee0";
}
});
}
	if(localStorage.getItem("taza")<1)
{
	if(c3){
		c3.style.color="black";
	c3.style.background="#dbdee0";
	}
	
}
if(c4){
	c4.addEventListener("click",function(){
	if(localStorage.getItem("sombrero")>0)
	{
	alert("Se añadio al carrito sombrero");
	var cont=localStorage.getItem('sombrero');
	cont=cont-1;
	alert("Sombreros restantes:"+cont);
	localStorage.setItem("sombrero",cont);
	}
	if(localStorage.getItem("sombrero")<1)
{
	c4.style.color="black";
	c4.style.background="#dbdee0";
}

});
}
	if(localStorage.getItem("sombrero")<1)
{
	if(c4){
		c4.style.color="black";
	c4.style.background="#dbdee0";
	}
	
}
//Carrito
let cu1 = document.getElementById("uno");
let cu2 = document.getElementById("dos");
let cu3 = document.getElementById("tres");
let cu4 = document.getElementById("cuatro");
var cont="";

if(localStorage.getItem('lente')<4){
	if(cu1){
		cu1.style.background="none";
	}
	var i=4;
	i=i-localStorage.getItem('lente');
	cont+=" lente"+"("+i+")";
}
if(localStorage.getItem('playera')<3){
	if(cu2){
		cu2.style.background="none";
	}
	var i=3;
	i=i-localStorage.getItem('playera');
	cont+=" playera"+"("+i+")";
}
if(localStorage.getItem('taza')<2){
	if(cu4){
	cu4.style.background="none";
	}
	var i=2;
	i=i-localStorage.getItem('taza');
	cont+=" taza"+"("+i+")";
}
if(localStorage.getItem("sombrero")<4){
	if(cu3){
	cu3.style.background="none";
	}
	var i=4;
	i=i-localStorage.getItem('sombrero');
	cont+=" sombrero"+"("+i+")";
}
let comprar = document.getElementById("comprar");
if(comprar){
	comprar.addEventListener("click",function() {
	if(cont!="")
	{
	alert("Haz comprado"+cont);
	localStorage.removeItem("lente");
	localStorage.removeItem("playera");
	localStorage.removeItem("sombrero");
	localStorage.removeItem("taza");
	cu1.style.background="#00000080";
	cu2.style.background="#00000080";
	cu3.style.background="#00000080";
	cu4.style.background="#00000080";	
}else{
	alert("No tienes ningun producto en carrito")
}
	
});

}




