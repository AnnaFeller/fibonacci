function Range(from, to) {
    this.from = from;
    this.to = to;
    this[Symbol.iterator] = function () {
        return {
            current: from,
            last: to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    };
}

export function fibonacci(quantity) {
    const fibo1_8 = new Range(0,quantity -1)
    const fib=[];

    let from = 1;
    let to = 1;

    for(const i of fibo1_8){
        if(i<2){
            fib.push(1);
        }else {
            const next = from + to
            fib.push(next);
            from = to;
            to = next
        }
    }
return fib;
}

console.log(fibonacci(9));

// [1] = 1
//[2]= 1
//[n]=[n-1]+[n-2]
//if quantity = 8 then 1, 1, 2, 3, 5, 8, 13,21...