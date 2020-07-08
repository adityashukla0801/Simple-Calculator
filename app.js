const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')
function cheackValue(){
if(input1.value == "" && input2.value == ""){
  alert('Please Enter Numbers')
}
}
document.querySelector('.add').addEventListener('click', function(e){
  cheackValue()
  const result = document.querySelector('.output')
  const add = Number(input1.value) + Number(input2.value)
  result.value = add
  e.preventDefault()
})

document.querySelector('.sub').addEventListener('click', function(e){
  cheackValue()
  const result = document.querySelector('.output')
  const  sub= Number(input1.value) - Number(input2.value)
  result.value = sub
  e.preventDefault()
})

document.querySelector('.mul').addEventListener('click', function(e){
  cheackValue()
  const result = document.querySelector('.output')
  const mul = Number(input1.value) * Number(input2.value)
  result.value = mul
  e.preventDefault()
})

document.querySelector('.div').addEventListener('click', function(e){
  cheackValue()
  const result = document.querySelector('.output')
  const div = Number(input1.value) / Number(input2.value)
  result.value = div
  e.preventDefault()
})

