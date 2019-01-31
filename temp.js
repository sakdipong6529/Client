module.exports.calTemp = (x) =>{

let stdin = process.openStdin()

		if(x == 1)
		{
			console.log('Enter :')
			stdin.addListener("data",(tem1) =>{
				console.log('Degree :',tem1*1.8+32,'°F')
				stdin.destroy()
				
			})	
		}
		

		else if(x == 2)
		{
			console.log('Enter :')
			stdin.addListener("data",(tem2) =>{
				console.log('Degree :',(tem2-32)/1.8,'°C')
				stdin.destroy()
				
		})
	}

}