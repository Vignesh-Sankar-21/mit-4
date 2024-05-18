function press(){
    var names=document.getElementById("names").value
    var email=document.getElementById("email").value
    var line=document.getElementById("line")
    if(names.length>0&&email.length>0){
        var arr=[]
        arr.push({
            name:names,
            email:email
        })
        localStorage.setItem('list',JSON.stringify(arr))
        var div=document.createElement('div')
        div.style.width="1100px"
        div.style.height="80px"
        div.style.backgroundColor="white"
        div.style.border="solid 1px black"
        div.style.borderRadius="10px"
        div.style.paddingTop="5px"
        div.style.color="white"
        div.style.paddingLeft="30px"
        div.style.marginBottom="15px"
        div.style.marginTop="15px"
        div.innerHTML=`<h3 class="h3-js">${names}</h3><h3 class="h3-js1">${email}</h3><button class="btn2" id="deletebutton" click="deletion()">Delete</button>`
        line.append(div)
      }
      
     
    }
    
    
