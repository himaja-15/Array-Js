var ArrayItems = [];
var len=prompt("Enter length of the array");
for(var i = 1;i<=len;i++)                                                           
{   
    var x = prompt("Enter element "+i);   
    ArrayItems.push(x);                              

}
console.log("Input Array Items: "+ArrayItems);     
function arrayOp(ArrayItems) {
	let sumVal = 0;
    let maxVal=Math.max.apply(Math, ArrayItems);
	for (let i in ArrayItems) {
      sumVal += +ArrayItems[i];
    }
    let op={
        sum:sumVal,
        max:maxVal
    }
  return op;
}
console.log(arrayOp(ArrayItems));