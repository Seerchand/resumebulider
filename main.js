function getfile(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState === 4 && xhr.status=="200")
    {
      callback(xhr.responseText);

    }
  };
  xhr.send(null);
}
getfile("d.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.careerobjectives);
})
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
  var text=document.createElement("h1");
  text.textContent="CAREER OBJECTIVES:"
  childs.appendChild(text);
  var obj=document.createElement("h2");
  obj.textContent = careerinfo.info;
  childs.appendChild(obj);
}
