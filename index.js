console.log("okk");


async function myFunc() {
    let Po = new Promise((res,rej)=>{
 
        setTimeout(()=>{
            res({
                msg:"hello"
            })
        },3000)
        
    })
    let x = await Po;
    console.log(x);
}





myFunc();