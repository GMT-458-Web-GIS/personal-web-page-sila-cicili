Sıla Cicili
Hacettepe University, Geomatics Engineering (4th Year)

---

## 🎯 Project Objectives and Requirement Fulfillment

This project successfully addresses all technical and structural requirements outlined in the course syllabus to demonstrate proficiency in HTML, CSS, and the OpenLayers library.

### Assignment Objectives Checklist

| Objective | Status and Implementation Evidence | Grade Value |
| :--- | :--- | :--- |
| **HTML: At least 3 different files** | **FULFILLED.** The project consists of 5 separate HTML files: `index.html`, `project.html`, `cv.html`, `hobbies.html`, and `contact.html`. | %15 |
| **CSS: Animation** | **FULFILLED.** Smooth user interactions are ensured through the use of `transition` and `transform` properties on links, CTA buttons, and visual components (hover effects). | %15 |
| **CSS: Tabular information with images** | **FULFILLED.** The experience sections on `cv.html` present professional information, enhanced by corporate logos, in an organized, list/tabular format (using the `.experience-item` flexbox structure). | %15 |
| **OpenLayers (OL) Inclusion** | **FULFILLED.** The `contact.html` page integrates an interactive map (via `ol.css` and `ol.js`) that marks a fixed location and dynamically displays coordinate information upon clicking. | %20 |
| **Regular use of Git** | **MANAGED.** The project development timeline is tracked via regular commits made on different days. (Please refer to the Git history for verification.) | %10 |
| **Overall Quality** | **HIGH.** The project maintains a high standard, featuring professional content relevant to Geomatics Engineering, a consistent pastel color palette, and a clean code structure. | %25 |

---

## 🧠 AI Support and Learning Outcomes (AI Usage)

Google Gemini (Google AI) was utilized during the development process to resolve specific technical challenges and enhance the overall quality and professional presentation of the project. The AI functioned as a technical consultant and language editor, not just a bug solver.

### Specific Technical and Professional Knowledge Gained:

| Topic/Area of Difficulty | Critical Learning Outcome Guided by AI |
| :--- | :--- |
| **Dynamic JS Integration (OpenLayers)** | **Problem:** Preventing the mapping library (`ol.js`), which is only loaded on one page (`contact.html`), from causing runtime JavaScript errors on other pages (`project.html`, `cv.html`). **Solution:** Learned to implement a double-layered condition (`if (typeof ol !== 'undefined')` and `if (mapElement)`) in `script.js`, ensuring the map code only executes when both the library and the required DOM element are present, significantly improving application robustness. |
| **Browser Error Debugging** | Understood that the critical `ERR_FILE_NOT_FOUND` error often stems from case-sensitivity issues between link paths (`href="project.html"`) and the actual file name on the operating system, reinforcing the importance of precise path management. |
| **Professional Content Development** | Portfolio texts were revised and translated into academic and industry-appropriate English (and Turkish) with AI support, including accurately updating "Geodesy and Photogrammetry Engineering" to "Geomatics Engineering." |

### ⏱️ Estimated AI Usage Time
Total estimated interaction time with AI: **1 Hour**