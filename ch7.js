function Palindrome(a) 

{ 
  var len = Math.floor(a.length / 2)
  //console.log(len)

  for (var i = 0; i < len; i++)
  	{	if (a[i] !== a[a.length - i - 1])

      		return false

  	}
    		return true

}
b = Palindrome('daD')
console.log("case sensitive : ",b)



function non_Palindrome(x) 

{ 
  var str = x.toUpperCase()
  var len = Math.floor(str.length / 2)
  //console.log(len)

  for (var i = 0; i < len; i++)
  	{	if (str[i] !== str[str.length - i - 1])

      		return false

  	}
    		return true

}
z = non_Palindrome('moM')
console.log("case non-sensitive : ",z)