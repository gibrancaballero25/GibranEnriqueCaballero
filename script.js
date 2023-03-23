
const target =document.queryselectorAll('[data-target]')
const content =document.queryselectorAll('[data-content]')

tergets.forEach(target => {  
    target.addEventlistener('click', () => {       
        content.forEach(c => {           
        c.classlist.remove('active')
        })       
   const t = document.queryselector(target.dataset.terget)   
   t.classlist.add('active')    
})
})