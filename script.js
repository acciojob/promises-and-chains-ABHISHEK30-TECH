//your JS code here. If required.
document.getElementById("btn").addEventListener("click",(e)=>{
	e.preventDefault();
	const age = document.getElementById("age").value;
	new Promise((resolve, reject)=>{
		if(age>18){
			setTimeout(()=>{
				resolve("Welcome,John. You can vote.")
			},4000)
		}
		else{
			setTimeout(()=>{
				reject("Oh sorry Doe. You aren't old enough.")
			},4000)
		}
	}).then((res)=>alert(res))
	  .catch((err)=>alert(err))
})