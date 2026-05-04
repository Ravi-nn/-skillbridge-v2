function showPage(p){
 document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
 document.getElementById(p).classList.remove("hidden");
}

function generateRoadmap(){
 const skill = document.getElementById("skill").value;
 const list = document.getElementById("roadmapList");
 list.innerHTML="";
 const steps = ["Basics","Intermediate","Projects","Advanced","Job Ready"];
 steps.forEach(s=>{
   let li=document.createElement("li");
   li.innerText=skill+" - "+s;
   list.appendChild(li);
 });
}

// fake stats
document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("stats").innerHTML =
  "<p>Progress: 40%</p><p>Streak: 5 days</p>";
});
