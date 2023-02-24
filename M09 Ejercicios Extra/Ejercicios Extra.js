/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { forEach } = require("../M08 JavaScript Callback/homework")

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let b=[]
   let c=[]
   let d=objeto
   for(let prop in d) {
      c[0]=prop
      c[1]=objeto[prop]
      b.push(c)
      c=[]
   } 
   return b
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let requisito={}
   let b= string.split('')
   b.forEach(numero => {
      requisito[numero]=(requisito[numero] || 0) + 1 
   })
   return requisito

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var b= string.split('') 
   var c=[]
   var d=[]
   b.forEach(element => {
      if (element===element.toUpperCase()) {
         c.push(element)
      } else if (element===element.toLowerCase()) {
         d.push(element)
      }
   });
   return c.join('')+d.join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var b=[] 
   var c=frase.split(' ')
   for (let i=0;i<c.length;i++){
      b.push(c[i].split('').reverse().join(''))
   }
   return (b.join(' '))
   // var b=frase.split(' ')
   // var d=[]
   // for (let i=0;i<b.length;i++){
   //  d.push(b[i].split('').reverse().join(''))
   // }
   // return (d.join(' '))
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   // let d=numero.toString().split('').reverse().join('')
   // if (d==numero) return ("Es capicua")
   // else return ("No es capicua")
   numero=numero.toString()
   if (numero.split("").reverse().join('')===numero) return "Es capicua"
   else return "No es capicua" 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   b= string.split('').filter(nombre=>{
      if (nombre!=="a"&&nombre!=="b"&&nombre!=="c") return nombre
   })

   return b.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let b= arrayOfStrings.sort(function(a,b){
      return (a.length-b.length)
   })
   return b

}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter(e=>{
      return array2.includes(e)
   }
   )
   // let b=array1.filter(e=>{
   //    if (array2.includes(e)) return e
   // })
   // return b
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
