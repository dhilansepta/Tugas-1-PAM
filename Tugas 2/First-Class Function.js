function greetings(){
    return "Halo Selamat Datang";
}

function greetingswithname(name){
    console.log(greetings() + ", " + name + "!");
}

greetings();
greetingswithname("Dhilan");