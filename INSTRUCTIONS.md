# Personal Website - Detailed Editing Manual

This repository contains a static personal website (no framework, no build pipeline).
All visible content is edited directly in HTML/CSS/JS files.

---

## 1) What this website uses

- **HTML** for page structure:
  - `index.html` (home)
  - `html/*.html` (inner pages)
- **CSS** for styling:
  - `css/site.css` and page-specific CSS files
- **JavaScript** for content injection/data rendering:
  - `js/*.js`

There is **no npm install**, **no bundler**, and **no compile step**.

---

## 2) Actual repository structure (current)

```text
/
├── index.html
├── README.md
├── html/
│   ├── About.html
│   ├── Contact.html
│   ├── Experience.html
│   ├── Highlights.html
│   ├── News.html
│   ├── Publications.html
│   └── Research.html
├── css/
│   ├── About.css
│   ├── Contact.css
│   ├── Experience.css
│   ├── Highlights.css
│   ├── Home.css
│   ├── News.css
│   ├── Research.css
│   ├── nicepage.css
│   ├── site.css
│   └── style.css
├── js/
│   ├── Home.js
│   ├── about.js
│   ├── Contact.js
│   ├── Experience.js
│   ├── Highlights.js
│   ├── news.js
│   ├── latest-news.js
│   ├── all-news.js
│   ├── research.js
│   ├── research-content.js
│   ├── publications.js
│   ├── publications-content.js
│   ├── cv.js
│   ├── jquery.js
│   └── nicepage.js
├── images/
├── docs/
└── intlTelInput/
```

---

## 3) Fast workflow for any content change

1. Identify **which page** or section you want to edit.
2. Find the matching file in `js/` using the mapping table below.
3. Edit only the relevant object/template string.
4. Save and open `index.html` in browser.
5. Click through all related pages.
6. Commit.

---

## 4) Page-to-file mapping (most important section)

| Page | HTML file | Content source JS file(s) | Target container IDs |
|---|---|---|---|
| Home | `index.html` | `js/Home.js`, `js/news.js`, `js/latest-news.js` | `home-name`, `home-title`, `home-profile-image`, `home-research-interests`, `latest-news-list` |
| About | `html/About.html` | `js/about.js` | `about-content` |
| Research | `html/Research.html` | `js/research.js`, `js/research-content.js` | `research-records` |
| Publications | `html/Publications.html` | `js/publications.js`, `js/publications-content.js` | `publications-list` |
| Experience | `html/Experience.html` | `js/Experience.js` | `teaching-content`, `work-content`, `talks-content`, `fdp-content` |
| Highlights | `html/Highlights.html` | `js/Highlights.js` | `volunteering-content`, `awards-content`, `professional-activities-content` |
| Contact | `html/Contact.html` | `js/Contact.js` | `contact-information`, `office-information`, `office-map-content` |
| News (full list) | `html/News.html` | `js/news.js`, `js/all-news.js` | `all-news-list` |

> Note: `js/cv.js` exists but is currently not wired to a visible page in the current structure.

---

## 5) Detailed editing instructions by section

## 5.1 Home page (name, title, profile image, social links, interests)

### File
`js/Home.js`

### What to edit
Edit the `homeContent` object keys:
- `name`
- `title`
- `profileImage`
- `socialLinks.linkedin`
- `socialLinks.researchgate`
- `socialLinks.googleScholar`
- `researchInterests`

### Example
```js
const homeContent = {
  name: "Dr. Kalluri Shareef Babu",
  title: "Assistant Professor, ...",
  profileImage: "images/shareef.jpeg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/...",
    researchgate: "https://www.researchgate.net/profile/...",
    googleScholar: "https://scholar.google.com/citations?..."
  },
  researchInterests: "Speaker Profiling, ..."
};
```

### Important
- Keep quotes balanced.
- Keep commas between fields.
- If image filename changes, upload that image in `images/`.

---

## 5.2 About page biography

### File
`js/about.js`

### What to edit
Edit the `aboutContent` template string.

### Allowed HTML in text
- `<b>...</b>`
- `<a href="...">...</a>`
- `<br>`

### Important
- Do not delete opening/closing backticks around the template string.

---

## 5.3 News (used in two places)

### File
`js/news.js`

### Data shape
```js
const newsItems = [
  {
    date: "Month, Year",
    text: "News text..."
  }
];
```

### Behavior
- Home page shows only latest few items (from `latest-news.js`).
- News page shows full list (from `all-news.js`).

### Best practice
- Add newest item at **top** of `newsItems`.
- Keep `text` simple and concise.

---

## 5.4 Research records

### Files
- Data: `js/research.js`
- Renderer: `js/research-content.js`

### What to edit
In `research.js`, edit `researchRecords` array objects:
- `duration`
- `title`
- `supervisor`
- `funding`
- `description`

### Display rule
- If `funding: ""`, the funding row is automatically omitted.

### Example
```js
{
  duration: "2026 - Present",
  title: "Project title",
  supervisor: "Name, affiliation",
  funding: "SERB",
  description: "Description..."
}
```

---

## 5.5 Publications

### Files
- Data: `js/publications.js`
- Renderer: `js/publications-content.js`

### What to edit
Add/edit entries in `publications` array.

### Required object fields
```js
{
  year: "2026",
  title: "Paper title",
  authors: "Author1, Author2, ...",
  venue: "Conference/Journal details",
  link: "https://... or ''"
}
```

### Sorting behavior
- Years are auto-grouped and shown in descending numeric order.
- Within a year, order follows array order.

### PDF/document links
- You may use:
  - Absolute URL (current pattern), or
  - Hosted root-relative path (for example `/docs/file.pdf`).
- If link is empty string `""`, no "Click here" link is rendered.

---

## 5.6 Experience page tabs

### File
`js/Experience.js`

### Editable sections
- `teachingContent`
- `workContent`
- `talksContent`
- `fdpContent`

Each section is an HTML template string. Keep table/list tags balanced.

### Safe edits
- Add/remove `<li>` lines
- Update dates/titles/URLs
- Add `<a href="...">` links

---

## 5.7 Highlights page tabs

### File
`js/Highlights.js`

### Editable sections
- `volunteeringContent`
- `awardsContent`
- `professionalActivitiesContent`

### Safe edits
- Add or remove reviewer badges/links
- Add awards list items
- Update professional activity bullets

---

## 5.8 Contact page

### File
`js/Contact.js`

### Editable blocks
- `contactInformation`
- `officeInformation`
- `officeMap`

### Google map update
- Replace only iframe `src` URL in `officeMap`.
- Keep `iframe` tag and closing tag intact.

---

## 6) Asset editing (images/docs)

## 6.1 Images
- Put images in `images/`
- Use readable names, e.g. `profile-2026.jpg`
- Update reference in related JS/HTML file

## 6.2 PDFs and docs
- Put files in `docs/`
- Update corresponding publication/link URL

---

## 7) Relative path rules (very important)

Because pages are split between root and `html/`:

- From `index.html` (root), CSS/JS paths start with:
  - `css/...`
  - `js/...`
  - `images/...`

- From files in `html/`, paths should usually start with:
  - `../css/...`
  - `../js/...`
  - `../images/...`
  - `../index.html` (home link)

If a link/image/script stops working, first check this.

---

## 8) What NOT to edit routinely

Avoid changing these unless you are intentionally doing framework-level changes:

- `js/jquery.js`
- `js/nicepage.js`
- `css/nicepage.css`
- `intlTelInput/*`

---

## 9) Content style consistency checklist

Before committing, verify:
- Dates follow a consistent style (e.g. `Month, Year`).
- Names and affiliations are spelled consistently.
- URLs open in new tab when needed (`target="_blank"` if used in templates).
- No trailing broken commas in JS arrays/objects.
- No broken quote/backtick in template strings.

---

## 10) Pre-commit validation checklist

1. Open `index.html`.
2. Test Home sections:
   - Name, title, profile image
   - Latest news
   - Social links
3. Open each inner page from navbar:
   - About
   - Research
   - Publications
   - Experience
   - Highlights
   - Contact
   - News
4. Confirm:
   - No missing images
   - No blank/broken sections
   - All key links clickable

---

## 11) Common mistakes and fixes

### Problem: page shows blank dynamic section
Likely causes:
- Wrong container ID
- JS syntax error (missing comma, quote, or backtick)

Fix:
- Re-check the edited file for syntax first.

### Problem: image/document not loading
Likely causes:
- Wrong path
- Filename case mismatch

Fix:
- Confirm actual filename and folder location.
- Match case exactly (`Shareef.jpeg` != `shareef.jpeg` on many hosts).

### Problem: navbar links go to wrong location
Likely cause:
- Incorrect relative path from `html/` page

Fix:
- Use `../index.html` for Home from inner pages.

---

## 12) Deployment

This is a static site.

For GitHub Pages (recommended):
1. Commit changes.
2. Push to the configured branch.
3. Wait for Pages deployment to finish.

No build or runtime deployment commands are required.
