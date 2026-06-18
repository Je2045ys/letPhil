function calculateAverage(sc1, sc2, sc3) {
    return (sc1+sc2+sc3)/3;
}

function assignGrade(average) {
    if (average>=90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }

}

// user input
// const sc1 = parseFloat(prompt("Enter your first score"));
// const sc2 = parseFloat(prompt("Enter your second score"));
// const sc3 = parseFloat(prompt("Enter your third score"));

const scores =[];
for (let i = 0; i < 3; i++) {
    const score = prompt(`Enter Score ${i + 1}: `)
    scores.push(parseFloat(score));
}
// const average = calculateAverage(sc1, sc2, sc3);\
const average = calculateAverage(scores[0], scores[1], scores[2]);
const grade = assignGrade(average);

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);