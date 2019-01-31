module.exports.multiply = (x,y) => 
	
{   console.log('-Multiplication Table-')
	for (var i = 1; i<=y ;i++ )
	{
		console.log(x,'x',i, '=' ,x*i)
	}
}