
const dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
const date = new Date()

function weekDay(){
    return dayName[date.getDay()]
}

console.log(date.get)