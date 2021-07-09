
function infos(sname,fname,mname,num,mail) {
    console.log("Name: " + sname);
    console.log("Father's Name: " + fname);
    console.log("Mother's Name: " + mname);
    console.log("Phone Number: " + num);
    console.log("Phone Number: " + num);


    var node = document.createElement("LI");
var textnode = document.createTextNode("Name: " + sname);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
var textnode = document.createTextNode("Father's Name: " + fname);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
var textnode = document.createTextNode("Mother's Name: " + mname);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
var textnode = document.createTextNode("Phone Number: " + num);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
var textnode = document.createTextNode("E-Mail: " + mail);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);


}