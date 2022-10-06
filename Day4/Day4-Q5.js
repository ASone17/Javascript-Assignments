async function myfunction(){
    function GetVideo(){
        console.log("Got Video");
    }
    function AddIntro(){
        return console.log("Intro Added");
    }
    function AddSummary(){
        return console.log("Summary Added");
    }
    GetVideo();
    await AddIntro();
    AddSummary();
}
myfunction();
console.log("Checking for await fn.");