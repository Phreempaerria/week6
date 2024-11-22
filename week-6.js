console.log('Say Hello ')

let firstName = 'Paerwa'
let lastName = 'Juanjan'
let age = 16
console.log(`My Name is ${firstName} ${lastName}
I'm  ${age} year old`)
let num1 = 10
let num2 = 20
let sum = num1 / num2
let co = num1 == num2 
console.log(`Result : ${co}`)
let Name = firstName+' ' +lastName
console.log('Name :', Name)
console.log(2*(num1- num2)/2)
let height = 162
let weight = 65
let bmi = weight / ((height / 100) * (height / 100));
console.log(bmi)

if (bmi < 18.50) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์:น้ำหนักน้อย / ผอม
    ภาวะเสี่ยงต่อโรค:มากกว่าคนปกติ `)
} else if (bmi < 23.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์:ปกติ / สุขภาพดี
    ภาวะเสี่ยงต่อโรค:เท่าคนปกติ `)

} else if (bmi < 25.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์:ท้วม / โรคอ้วนระดับ 1
    ภาวะเสี่ยงต่อโรค:อันตรายระดับ 1 `)
} else if (bmi < 30.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์:อ้วน / โรคอ้วนระดับ 2
    ภาวะเสี่ยงต่อโรค:อันตรายระดับ 2 `)
} else if (bmi >=30.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์:อ้วน / โรคอ้วนระดับ 2
    ภาวะเสี่ยงต่อโรค: อันตรายระดับ 3 `)
}
