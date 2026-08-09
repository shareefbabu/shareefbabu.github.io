// ========================================
// VOLUNTEERING
// ========================================

const volunteeringContent = `
  <h5 class="u-text u-text-default">
    Reviewer for Journals:
  </h5>

  <div class="reviewer-grid">
    <div class="reviewer-badge">
      Journal of Speech Communication
    </div>
  </div>


  <h5 class="u-text u-text-default" style="margin-top: 30px;">
    Reviewer for Conferences:
  </h5>

  <div class="reviewer-grid">

    <a href="https://interspeech2026.org/en-AU"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      Interspeech 2026
    </a>

    <a href="https://www.interspeech2025.org/home"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      Interspeech 2025
    </a>

    <a href="https://interspeech2024.org"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      Interspeech 2024
    </a>

    <a href="https://interspeech2023.org"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      Interspeech 2023
    </a>

    <a href="https://www.interspeech2022.org"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      Interspeech 2022
    </a>

    <a href="https://www.interspeech2021.org"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      Interspeech 2021
    </a>

    <a href="https://2026.ieeeicassp.org"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      IEEE ICASSP 2026
    </a>

    <a href="https://ieeeindicon.org"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      IEEE INDICON
    </a>

    <a href="https://ece.iisc.ac.in/~spcom/2026/index.html"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      SPCOM 2026
    </a>

    <a href="https://ece.iisc.ac.in/~spcom/2024/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      SPCOM 2024
    </a>

    <a href="https://iui.acm.org/2022/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      IUI 2022 (PC Member)
    </a>

    <a href="https://iui.acm.org/2023/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      IUI 2023 (PC Member)
    </a>

    <a href="https://iui.acm.org/2024/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      IUI 2024 (PC Member)
    </a>

    <a href="https://specom.nw.ru/2023/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      SPECOM 2023 (PC Member)
    </a>

    <a href="https://ce2ct.gehu.ac.in/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      CE2CT
    </a>

    <a href="https://conference.manipal.edu/SCPGCON2026/"
       target="_blank"
       class="reviewer-badge"
       style="text-decoration: none; display: block;">
      SCPGCON 2026
    </a>

  </div>
`;


// ========================================
// AWARDS / HONOURS
// ========================================

const awardsContent = `
  <ul class="u-align-justify u-text u-text-default u-text-2">

    <li>
      <b>MHRD fellowship</b> for Ph.D,
      Government of India, December 2013–December 2018.
    </li>

    <li>
      <b>Awarded Grant of 280 USD</b> -
      for the Student volunteer co-ordination in ICASSP 2019,
      Brighton, UK. May 2019.
    </li>

    <li>
      <b>IEEE Signal Processing Society</b> -
      Student Travel Grant 2016 for attending IEEE 26th International
      Workshop on Machine Learning for Signal Processing (MLSP),
      2016, Salerno, Italy.
    </li>

    <li>
      <b>TEQIP-II International Travel Grant</b> -
      Student Travel Grant 2016 for attending IEEE 26th International
      Workshop on Machine Learning for Signal Processing (MLSP),
      2016, Salerno, Italy.
    </li>

    <li>
      Won <b>First Prize</b> in National Level Student Technical Symposium
      (INTERACT2K10), Anil Neerukonda Institute of Technology,
      Visakhapatnam, A.P, India. 2010.
    </li>

  </ul>
`;


// ========================================
// PROFESSIONAL ACTIVITIES
// ========================================

const professionalActivitiesContent = `
  <h5 class="u-text u-text-default">
    Faculty Development Programmes (FDPs) Organised
  </h5>

  <ul class="u-text u-text-default u-text-2">

    <li>
      Organizer, FDP on
      &ldquo;Emerging Frontiers in Speech and Language Technologies&rdquo;,
      UPES Dehradun &amp; EICT Academy, IIITDM Jabalpur
      (MeitY, Govt. of India), Online,
      Jan 6–13, 2026.
    </li>

  </ul>


  <h5 class="u-text u-text-default" style="margin-top: 30px;">
    Sessions Chaired
  </h5>

  <ul class="u-text u-text-default u-text-2">

    <li>
      Session Chair,
      17<sup>th</sup> IEEE International Conference on Computational
      Intelligence and Communication Networks (CICN 2025),
      NIT Goa, India, Dec 20–21, 2025.
    </li>

  </ul>
`;


// ========================================
// INSERT CONTENT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

  const volunteeringElement =
    document.getElementById("volunteering-content");

  const awardsElement =
    document.getElementById("awards-content");

  const professionalActivitiesElement =
    document.getElementById("professional-activities-content");


  if (volunteeringElement) {
    volunteeringElement.innerHTML = volunteeringContent;
  }

  if (awardsElement) {
    awardsElement.innerHTML = awardsContent;
  }

  if (professionalActivitiesElement) {
    professionalActivitiesElement.innerHTML =
      professionalActivitiesContent;
  }

});