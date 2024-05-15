// 1. Find the maximum element in an array.

const array = [5, 2, 8, 10, 3];

let max=array[0]

const maxFun =()=>{
    
    for(let i=0;i<array.length;i++){
        // console.log(i)
        if(max<array[i]){
            max=array[i]
        }
    }

    return max
}
console.log(maxFun(array)
)
// 2. Find the minimum element in an array.



