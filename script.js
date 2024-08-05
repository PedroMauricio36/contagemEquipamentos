// function enviar() {
//     let gr1 = document.getElementById("gr1").value;
//     let gr3 = document.getElementById("gr3").value;
//     let gr4 = document.getElementById("gr4").value;
//     let gr5 = document.getElementById("gr5").value;
//     let gr6 = document.getElementById("gr6").value;
//     let ata = document.getElementById("ata").value;
//     let telefone = document.getElementById("telefone").value;
//     let tv = document.getElementById("tv").value;
//     let camera = document.getElementById("camera").value;
//     let onu = document.getElementById("onu").value;
//     let ont = document.getElementById("ont").value;
//     let ponto = document.getElementById("ponto").value;
//     let conversor = document.getElementById("conversor").value;
//     let switchHub = document.getElementById("switchHub").value;
// }

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gr1 = document.getElementById("gr1").value;
    const gr3 = document.getElementById("gr3").value;
    const gr4 = document.getElementById("gr4").value;
    const gr5 = document.getElementById("gr5").value;
    const gr6 = document.getElementById("gr6").value;
    const ata = document.getElementById("ata").value;
    const telefone = document.getElementById("telefone").value;
    const tv = document.getElementById("tv").value;
    const camera = document.getElementById("camera").value;
    const onu = document.getElementById("onu").value;
    const ont = document.getElementById("ont").value;
    const ponto = document.getElementById("ponto").value;
    const conversor = document.getElementById("conversor").value;
    const switchHub = document.getElementById("switchHub").value;
    const phoneNumber = '5522998320882'; // Replace with the target phone number

    const whatsappMessage = 
        `GR1: ${gr1}
        \nGR3: ${gr3}
        \nGR4: ${gr4}
        \nGR5: ${gr5}
        \nGR6: ${gr6}
        \nATA: ${ata}
        \nTELEFONE IP: ${telefone}
        \nTV BOX: ${tv}
        \nCAMERA IP: ${camera}
        \nONU: ${onu}
        \nONT: ${ont}
        \nPONTO DE MONITORAMENTO: ${ponto}
        \nCONVERSOR MULTIMIDIA: ${conversor}
        \nSWITCH: ${switchHub}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    
    if (confirm("Enviar para WhatsApp Solutec?")) {
        window.open(whatsappUrl, '_blank');
    }
});


