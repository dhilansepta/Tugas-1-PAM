let VarGlobal = "Ini Variabel Global";

function Outer(param1){
    let Var1 = "Ini Variabel 1";

    function Inner(param2){
        let Var2 = "Ini Variable 2";

        console.log(`Variabel Global:  ${VarGlobal}`);
        console.log(`Variabel Satu: ${Var1}`);
        console.log(`Variable Dua: ${Var2}`);
        console.log(`Parameter 1: ${param1}`);
        console.log(`Parameter 2: ${param2}`);
    }
    Inner("Ini parameter 2");
}
Outer("Ini Parameter 1");