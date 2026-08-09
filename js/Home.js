// ========================================
// HOME PAGE CONTENT
// ========================================

const homeContent = {

    // Profile
    name: "Dr. Kalluri Shareef Babu",

    title:
        "Assistant Professor, School of Electrical Engineering, Manipal Institute of Technology (MIT), Bengaluru",

    profileImage:
        "images/shareef.jpeg",


    // Social Links
    socialLinks: {

        linkedin:
            "https://www.linkedin.com/in/shareefbabu/",

        researchgate:
            "https://www.researchgate.net/profile/Shareef-Babu",

        googleScholar:
            "https://scholar.google.com/citations?user=ruLltx4AAAAJ&hl=en"
    },


    // Research Interests
    researchInterests:
        "Speaker Profiling and Characterization, Speaker Diarization, Speech Pathology, Speech Signal Processing, Deep Learning, Machine Learning."
};


// ========================================
// INSERT HOME CONTENT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Name
    const nameElement =
        document.getElementById("home-name");

    if (nameElement) {
        nameElement.textContent = homeContent.name;
    }


    // Title
    const titleElement =
        document.getElementById("home-title");

    if (titleElement) {
        titleElement.textContent = homeContent.title;
    }


    // Profile Image
    const profileImageElement =
        document.getElementById("home-profile-image");

    if (profileImageElement) {
        profileImageElement.src =
            homeContent.profileImage;

        profileImageElement.alt =
            homeContent.name;
    }


    // LinkedIn
    const linkedinElement =
        document.getElementById("home-linkedin");

    if (linkedinElement) {
        linkedinElement.href =
            homeContent.socialLinks.linkedin;
    }


    // ResearchGate
    const researchgateElement =
        document.getElementById("home-researchgate");

    if (researchgateElement) {
        researchgateElement.href =
            homeContent.socialLinks.researchgate;
    }


    // Google Scholar
    const googleScholarElement =
        document.getElementById("home-google-scholar");

    if (googleScholarElement) {
        googleScholarElement.href =
            homeContent.socialLinks.googleScholar;
    }


    // Research Interests
    const researchElement =
        document.getElementById("home-research-interests");

    if (researchElement) {
        researchElement.textContent =
            homeContent.researchInterests;
    }

});