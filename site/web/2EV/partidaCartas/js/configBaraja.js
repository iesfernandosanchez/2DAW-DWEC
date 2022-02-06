let configBaraja = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function elementExistInArray(element, array){
    let exist = false;
    for (let index = 0; index < array.length; index++) {
        if(array[index].nombre == element){
            exist = true;
        }
    }
    return exist;
}

for (let index = 0; index < getRandomInt(10,20); index++) {
    const element = {
        'nombre': faker.animal.type(),
        'caracteristicas': 
            {
                'vida': getRandomInt(1,100),
                'puntuacion': getRandomInt(1,100),
                'fuerza': getRandomInt(1,100)
            }
    };
    if(!elementExistInArray(element.nombre, configBaraja)){
        configBaraja.push(element);
    }else{
        index--;
    }
}
