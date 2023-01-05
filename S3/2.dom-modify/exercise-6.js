const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let listul = document.createElement("ul");
document.body.appendChild(listul);
lista=0;
for (let i = 0; i < apps.length; i++) {
    const element = apps[i];
    let listli = document.createElement("li");
    listul.appendChild(listli);
    listli.textContent=element;
   
}