let name = "Dhilan";

function pertama(){
    let greetings1 = "Ini Fungsi pertama";
    kedua();
    console.log(`${greetings1} ${name}`);
}

function kedua(){
    let greetings2 = "Ini Fungsi kedua";
    ketiga();
    console.log(`${greetings2} ${name}`);
}

function ketiga(){
    let greetings3 = "Ini Fungsi ketiga";
    console.log(`${greetings3} ${name}`);
}

pertama();