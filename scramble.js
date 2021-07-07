const msg =document.querySelector('.msg');
const guess =document.querySelector('input');
const btn =document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let sWords =['python','java','javascript','react','angular','android','programmer','developer','microsoft','ant',	'bear',	'bee',	'bird',	'cat',	'chicken',	'cow',	'dog',	'elephant',	'fish',	'fox',	'frog',	'giraffe',	'horse',	'lamb',	'panda',	'penguin',	'pig',	'rabbit',	'seahorse',	'shark',	'sheep',	'snail',	'snake',	'spider',	'squirrel',	'toucan',	'turkey',	'turtle',	'whale',	'zebra',	'apple',	'avocado',	'banana',	'bell pepper',	'blackberry',	'blueberry',	'cabbage',	'carrot',	'cherry',	'corn',	'cucumber',	'eggplant',	'garlic',	'grapes',	'kiwi',	'lemon',	'melon',	'mushroom',	'onion',	'orange',	'peach',	'pear',	'pineapple',	'plum',	'raspberry',	'strawberry',	'tomato',	'watermelon',	'zucchini',	'bathtub',	'bed',	'broom',	'computer',	'cup',	'door',	'fork',	'fridge',	'frying pan',	'glass',	'mixer',	'hanger',	'iron',	'knife',	'ladle',	'bulb',	'microwave',	'mirror',	'oven mitt',	'pan',	'plate',	'sink',	'sofa',	'spoon',	'table',	'tap',	'toaster',	'toilet',	'trash can',	'wardrobe',	'window',	'acorn',	'autumn',	'bug',	'butterfly',	'cactus',	'cloud',	'feather',	'fir tree',	'flower',	'grass',	'holly',	'leaf',	'mountain',	'palm tree',	'rain',	'rainbow',	'reed',	'rose',	'spring',	'stone',	'summer',	'tree',	'volcano',	'winter',	'black',	'blue',	'brown',	'green',	'orange',	'pink',	'purple',	'red',	'white',	'yellow',	'bag',	'belt',	'boot',	'cap',	'dress',	'hat',	'heels',	'jeans',	'tie',	'panties',	'pants',	'shirt',	'shoes',	'sneakers',	'socks',	'suit',	'sweater',	'tee shirt',	'thongs',	'arm',	'bandage',	'blood',	'brain',	'ear',	'embryo',	'eye',	'foot',	'hand',	'heart',	'kidney',	'knee',	'lungs',	'mouth',	'pills',	'syringe',	'skeleton',	'skull',	'teeth',	'thermometer',	'thumb',	'badminton',	'baseball',	'basketball',	'biking',	'bowling',	'boxing',	'cricket',	'golf',	'ice hockey',	'jogging',	'soccer',	'swimming',	'tennis',	'whistle',	'surfing',	'windsurfing',	'ant',	'bear',	'bee',	'bird',	'cat',	'chicken',	'cow',	'dog',	'elephant',	'fish',	'fox',	'frog',	'giraffe',	'horse',	'lamb',	'panda',	'penguin',	'pig',	'rabbit',	'seahorse',	'shark',	'sheep',	'snail',	'snake',	'spider',	'squirrel',	'toucan',	'turkey',	'turtle',	'whale',	'zebra',	'apple',	'avocado',	'banana',	'bell pepper',	'blackberry',	'blueberry',	'cabbage',	'carrot',	'cherry',	'corn',	'cucumber',	'eggplant',	'garlic',	'grapes',	'kiwi',	'lemon',	'melon',	'mushroom',	'onion',	'orange',	'peach',	'pear',	'pineapple',	'plum',	'raspberry',	'strawberry',	'tomato',	'watermelon',	'zucchini',	'bathtub',	'bed',	'broom',	'computer',	'cup',	'door',	'fork',	'fridge',	'frying pan',	'glass',	'mixer',	'hanger',	'iron',	'knife',	'ladle',	'bulb',	'microwave',	'mirror',	'oven mitt',	'pan',	'plate',	'sink',	'sofa',	'spoon',	'table',	'tap',	'toaster',	'toilet',	'trash can',	'wardrobe',	'window',	'badminton',	'baseball',	'basketball',	'biking',	'bowling',	'boxing',	'cricket',	'golf',	'ice hockey',	'jogging',	'soccer',	'swimming',	'tennis',	'whistle',	'surfing',	'windsurfing']; 

const createNewWords = ()=>{
    let ranNum =Math.floor(Math.random() * sWords.length);
    // console.log(ranNum);
     let newTempSwords =sWords[ranNum]; 
    //  console.log(newTempSwords.split(""));
     return newTempSwords; 
}
const scrambleWords=( arr )=>{
    for(let i= arr.length-1;i>0;i--){
        let temp=arr[i];
        // console.log(temp);
        let j=Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="GUESS";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML=`Guess the word : ${randWords}`;
    }
    else{
        let tempWord=guess.value;
        if(tempWord===newWords){
            console.log("correct");
            play=false;
            msg.innerHTML=`Awesome !!! ${newWords} is correct.`;
            btn.innerHTML="Start Again";
            guess.classList.toggle('hidden');
            guess.value=""; 
        }else{
            console.log("incorrect");
            msg.innerHTML=`Sorry Boss it's Incorrect.PLEASE TRY AGAIN ${randWords}`;
        }
    }
})
