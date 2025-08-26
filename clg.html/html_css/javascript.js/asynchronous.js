 //set timeout


//  console.log("start");
//     setTimeout(()=>{
//         console.log("in timeout 1");
//     },5000);
//     console.log("finish");



    //  console.log("start");
    // setTimeout(()=>{
    //     console.log("in timeout 1");
    // },5000);
    //      console.log("end");
    // setTimeout(()=>{
    //     console.log("in timeout 2");
    // },5000);
    // console.log("finish");

    //nested set timeout
     console.log("start");
    setTimeout(()=>{
        console.log("in timeout 1");
            setTimeout(()=>{
        console.log("in timeout 2");

    },2000);
},5000);
         console.log("end");
    setTimeout(()=>{
        console.log("in timeout 3");
    },3000);
    console.log("finish");
