let formSubmitted = false;

document.getElementById('equipamento').addEventListener('submit', function(event) {
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
        formSubmitted = true;
        window.open(whatsappUrl, '_blank');
    } else {
        console.log('Cancelado');
    }
});

window.addEventListener('beforeunload', function (e) {
    if (!formSubmitted) {
        const confirmationMessage = 'Contagem não enviada. Sair mesmo assim?';
        
        e.returnValue = confirmationMessage; // For most browsers
        return confirmationMessage;          // For some browsers
    }
});

// Function to save form data to localStorage
function saveFormData() {
    const formData = {
        gr1: document.getElementById("gr1").value,
        gr3: document.getElementById("gr3").value,
        gr4: document.getElementById("gr4").value,
        gr5: document.getElementById("gr5").value,
        gr6: document.getElementById("gr6").value,
        ata: document.getElementById("ata").value,
        telefone: document.getElementById("telefone").value,
        tv: document.getElementById("tv").value,
        camera: document.getElementById("camera").value,
        onu: document.getElementById("onu").value,
        ont: document.getElementById("ont").value,
        ponto: document.getElementById("ponto").value,
        conversor: document.getElementById("conversor").value,
        switchHub: document.getElementById("switchHub").value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to load form data from localStorage
function loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('name').value = formData.name || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('message').value = formData.message || '';
        document.getElementById("gr1").value = formData.gr1 || '';
        document.getElementById("gr3").value = formData.gr3 || '';
        document.getElementById("gr4").value = formData.gr4 || '';
        document.getElementById("gr5").value = formData.gr5 || '';
        document.getElementById("gr6").value = formData.gr6 || '';
        document.getElementById("ata").value = formData.ata || '';
        document.getElementById("telefone").value = formData.telefone || '';
        document.getElementById("tv").value = formData.tv || '';
        document.getElementById("camera").value = formData.camera || '';
        document.getElementById("onu").value = formData.onu || '';
        document.getElementById("ont").value = formData.ont || '';
        document.getElementById("ponto").value = formData.ponto || '';
        document.getElementById("conversor").value = formData.conversor || '';
        document.getElementById("switchHub").value = formData.switchHub || '';
    }
}

// Save form data whenever the user types
document.getElementById('dataForm').addEventListener('input', saveFormData);

// Load form data when the page loads
window.addEventListener('load', loadFormData);




