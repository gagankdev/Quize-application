const form = document.querySelector("form");
const result = document.querySelector("#out")
const answer ={
    q1:"Jupiter",
    q2:"Plasma",
    q3:"Mahatma Ghandhi",
    q4:"Berlin",
    q5:"China",
    q6:"Leonardo da Vinci",
    q7:"The Phantom of the Opera"
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    let finalScore = 0;
    for(let [name,value] of data.entries()){
        if(answer[name]==value){
            finalScore++;
        }
    }

    result.textContent = `You scored ${finalScore}/7`;
    result.classList.add("show")
    form.reset();
} )