const array = [5645,1273,5420,6748,3455,3521];

for (i = 0; i < array.length; i++) {
 
  for(j = array.length - 1; j > i; j--) {
    
    if (array[i] > array[j]) {
      let n = array[i];
      array[i] = array[j];
      array[j] = n;
    }
  }
}
console.log(array);



  
