

// На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

// input: [1, 2, 3]
// output: [2, 4, 6]
// input: [4, 1, 1, 1, 4]
// output: [8, 2, 2, 2, 8]
// input: [2, 2, 2, 2, 2, 2]
// output: [4, 4, 4, 4, 4, 4]

// task 1--------------------------------------------------------------
// const arr = [2,4,223232,2432,234242,3424,2342,342,2] 

// function arrDoble() {
//     const newarr = []
//     for (let prop in arr) {
//     newarr.push(arr[prop]*2)
//     }  
// return newarr
//   }

// console.log(arrDoble())

// task 2--------------------------------------------------------------'



// Напишите функцию, которая будет удалять каждый второй элемент в массиве. Цикл for использовать запрещено!

// input: ['Привет', 'Пока', 'Снова привет']
// output: ['Привет', 'Снова привет']
// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output: [1, 3, 5, 7, 9]
// input: ['Пока', {'Цвет': 'Синий'}]
// output: ['Пока']

// const arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function devlete(){
//     arr.filter((el,index)=>{
//         let idx= index +1
// if(  idx%2==0   ){

//     arr.splice(index,index)
// }

// })
// console.log(arr);
// }
// devlete()


// Task3
// Возьмите массив с числами, а верните массив, в котором отрицательные числа, становятся положительными, а положительные - отрицательными.

// input: [1, 2, 3, 4, 5]
// output: [-1, -2, -3, -4, -5]
// input: [1, -2, 3, -4, 5]
// output: [-1 ,2, -3, 4, -5]
// input: []
// output: []
// input: [0]
// output: [0]

// const arr = [-1, -2, 3, -4, -5 ]

// function hub(){
//     const newarr = []
//     for(let i in arr ){
//        if(Math.sign(arr[i])===-1 ){
//  newarr.push(Math.abs(arr[i]))

//        }else{
//         newarr.push(arr[i] - arr[i] - arr[i])
//        }

//     }
//     return newarr
// }
// console.log(hub());

//le festin
// -number + number + number


// Task4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый массив с тем кол-вом элементов с начала массива, которое было указано в числе.

// input: [0, 1, 2, 3, 5, 8, 13], 3
// output:  [0, 1, 2], 'Вернула первые три значения'
// input: [0, 1, 2, 3, 5, 8, 13], 5
// output:  [0, 1, 2, 3 , 5]

// const arr = [0, 1, 2, 3, 5, 8, 13]
// function dd(arr,num){return arr.slice(-1,num)};
// console.log(dd(arr,4));





// Task5
// Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве.

// input: [22, -6, 32, 82, 9, 25]
// output: [-6, 32, 25])
// input: [68, -1, 1, -7, 10, 10]
// output: [-1, 10]
// input: [11, -11]
// output [-11]

// const arr = []



// Task11
// Напишите функцию, которая принимает массив строк 
// и возвращает массив строк с четным количеством букв 

// Input: ['ab', 'abc', 'abcdsd'] 
// Output: ['ab', 'abcd']



// const arr = ['asasas','asasasa','a','aaa','asasas']

// function hub(){

//  const newarr = []
// for(let i in arr){
  
//     if(arr[i].length %2==0){

// newarr.push(arr[i])

//     }else{
//     }
// }
// return newarr
// }
// console.log(hub());
