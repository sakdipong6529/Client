let area = require('./tri.js')

let stdin = process.openStdin()
let i=1, a;
const main = () => {
	console.log('Enter B & H')
	stdin.addListener("data",(value) =>{
		if(i == 1){
			a = value;
		}
		else {
			console.log('Area is (1/2*h*b) :',area.areaTri(a,value))
			stdin.destroy()
		}
		i++;
	})
} 

main()

console.log(main)