
let getbut = document.getElementById("getbut");
let postbut = document.getElementById("postbut");

postbut.addEventListener("click", rebuildpage);
getbut.addEventListener("click", rebuildGet);

function rebuildpage(arg)
{
    let password = document.getElementById("pasw").value;
    let login = document.getElementById("log").value;
    
    
    let xhr = new XMLHttpRequest();
    
    let body = "login="+login+"&password="+password;
    xhr.open("POST", "/ServletsDz/UniversServlet",false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    
    if(xhr.status === 200)
    {
        let delForm = document.getElementById("logform");
        let formParent = delForm.parentNode;
        formParent.removeChild(delForm);
        //вынимаем JSON данные
        let logp = document.createElement('p');
        let pasp = document.createElement('p');
        let valp = document.createElement('p');
        let datp = document.createElement('p');
        let uagp = document.createElement('p');
                
        let res = JSON.parse(xhr.responseText);
          
        let pDiv = document.createElement('div');
        
        
        logp.innerText = 'Login: '+res.login+'';
        pasp.innerText = 'Password: '+res.password+'';
        valp.innerText = 'Valid: '+res.valid+'';
        datp.innerText = 'Date: '+res.date+'';
        uagp.innerText = 'User-Agent: ' + res.userag+'';
        
        let cls = document.createAttribute("class");
        cls.value = "adata";
        pDiv.setAttributeNode(cls);
        pDiv.appendChild(logp);
        pDiv.appendChild(pasp);
        pDiv.appendChild(valp);
        pDiv.appendChild(datp);
        pDiv.appendChild(uagp);
        formParent.appendChild(pDiv);
    }//end if
}//end function

function rebuildGet(arg)
{
    let password = document.getElementById("pasw").value;
    let login = document.getElementById("log").value;
    
    
    let xhr = new XMLHttpRequest();
    
    let body = "login="+login+"&password="+password;
    xhr.open("GET", 
        "/ServletsDz/UniversServlet?login="+login+"&password="+password,false);
    xhr.send();
    
    if(xhr.status === 200)
    {
        let delForm = document.getElementById("logform");
        let formParent = delForm.parentNode;
        formParent.removeChild(delForm);
        //вынимаем JSON данные
        let logp = document.createElement('p');
        let pasp = document.createElement('p');
        let valp = document.createElement('p');
        let datp = document.createElement('p');
        let uagp = document.createElement('p');
                
        let res = JSON.parse(xhr.responseText);
          
        let pDiv = document.createElement('div');
        
        
        logp.innerText = 'Login: '+res.login+'';
        pasp.innerText = 'Password: '+res.password+'';
        valp.innerText = 'Valid: '+res.valid+'';
        datp.innerText = 'Date: '+res.date+'';
        uagp.innerText = 'User-Agent: ' + res.userag+'';
        
        let cls = document.createAttribute("class");
        cls.value = "adata";
        pDiv.setAttributeNode(cls);
        pDiv.appendChild(logp);
        pDiv.appendChild(pasp);
        pDiv.appendChild(valp);
        pDiv.appendChild(datp);
        pDiv.appendChild(uagp);
        formParent.appendChild(pDiv);
    }//end if
}//end rebuildGet