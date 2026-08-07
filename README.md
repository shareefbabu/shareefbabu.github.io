# Personal Website

This website is a static HTML/CSS website. No special software or framework is required.

---

# Project Structure

```
Website/
│
├── index.html          # Home Page
├── About.html          # About Page
├── Research.html       # Research Page
├── CV.html             # CV Page
├── Contact.html        # Contact Page
│
├── Home.css
├── About.css
├── Contact.css
├── CV.css
├── Research.css
├── nicepage.css
│
├── updates.js          # Homepage Updates (Edit this only)
├── updates-scroll.js   # Update animation (Do NOT edit)
│
└── images/
```

---

# Updating the Homepage

## 1. Profile Photograph

Replace:

```
images/shareef.jpeg
```

Keep the filename the same.

Recommended size:

- Width: 600–800 px
- Portrait orientation

---

## 2. Name

Open

```
index.html
```

Find

```html
<div class="name">
```

Edit only the text.

Example:

```html
<div class="name">
Dr. Kalluri Shareef Babu
</div>
```

---

## 3. Designation

In

```
index.html
```

Find

```html
<div class="title">
```

Example:

```html
Assistant Professor,
School of Electrical Engineering,
Manipal Institute of Technology (MIT), Bengaluru
```

Only edit the text.

---

## 4. Homepage Updates

Open

```
updates.js
```

Example:

```javascript
const updates = [

'Organiser – <a href="https://displace2026.github.io/" target="_blank">DISPLACE-M Challenge 2026</a>',

'Paper accepted – <b>CE2CT 2026</b>, Bhimtal, India.',

'Paper accepted – <b>APSIPA ASC 2025</b>, Singapore.'

];
```

To add a new update, simply add another line:

```javascript
'Paper accepted – <b>ICASSP 2027</b>, Barcelona, Spain.',
```

For updates with a hyperlink:

```javascript
'Organiser – <a href="https://example.com" target="_blank">Conference Website</a>',
```

**Do not edit `updates-scroll.js`.**

---

## 5. Research Interests

Open

```
index.html
```

Find

```html
<div class="research">
```

Example:

```html
Speaker Profiling and Characterization,
Speaker Diarization,
Speech Pathology,
Speech Signal Processing,
Deep Learning,
Machine Learning.
```

Edit the text as required.

---

# Updating the About Page

Open

```
About.html
```

The biography is inside the large paragraph beginning with

```html
<p class="u-align-justify u-text u-text-2">
```

Edit the text only.

No CSS changes are required.

---

# Updating Publications

Open

```
Research.html
```

Locate the publication list.

Each publication is represented as a single list item (`<li>`).

Example:

```html
<li>
    <b>Paper Title</b><br>
    Author 1, Author 2, <b>Kalluri Shareef Babu</b><br>
    <i>Conference/Journal Name</i>, Year.
</li>
```

---

## Adding a New Publication

1. Copy an existing publication entry (`<li>...</li>`).

2. Paste it at the desired position in the list.
   - Add the newest publication at the **top** of the corresponding year's list.
   - If the publication belongs to a new year, first create a new year heading and then add the publication below it.

3. Replace:
   - Paper title
   - Authors
   - Conference or Journal name
   - Year
   - DOI/PDF/Project links (if available)

---

## Example

```html
<h3>2027</h3>

<ul>

<li>
<b>Learning Robust Speaker Embeddings Using ...</b><br>

Kalluri Shareef Babu, John Doe, Jane Smith<br>

<i>IEEE ICASSP 2027</i><br>

<a href="https://doi.org/...">DOI</a>

</li>

</ul>
```

---

## Removing a Publication

Delete the entire `<li>...</li>` block corresponding to that publication.

If all publications of a particular year are removed, delete the year heading as well.

---

## Important

Only edit the publication content.

Do **not** modify:

- HTML structure
- CSS classes
- Section headings
- Layout or styling

---

# Updating the CV

Replace

```
CV.pdf
```

(or whichever PDF is linked from `CV.html`)

If the filename changes, update the link inside

```
CV.html
```

---

# Updating Contact Information

Open

```
Contact.html
```

You can update:

- Email address
- Office information
- Office location

---

# Updating the Office Map

In

```
Contact.html
```

Locate the Google Maps iframe:

```html
<iframe
    src="https://www.google.com/maps/embed?...">
</iframe>
```

Replace the `src` with a new Google Maps Embed link if the office location changes.

---

# Updating Social Media Links

Open

```
index.html
```

Find the icons section.

Example:

```html
<a href="https://www.linkedin.com/...">
```

Replace the URL only.

Current links:

- LinkedIn
- ResearchGate
- Google Scholar

---

# Replacing Social Icons

Replace the corresponding files inside

```
images/
```

Keep the filenames unchanged.

---

# Copyright

The copyright year updates automatically.

No manual changes are required.

---

# Styling

Most styling is contained in:

```
Home.css
About.css
Research.css
Contact.css
CV.css
```

Global website styles are in

```
nicepage.css
```

Avoid editing `nicepage.css` unless absolutely necessary.

---

# Files That Should Normally NOT Be Edited

```
nicepage.css
updates-scroll.js
jquery.js
nicepage.js
```

These files control the website layout and animations.

---

# Deployment

Since this is a static website, simply upload all files to any web server or GitHub Pages repository.

No build process is required.