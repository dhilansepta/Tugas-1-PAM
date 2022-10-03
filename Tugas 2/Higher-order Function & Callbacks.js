function greetings(name){
    return `Hi! ${name}`;
}

function greetingswithname(greetings, pesan, name){
    console.log(`${greetings(name)} ${pesan}`);
}

greetingswithname(greetings, "Selamat Datang", "Dhilan");