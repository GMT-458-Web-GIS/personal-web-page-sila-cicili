Sıla Cicili
Hacettepe University, Geomatics Engineering (4th Year)

---
# GMT-458-Web-GIS/personal-web-page-sila-cicili 

This repository belongs to the **personal-web-page-sila-cicili** project, which was created via GitHub Classroom.

---

## Project Links

You can access the live published page of the project and the main repository containing the source code using the links below:

| Link Type | Description | URL |
| :--- | :--- | :--- |
| **Live Demo (IO Link)** | The published website of the project. | [https://sila-cicili.github.io/](https://sila-cicili.github.io/) |
| **GitHub Main Repository** | The main page containing the project's source codes. | [GMT-458-Web-GIS/personal-web-page-sila-cicili](https://github.com/GMT-458-Web-GIS/personal-web-page-sila-cicili) |

---
## 🎯 Project Objectives and Requirement Fulfillment

This project successfully addresses all technical and structural requirements outlined in the course syllabus to demonstrate proficiency in HTML, CSS, and the OpenLayers library.

### Assignment Objectives Checklist

| Objective | Status and Implementation Evidence |
| :--- | :--- |
| **HTML: At least 3 different files** | **FULFILLED.** The project consists of 5 separate HTML files: `index.html`, `project.html`, `cv.html`, `hobbies.html`, and `contact.html`. |
| **CSS: Animation** | **FULFILLED.** Smooth user interactions are ensured through the use of `transition` and `transform` properties on links, CTA buttons, and visual components (hover effects). |
| **CSS: Tabular information with images** | **FULFILLED.** The experience sections on `cv.html` present professional information, enhanced by corporate logos, in an organized, list/tabular format (using the `.experience-item` flexbox structure). |
| **OpenLayers (OL) Inclusion** | **FULFILLED.** The `contact.html` page integrates an interactive map (via `ol.css` and `ol.js`) that marks a fixed location and dynamically displays coordinate information upon clicking. |
| **Regular use of Git** | **MANAGED.** The project development timeline is tracked via regular commits made on different days. (Please refer to the Git history for verification.) |
| **Overall Quality** | **HIGH.** The project; features professional content relevant to Geomatics Engineering, a consistent pastel color palette, and a clean code structure. |

---

## 🧠 AI Support and Learning Outcomes (AI Usage)

Google Gemini (Google AI) was utilized during the development process to resolve specific technical challenges and enhance the overall quality and professional presentation of the project. The AI functioned as a technical consultant and language editor.

### Specific Technical and Mesleki Bilgiler Gained:

| Topic/Area of Difficulty | Critical Learning Outcome Guided by AI | Estimated AI Time |
| :--- | :--- | :--- |
| **Dinamik JS Entegrasyonu (OpenLayers)** | **Problem:** Preventing the mapping library (`ol.js`), which is only loaded on one page (`contact.html`), from causing runtime JavaScript errors on other pages. **Solution:** Learned to implement a double-layered condition (`if (typeof ol !== 'undefined')` and `if (mapElement)`) in `script.js` to ensure code execution only when the library and DOM element are present, significantly improving application robustness. | 15 Minutes |
| **Tarayıcı Hata Tespiti (Debugging)** | Understood that the critical `ERR_FILE_NOT_FOUND` error often stems from case-sensitivity issues between link paths (`href="project.html"`) and the actual file name on the operating system, reinforcing the importance of precise path management. | 15 Minutes |
| **Profesyonel İçerik Geliştirme** | Portfolio texts were revised and translated into academic and industry-appropriate English (and Turkish), including accurately updating "Geodesy and Photogrammetry Engineering" to "Geomatics Engineering." | 30 Minutes |

### ⏱️ Total Estimated AI Usage Time

Total estimated interaction time with AI, including **initial design consultation, debugging, and comprehensive content revision:** **1 Hour**