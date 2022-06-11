// function info() {
//     var name=document.getElementById('firstName').value;
//     var lastName =document.getElementById('lastName').value;
//     var email=document.getElementById('email').value;
//     var password=document.getElementById('password').value;
//     document.write('Name  '+name+'<br>')
//     document.write('Lastname   '+lastName+'<br>')
//     document.write('Email  '+email+'<br>')
//     document.write('Password  '+password+'<br>')

// }
// Question # 2;
// function readMore(){
//     var description='reiciendis, saepe optio nisi dolorum in repellat suscipit itaque aliquid ea iusto quasi blanditiis illum ex nam, officia ipsam neque doloribus';
//     var pera=document.getElementById('pera');
//     pera.innerHTML +=description
// }

// Question # 3;
// var table = document.getElementById('recordTable')

// function addRecord(){
//     var studentName = document.getElementById('stdName')
//     var studentClass = document.getElementById('stdClass')
//     var row = document.createElement('tr')
//     var nametd = document.createElement('td')
//     var classtd = document.createElement('td')
//     var edittd = document.createElement('td')
//     var deletetd = document.createElement('td')
//     var nameText = document.createTextNode(studentName.value)
//     var classText = document.createTextNode(studentClass.value)
//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode("Edit")
//     editBtn.setAttribute('onclick','editRecord(this)')
//     editBtn.appendChild(editText)
//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode("Delete")
//     delBtn.setAttribute('onclick','deleteRecord(this)')
//     delBtn.appendChild(delText)
    
//     nametd.appendChild(nameText)
//     classtd.appendChild(classText)
//     edittd.appendChild(editBtn)
//     deletetd.appendChild(delBtn)
//     row.appendChild(nametd)
//     row.appendChild(classtd)
//     row.appendChild(edittd)
//     row.appendChild(deletetd)
//     table.appendChild(row)

//     studentName.value = ""
//     studentClass.value = ""
// }

// function editRecord(e){
//     var val = e.parentNode.parentNode.firstChild.innerText
//     var newVal = prompt("Edit your record",val)
//     var classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
//     var newClass = prompt("Edit your Class",classval)
//     e.parentNode.parentNode.firstChild.innerText = newVal
//     e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
// }

// function deleteRecord(e){
//     e.parentNode.parentNode.remove()
// }

