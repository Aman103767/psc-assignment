document.querySelector("form").addEventListener("submit", myfunction)
var dataArr = JSON.parse(localStorage.getItem("sdata"))||[];
function myfunction(){
    event.preventDefault();
    var img = form.image.value;
    var name = form.name.value;
    var batch = form.batch.value;
    var unit = form.unit.value;
    var course = form.course.value;
    var studentData = new Sdata(img,name,batch,unit,course);
      dataArr.push(studentData);
      localStorage.setItem("sdata",JSON.stringify(dataArr));
}
function Sdata(img,name,batch,unit,course){
    this.img = img;
    this.name = name;
    this.batch = batch;
    this.unit = unit ;
    this.course = course;
}
var obj = {}
for(var i = 0;i<dataArr.length;i++){
    if(obj[dataArr[i].batch] === undefined){
      obj[dataArr[i].batch] =1;
    }else{
      obj[dataArr[i].batch] += 1
    }
}
var count = 0;
for(let k in obj){
 
  
    var batch = document.createElement("h3")
  batch.innerText = k +" = " + obj[k]+  " || ";
  document.querySelector("#navname").append(batch);

 count++;}