const one=document.querySelector(".one")
const two=document.querySelector(".two")

const res=document.querySelector(".res")

const inp=document.querySelector(".inp")

const gen=document.querySelector(".gen")
const per=document.querySelector(".per")

gen.addEventListener("click", genf)
per.addEventListener("click", perf)

one.textContent=Math.round(Math.random()*100)
two.textContent=Math.round(Math.random()*100)

function genf() {
    one.textContent=Math.round(Math.random()*100)
    two.textContent=Math.round(Math.random()*100)
}
function perf() {
    if (one.textContent*two.textContent==inp.value) {
        res.textContent="правильно"
    } else {
        res.textContent="неправильно"
    }
    
}
