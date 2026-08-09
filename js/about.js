const aboutContent = `
I'm working as a <b>
<a href="https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mit-blr/department-faculty/faculty-list/dr--kalluri-shareef-babu.html" target="_blank">
Assistant Professor
</a>
</b>
in School of Electrical Engineering, Manipal Institute of Technology
<a href="https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mit-blr.html" target="_blank">
(MIT),
</a>
Bengaluru, India from June 2026 to Till date.

<br><br>

Prior to this, I worked as an
<b>Assistant Professor (Senior Scale)</b>
at the School of Computer Science,
<a href="https://www.upes.ac.in/" target="_blank">
University of Petroleum and Energy Studies (UPES)
</a>,
Dehradun, India, from December 2024 to June 2026.

<br><br>

Prior to this I was a
<b>Post-Doctoral Fellow</b>,
at Learning and Extraction of Acoustic Patterns Lab
<a href="http://leap.ee.iisc.ac.in/" target="_blank">
(LEAP-Lab)
</a>,
headed by Prof.
<a href="http://leap.ee.iisc.ac.in/sriram/" target="_blank">
Sriram Ganapathy,
</a>
Dept. of Electrical Engineering,
<a href="https://iisc.ac.in/" target="_blank">
Indian Institute of Science,
</a>
Bangalore, India, from November 2023 to December 2024.

<br><br>

Prior to this I worked as a
<b>Post-Doctoral Fellow</b>,
at Intelligent User Interface Lab
<a href="https://iui.ci.seikei.ac.jp/en/" target="_blank">
(IUI-Lab)
</a>,
headed by Prof.
<a href="https://www.ci.seikei.ac.jp/nakano/index_e.html" target="_blank">
Yukiko I Nakano,
</a>
Dept. of Computer and Information Science,
<a href="https://www.seikei.ac.jp/gakuen/eng/" target="_blank">
Seikei University
</a>,
Tokyo, Japan, from May 2021 to March 2023.

<br><br>

I completed my
<b>Ph.D</b>
under the supervision of Prof.
<a href="https://ece.nitk.ac.in/faculty/deepu-vijayasenan" target="_blank">
Deepu Vijayasenan
</a>
at
<a href="https://ece.nitk.ac.in/" target="_blank">
Electronics and Communication Engineering
</a>
department, from
<a href="https://www.nitk.ac.in/" target="_blank">
National Institute of Technology Karnataka - Surathkal
</a>,
Mangalore, India, in June 2021.

<br><br>

Prior to that, I did my Master of Technology in Digital Electronics and Communication System (2011-2013), and Bachelor of Technology in Electronics and Communication Engineering (2007-2011) from Jawaharlal Nehru Technological University Anantapur (JNTUA), Andhra Pradesh, India.
`;

document.addEventListener("DOMContentLoaded", function () {
    const aboutElement = document.getElementById("about-content");

    if (aboutElement) {
        aboutElement.innerHTML = aboutContent;
    }
});