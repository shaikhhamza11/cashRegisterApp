const billAmount = document.querySelector('#bill-amount')
const cashAmount = document.querySelector('#cash-given')
const checkBtn = document.querySelector('#check-btn')
const errorMessage = document.querySelector('#error-msg')
const notes = document.querySelectorAll('.notes')
const nextButton = document.querySelector('#next')
const label  = document.querySelector('#label')
let changeNotes = [2000,500,100,20,10,5,1]

checkBtn.style.display ='none'
cashAmount.style.display=  'none'
label.style.display='none'
nextButton.addEventListener('click',()=>{
    if(billAmount.value > 0){
        checkBtn.style.display ='block'
        cashAmount.style.display=  'inline'                
        label.style.display='inline'
        checkBtn.addEventListener('click',()=>{
    
            if(billAmount.value <= cashAmount.value){
             const amountToBeReturned = cashAmount.value - billAmount.value
     
             calculateChange(amountToBeReturned)
         }
         else{
             showError('The cash amount should be greater than or equal to bill amount')
         }
     
     })
    }
    
    else{
        showError('The bill should be great than zero')
    }
})


const showError = (text)=>{
    errorMessage.style.display='block'
    errorMessage.innerText= text
}
const calculateChange = (amountToBeReturned)=>{
    for(let i=0; i<changeNotes.length;i++)
    {
        const numberOfNotes =Math.trunc(amountToBeReturned/changeNotes[i])
        amountToBeReturned %= changeNotes[i]
        notes[i].innerText = numberOfNotes
    }
}


