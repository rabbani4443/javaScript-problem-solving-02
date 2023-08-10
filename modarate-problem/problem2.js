/*
Problem 2: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/

function gemsToDiamond(friend1, friend2, friend3){
    const gems1 = 21;
    const gems2 = 32;
    const gems3 = 43;

    if (typeof friend1 !== "number" || typeof friend2 !== "number" || typeof friend3 !== "number"){
        return "please provide me valid number input"
    }
    else if (friend1 < 0 || friend2 < 0 || friend3 < 0  ){
        return "please provide me valid number"
    }
    
    else if (friend1 %1 !== 0 || friend2 %1 !== 0 || friend3 %1 !== 0 ){
        return "please provide me valid integer number"
    }
    else{
        let total = (friend1 * gems1) + (friend2 * gems2) +(friend3 * gems3)
        if(total > 200 ){
            return total -= 2000;
        }
        else{
            return total;
        }
    }
}
console .log (gemsToDiamond(1, 1, 1))
console .log (gemsToDiamond(20, 200, 50))
console .log (gemsToDiamond(100, 5, 1))
