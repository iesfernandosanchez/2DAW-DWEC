class App{
    constructor(collectionData, itemId){
        var panel = document.querySelector(itemId);
        var templatePersona = document.querySelector('#persona');
        for (let index = 0; index < collectionData.length; index++) {
            const element = collectionData[index];
            var cloneItemPersona = document.importNode(templatePersona.content, true);
 
            var namePersona = cloneItemPersona.querySelector('#name');
            namePersona.innerHTML = element['name'];

            var descriptionPersona = cloneItemPersona.querySelector('#description');
            descriptionPersona.innerHTML = element['description'];

            var cardPerson = cloneItemPersona.querySelector('.card');
            if(element['sex']=='M'){
                cardPerson.classList.add('masculino');
            }else{
                cardPerson.classList.add('femenino');
            }

            console.log(cardPerson.classList);
            panel.appendChild(cloneItemPersona);            
        }
    }
}