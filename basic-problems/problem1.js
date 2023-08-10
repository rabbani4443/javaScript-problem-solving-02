/*

তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।

*/


function isInteger(number){
    if( typeof number !== 'number' ){
        return 'Please Input a valid number';
    }
    else if(number%1 === 0){
        return true;
    }
    else{
        return false;
    }
}

console .log ( isInteger(2))     //Output = ture
// console .log ( isInteger(2.5))      //Output = false


// ================== shortcut =================  Cannot be used in assignments  ======================      
// ================== shortcut =================  Cannot be used in assignments  ======================   

function isInteger2(number2) {
    return Number.isInteger(number2);
}

console .log ("ShortCut", isInteger2(5.66), )


