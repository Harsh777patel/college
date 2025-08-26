//Adding a new element in a array using spread method?
function pureEle(arr,ele){
    return[...arr,ele]
}
let arr1=[1,2,3,4,5];

console.log(pureEle(arr1,6));
