function main(){
    console.log("Pertama");
    setTimeout(function display(){console.log("Kedua");}, 0);
    console.log("Ketiga");
}
main();