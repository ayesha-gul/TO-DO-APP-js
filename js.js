/*var ul = document.getElementById("list");
function add() {
    var input = document.getElementById("text");
    var create = document.createElement('li');
    var text = document.createTextNode(input.value);

    create.appendChild(text);

    var btn = document.createElement('button'); //   <button></button>
    var btntext = document.createTextNode('edit'); // edit
    btn.appendChild(btntext); // <button>edit</button>
    create.appendChild(btn);
    btn.setAttribute('onclick','edit(this)');

    var dbtn = document.createElement('button');
    var dtext = document.createTextNode('dell');
    dbtn.appendChild(dtext);
    dbtn.setAttribute('onclick','del(this)');
    create.appendChild(dbtn);
    
   


    ul.appendChild(create);
    
}
function edit(e) {
    var value = e.parentNode.firstChild.nodeValue;
    var nvalue = prompt("enter new value",value);
    e.parentNode.firstChild.nodeValue = nvalue;
}
function del(d) {
    d.parentNode.remove();
}
function erase() {
    ul.innerHTML = " ";
} */
var r = document.getElementById('daba');
console.log(r);
function add() {
    var aisha = document.getElementById('text');
    var para = document.createElement('p');
   var parav = document.createTextNode(aisha.value);
   para.appendChild(parav);
   var btn = document.createElement('button');
   var btntext = document.createTextNode('edit');
   btn.appendChild(btntext);
   btn.setAttribute("onclick",'edit(this)'); 
    para.appendChild(btn);

    var dbtn = document.createElement("button");
    var dtext = document.createTextNode('del');
    dbtn.appendChild(dtext);
    dbtn.setAttribute("onclick",'khtm(this)');
    para.appendChild(dbtn);



    aisha.value ="";
    r.appendChild(para);
    console.log(r);
}
function edit(e) {
    var value = e.parentNode.firstChild.nodeValue;
    var nvalue = prompt("enter new value",value);
    e.parentNode.firstChild.nodeValue = nvalue;
}
function khtm(d) {
    d.parentNode.remove();

}
function erase() {
    r.innerHTML = " ";
}