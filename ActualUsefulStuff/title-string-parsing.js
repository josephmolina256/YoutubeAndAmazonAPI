let outString = "How to Design a Speed Gearbox ---Understanding Gear Ratios ---Types of Gears and Their Uses ---Step-by-Step Assembly of a Speed Gearbox ---Tips for Gearbox Maintenance and Troubleshooting ---Demonstration: Testing Speed Gearbox Performance ---Common Gearbox Problems and Solutions ---Advanced Gearbox Design Techniques ---Optimizing Gearbox Efficiency ---Exploring Variable Speed Gearbox Designs ---";
let count = 0
let vidList = []
let temp_string = ''
for(let i = 0; i < outString.length; i++){
    if(outString[i] === '-'){
        count += 1
        if(count === 3){
            vidList.push(temp_string.substring(0, temp_string.length - 1).replace(/ /g, '%20'))
            temp_string = ''
            count = 0
        }
    }
    else{
        temp_string += outString[i]
    }
    
}

module.exports = {vidList}
console.log(vidList)
