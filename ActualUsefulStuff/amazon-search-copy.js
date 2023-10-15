let myList = [
    {
      "General Part": "Chassis",
      "Specific Part": "ABS plastic chassis kit",
      "Size/Details": "Customizable size with pre-drilled holes for components and mounting brackets"
    },
    {
      "General Part": "Fire Detection System",
      "Specific Part": "Infrared flame sensor",
      "Size/Details": "Compatible with breadboard"
    },
    {
      "General Part": "Fire Suppression System",
      "Specific Part": "Miniature fire extinguisher",
      "Size/Details": "Standard miniature fire extinguisher"
    },
    {
      "General Part": "Obstacle Avoidance System",
      "Specific Part": "Ultrasonic distance sensor",
      "Size/Details": "Compatible with breadboard"
    },
    {
      "General Part": "Navigation System",
      "Specific Part": "GPS module",
      "Size/Details": "Standard GPS receiver"
    },
    {
      "General Part": "Motor",
      "Specific Part": "DC motors",
      "Size/Details": "Variable size"
    },
    {
      "General Part": "Wheels",
      "Specific Part": "RC Rubber Wheels",
      "Size/Details": "Customizable diameter"
    },
    {
      "General Part": "Microcontroller",
      "Specific Part": "Arduino Uno",
      "Size/Details": "Compatible with breadboard"
    },
    {
      "General Part": "Power Supply",
      "Specific Part": "LiPo battery",
      "Size/Details": "Variable voltage, compatible with LiPo connectors"
    },
    {
      "General Part": "Communication System",
      "Specific Part": "Bluetooth module",
      "Size/Details": "Compatible with breadboard"
    },
    {
      "General Part": "Sensors",
      "Specific Part": "Infrared temperature sensor",
      "Size/Details": "Compatible with breadboard"
    },
    {
      "General Part": "Sensors",
      "Specific Part": "Humidity sensor",
      "Size/Details": "Compatible with breadboard"
    }
  ]
let extension = undefined
let outList = [] //final output




for(let i = 0; i < myList.length; i++){
  extension = myList[i]["Specific Part"].replace(/ /g, '+')
  outList.push({
    'generalName' : myList[i]["General Part"],
    'specificName' : myList[i]["Specific Part"],
    'url' : `https://www.amazon.com/s?k=${extension}&crid=2G6R5QC3AMLHU&sprefix=${extension}%2Caps%2C100&ref=nb_sb_noss`,
    'details' : myList[i]["Size/Details"]

    })
   
}


  

console.log(outList)
