let url = "http://universities.hipolabs.com/search?name=";

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("#list");
btn.addEventListener("click", async () => {
    let country = inp.value;
    let allCollege = await getCollege(country);
    ul.innerText = "";
    
    for(college of allCollege){
        let li = document.createElement("li");
        li.innerText = college.name;
        ul.appendChild(li);
    }
    inp.value = "";

})

async function getCollege(country){
    try{
        let collegeArr = await axios.get(url + country);
        return collegeArr.data;
    }catch(e){
        return e;
    }
   
}


