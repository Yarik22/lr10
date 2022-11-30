const nameDiv=document.createElement('div')
const resultDiv=document.createElement('div')
const attemptDiv=document.createElement('div')
const firstCol=document.querySelectorAll('.first__collumn')
const secondCol=document.querySelectorAll('.second__collumn')
const thirdCol=document.querySelectorAll('.third__collumn')
const rollBtn=document.getElementById('roll')
const fruits=['raspberry','banana','peach','grape','apple','plum']
let nickname=prompt(`Input your nickname`)
let attempts=0
while(nickname==null||nickname.trim()=='')
{
    nickname=prompt(`Input your nickname correctly`)
}
nameDiv.style="font-weight:bold;color:white;text-align:center;font-size:2rem;"
attemptDiv.style="font-weight:bold;color:white;text-align:center;font-size:2rem;font-style:italic"
resultDiv.style="font-weight:bold;text-align:center;font-size:3rem;"
nameDiv.textContent=nickname
document.body.prepend(attemptDiv)
document.body.prepend(nameDiv)

function roll() {
    attempts++
    attemptDiv.textContent=`${attempts} attempt out of 3`
    const setArr1=new Set()
    const setArr2=new Set()
    const setArr3=new Set()
    if(attempts==3){
        rollBtn.style.display='none'
    }
    while(setArr1.size!=3){
        setArr1.add(Math.floor((Math.random()*6)))
    }
    while(setArr2.size!=3){
        setArr2.add(Math.floor((Math.random()*6)))
    }
    while(setArr3.size!=3){
        setArr3.add(Math.floor((Math.random()*6)))
    }
    const Arr1=[...setArr1]
    const Arr2=[...setArr2]
    const Arr3=[...setArr3]
    for (const key in Arr1) {
        firstCol[key].setAttribute('src',`img/${fruits[Arr1[key]]}.png`)
    }
    for (const key in Arr2) {
        secondCol[key].setAttribute('src',`img/${fruits[Arr2[key]]}.png`)
    }
    for (const key in Arr3) {
        thirdCol[key].setAttribute('src',`img/${fruits[Arr3[key]]}.png`)
    }
    for (let i = 0; i < 3; i++) {
        if(Arr1[i]==Arr2[i]&&Arr2[i]==Arr3[i]){
            resultDiv.style.color='green'
            document.body.append(resultDiv)
            resultDiv.textContent='You win'
            rollBtn.style.display='none'
        }
        else if(attempts==3){
            resultDiv.style.color='red'
            resultDiv.textContent='You lose'
            document.body.append(resultDiv)
        }
    }
}

rollBtn.addEventListener('click', roll)
