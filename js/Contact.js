// ========================================
// CONTACT INFORMATION
// ========================================

const contactInformation = `
    shareef.iisc [at] gmail [dot] com<br>
    k.shareefbabu [at] manipal [dot] edu
`;


// ========================================
// OFFICE INFORMATION
// ========================================

const officeInformation = `
    <a href="https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mit-blr/department-faculty/department-list/School-of-Electrical-Engineering.html"
       target="_blank">
        School of Electrical Engineering
    </a>
    <br>

    Manipal Institute of Technology<br>
    MAHE Bengaluru Campus<br>
    Bengaluru, Karnataka, India
`;


// ========================================
// OFFICE MAP
// ========================================

const officeMap = `
    <h3>Office Location</h3>

    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5469.163444045787!2d77.5905669!3d13.125448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19d502aa02b3%3A0xb31f075ede4c71ab!2sManipal%20Academy%20of%20Higher%20Education%2C%20MAHE%20Bengaluru!5e1!3m2!1sen!2sin!4v1786091128141!5m2!1sen!2sin"
        width="100%"
        height="520"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
`;


// ========================================
// INSERT CONTENT INTO CONTACT PAGE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactElement =
        document.getElementById("contact-information");

    const officeElement =
        document.getElementById("office-information");

    const mapElement =
        document.getElementById("office-map-content");


    if (contactElement) {
        contactElement.innerHTML = contactInformation;
    }

    if (officeElement) {
        officeElement.innerHTML = officeInformation;
    }

    if (mapElement) {
        mapElement.innerHTML = officeMap;
    }

});