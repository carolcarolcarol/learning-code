function hongbao(total,num){
  let arr=[];
  let restamount=total;
  let restnum=num;
  for(let i=0;i<num-1;i++){
    let amount=total/num;
    arr.push(amount);
    restamount-=amount;
    
    
  }
  arr.push(restamount);
  return arr;


}
console.log(hongbao(5,40));