// 1
let loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveSentence.match(/love/gi).length);

// 2
let becauseSentence = "You cannot end a sentence with because because because is a conjunction";
console.log(becauseSentence.match(/because/g).length);

// 3
const sentence =
"%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let clean = sentence.replace(/[%$@#&;]/g, "");
console.log(clean);

let words = clean.toLowerCase().split(/\s+/);

let frequency = {};

for (let word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
}

console.log(frequency);

// 4
let income =
"He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let numbers = income.match(/\d+/g);

let monthlySalary = Number(numbers[0]) * 12;
let annualBonus = Number(numbers[1]);
let onlineCourses = Number(numbers[2]) * 12;

let totalIncome = monthlySalary + annualBonus + onlineCourses;

console.log(totalIncome);