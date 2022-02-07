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

            panel.appendChild(cloneItemPersona);            
        }
    }
}