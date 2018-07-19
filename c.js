
var child=document.querySelector(".child1");
function details(det){
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

  var name=document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);

  var number=document.createElement("h3");
  number.textContent = det.mbno;
  child.appendChild(number);

  var mail = document.createElement("a");
  mail.href ="mailto:ammulu@7575";
  mail.textContent = det.mailid;
  child.appendChild(mail);
  var text=document.createElement("h3");
  text.textContent="ADDRESS:";
  child.appendChild(text);
  var address=document.createElement("h2");
  address.textContent = det.address;
  child.appendChild(address);
}
var childs=document.querySelector(".child2");
function career(careerinfo){
  var text=document.createElement("h2");
  text.textContent=("CAREER OBJECTIVES:");
  childs.appendChild(text);
  var hr=document.createElement("hr");
  childs.appendChild(hr);

  var obj=document.createElement("h2");
  obj.textContent = careerinfo.info;
  childs.appendChild(obj);
}

function educate(edu){

  var h=document.createElement("h2");
  h.textContent = ("EDUCATIONAL QUALIFICATION");
  childs.appendChild(h);

  var hr=document.createElement("hr");
  childs.appendChild(hr);

  for(i=0;i<edu.length;i++){
  var deg=document.createElement("h3");
  deg.textContent = edu[i].degree;
  childs.appendChild(deg);

  var edul=document.createElement("ul");
  var eduli=document.createElement("li");
  eduli.textContent = edu[i].institute;
  edul.appendChild(eduli);
  childs.appendChild(edul);


  var edul=document.createElement("ul");
  var eduli=document.createElement("li");
  eduli.textContent = edu[i].year;
  edul.appendChild(eduli);
  childs.appendChild(edul);
}
}

function skill(skl){

  var s = document.createElement("h2");
  s.textContent = ("TECHNICAL QUALIFICATIONS");
  childs.appendChild(s);

  var hr = document.createElement("hr");
  childs.appendChild(hr);

  var skilldata=document.createElement("table");
  skilldata.border="2";
  childs.appendChild(skilldata);

  tabledata="";
  for(i=0;i<skl.length;i++){
    tabledata+="<tr><td>"+skl[i].tittle+"</td><td>"+skl[i].data+"</td></tr>";
  }
  skilldata.innerHTML=tabledata;
}
function achievement(a){


    var lp = document.createElement("h2");
    lp.textContent = ("ACHIEVEMENTS");
    childs.appendChild(lp);

    var hr = document.createElement("hr");
    childs.appendChild(hr);

    for(i=0;i<a.length;i++){
    var com=document.createElement("ul");
    com.textContent = a[i].competition;
    childs.appendChild(com);
}
}
