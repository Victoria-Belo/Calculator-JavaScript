class Calculator{
   constructor(n01, n02, symbol){
        this.n01= n01;
        this.n02= n02;
        this.symbol = symbol
   }

   add(n01, n02){
    return n01 + n02;
   }

   sub(n01, n02){
    return n02 - n01;
   }

   multiplication(n01, n02){
    return n01 * n02;
   }

   division(n01, n02){
    if (n02 <= 0){
        return '🛇';
    }
    return n01/n02;
   }

   clear(){
    return '';
   }

   result(n01, n02, symbol){ 
    if (symbol === '+'){
        return this.add(n01,n02);
    }
    else if (symbol === '-') {
        return this.sub(n01,n02);
    } 
    else if (symbol === '÷') {
        return this.sub(n01,n02);
    } else {
        return this.multiplication(n01,n02);
    }
   }

}
