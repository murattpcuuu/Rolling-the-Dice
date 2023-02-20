const zarAt = document.getElementById("zar");


zarAt.addEventListener("click", () => {
    z1 = Math.floor(Math.random() * 6) + 1;
    z2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("box1").innerHTML = z1;
    document.getElementById("box2").innerHTML = z2;

    if(z1 === z2){
        document.getElementById("uyari").innerHTML = "Tebrikler çift attınız..."
    } else {
        document.getElementById("uyari").innerHTML = `${z1} ve ${z2} rakamlarını attınız... `
    }
})

