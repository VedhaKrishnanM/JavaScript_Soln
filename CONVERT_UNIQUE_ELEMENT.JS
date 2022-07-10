function fd(arraya){
  var maxi=Math.max(...arraya)

      var sol =arraya.map((a)=>+a-maxi)
      var dd=sol.splice(sol.indexOf(maxi),1)
      return sol
}                                                                 //THIS FN REMOVE MAX ELE IN ARR SUBTRACT IT WITH ALL ELE




function UniqueArrayCount(arraya,c){


var obj ={}
  for(i=0;i<arraya.length;i++){
  obj[arraya[i]]=(obj[arraya[i]]||0)+1
  }
  var dd=Object.keys(obj).filter((a)=>obj[a]===1)
 
  if(dd.length===arraya.length){
   return c
  }
  else{
  
   return UniqueArrayCount(fd(arraya),c+1)
  }
  
}

console.log(UniqueArrayCount([2,1,4,5,6,6,5,5,5,9,9,9,8,8],0))