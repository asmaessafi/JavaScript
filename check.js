function ReverseaString(ch) {
    var re = '';
    for (var i = ch.length - 1; i >= 0; i--) {
        re += ch[i];
    }
    return (re);
}

// console.log(ReverseaString('abc'))

function CountCharacters(str) {
    var c = 0
    for (var i = 0; i < str.length; i++) {
        c = c + 1;
    }
    return c
}
// console.log(CountCharacters('abc2lj58h'))

function CapitalizeWords(sentence) {
        var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
    }
    // console.log(CapitalizeWords('turn it to upper case'))



function FindMaximumandMinimum(tab) {
    var min = Math.min(...tab);
    var max = Math.max(...tab);
    return [min, max];

}
// console.log(FindMaximumandMinimum([2,1,4,5,2,9,1,8]))

function SumofArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
// console.log(SumofArray([2,1,4,5,2,9,1,8]))

function FilterArray(arr) {
    var tab=[]
 for (var i=0; i<arr.length; i++){
   if(i%2==0){
    tab.push(arr[i]);
   }
 }
 return(tab)
}
// console.log(FilterArray([0,1,5,8,6,5,3]))

function Factorial(num) {
    var i = 1;
    var F = 1;
    while (i <= num) {
        F *= i;
        i += 1;
    }
    return F;
}
// console.log(Factorial(5))

function PrimeNumberCheck(N) {
    for (var i = 2; i <= N / 2; i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(PrimeNumberCheck(11))

function FibonacciSequence(rep) {
    if(rep==0){return[]}
    var tab = [0, 1];
    for (var i = 2; i <= rep; i++) {
        tab.push(tab[i-1] + tab[i-2]);
    }
    return tab
}
// console.log(FibonacciSequence(2))



