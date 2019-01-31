
let temp = require('./temp.js')

//const math =  require('./math.js');

let stdin = process.openStdin()



const main = () => {
	console.log("1)°C -> °F , 2)°F -> °C","\n Please select mode(1|2)")
	stdin.addListener("data",(value) => {
		
		console.log(temp.calTemp(value))

	})
} 

main()

console.log(main)
