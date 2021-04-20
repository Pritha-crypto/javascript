let cabTypes = ["micro", "mini", "prime"];
console.log(cabTypes);
//for loop
for(let i=0;i<cabTypes.length;i++){
    let type = cabTypes[i];
    console.log(type);
}
//for each loop
console.log("\n");
for(let type of cabTypes){
    console.log(type);
}
//check whether the element is present in or not in an array - using includes - it returns t/f //
console.log("contains", cabTypes.includes("micro"));