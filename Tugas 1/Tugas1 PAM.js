let Numbers = [1,2,3,4,5,6,7,8,9,10];
let Names = ["Boy", "Aldi", "Ade", "Ridwan", "Malik", "Munkar", "Nakir", "Roqib", "Atid", "Randy"];
let NIM = [123, 124, 125, 126, 127, 128, 129, 130, 131, 132];
let Nilai = [60, 70, 40, 50, 70, 45, 90, 75, 50, 90];
let HurufMutu = [];
for (let i = 0; i < Numbers.length; i++){
    document.write("<tr>")
    document.write("<td>" + Numbers[i] + "</td>");
    document.write("<td>" + Names[i] + "</td>");
    document.write("<td>" + NIM[i] + "</td>");
    document.write("<td>" + Nilai[i] + "</td>");

    if(Nilai[i] >= 80){
        HurufMutu[i] = "A";
    }else if (Nilai[i] >= 70 && Nilai[i] < 80){
        HurufMutu[i] = "AB";
    }else if (Nilai[i] >= 60 && Nilai[i] < 70){
        HurufMutu[i] = "B";
    }else if (Nilai[i] >= 50 && Nilai[i] < 60){
        HurufMutu[i] = "BC";
    }else if (Nilai[i] >= 40 && Nilai[i] < 50){
        HurufMutu[i] = "C";
    }else if (Nilai[i] >= 10 && Nilai[i] < 40){
        HurufMutu[i] = "D";
    }else if (Nilai[i] < 10){
        HurufMutu[i] = "E";
    }else{
        HurufMutu[i] = "ERROR!";
    }

    document.write("<td>" + HurufMutu[i] + "</td>");
    document.write("</tr>")
}
