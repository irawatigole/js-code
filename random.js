
function randomElement(items){
    
    if (items.length == 0){
        return 'empty array';
    }

 else  {
   var random =  items[Math.floor(Math.random()*items.length)]
    return random;
   }
}
   console.log(randomElement([10,20,30,40]));
   console.log(randomElement([]));
