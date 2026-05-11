# Project-ZORO: DB Developer Portfolio & Analytics Showcase

## Overview
Project-ZORO is a comprehensive, interactive portfolio tailored for **Matru**, a Database/Data Engineer with 2 years of experience. The project serves a dual purpose: 
1. It acts as a modern, responsive web portfolio highlighting skills in Airflow, Snowflake, AWS, Python, and Java.
2. It includes a fully functional sub-project (`DB-PROJECTS`) demonstrating end-to-end Extract, Transform, Load (ETL) capabilities and front-end data visualization.

## Architecture & Technologies
The project is built using a lightweight, dependency-free stack to ensure high performance and easy deployment.

**Frontend (Portfolio & Dashboard):**
* **HTML5:** Semantic structuring with accessibility in mind (`aria-labels`, `aria-hidden`).
* **CSS3:** Custom dark-theme styling, CSS variables, CSS Grid/Flexbox layouts, and smooth transition animations.
* **Vanilla JavaScript:** DOM manipulation, IntersectionObserver for scroll-spy navigation, and custom Chatbot logic.
* **Chart.js:** Used in the analytics dashboard for rendering interactive charts.

**Backend / Data Engineering (DB-PROJECTS):**
* **Python 3:** Standard library (`csv`, `sqlite3`, `random`, `os`) used to write the ETL pipeline. No external dependencies (like Pandas) are required, making it highly portable.
* **SQLite:** A lightweight disk-based database used to store the transformed data.

## Core Components

### 1. The Portfolio (`index.html`, `styles.css`, `script.js`)
* **Hero & About:** Highlights the developer's persona (Wipro experience, SnowPro certification).
* **Projects & Skills:** Details specific competencies like Data Modeling, ETL Orchestration, and Cloud Integrations. Contains direct links to live sub-projects.
* **Scroll-Spy Navigation:** The `script.js` uses an `IntersectionObserver` to automatically highlight the active navigation link based on the user's scroll position.
* **Interactive Chatbot ("Matru Bot"):** A custom-built, keyword-driven chat widget located in the bottom right. It parses user input using Regular Expressions and provides relevant answers about Matru's database and cloud skills.

### 2. The ETL Pipeline (`etl_pipeline.py`)
Located in the `DB-PROJECTS` folder, this script demonstrates data engineering principles:
* **Extract (Mock Generation):** Generates `gym-customers.csv` containing 1,000 randomized raw records (names, age, height, weight, membership).
* **Transform:** Reads the raw CSV, concatenates names into `full_name`, calculates the `bmi`, and categorizes the user based on health brackets.
* **Load:** Inserts the cleaned data into an SQLite database (`gym.db`) and exports an Excel-compatible `gym-customers-transformed.csv`.

### 3. The Analytics Dashboard (`gym_dashboard.html`)
A live data visualization page that reads the transformed CSV output:
* **Data Parsing:** Uses vanilla JavaScript to parse the CSV text.
* **Visualization:** Renders a Bar chart (Membership Types) and a Doughnut chart (BMI Categories).
* **CORS Fallback UI:** Includes a robust fallback mechanism. If browser security (CORS) blocks the automatic local CSV fetch, the UI displays a file uploader allowing the user to manually load the data safely.

## Project Structure
```text
PROJECT-ZORO/
│
├── index.html              # Main portfolio landing page
├── styles.css              # Global styles and responsive design
├── script.js               # Chatbot logic, scroll-spy, and UI interactions
├── .gitignore              # Ignores system files and generated data files
│
└── DB-PROJECTS/            # Data Engineering Showcase
    ├── etl_pipeline.py               # Python Extract-Transform-Load script
    ├── gym_dashboard.html            # Chart.js analytics dashboard
    ├── gym-customers.csv             # Generated raw data (Ignored in Git)
    ├── gym-customers-transformed.csv # Transformed output data (Ignored in Git)
    └── gym.db                        # SQLite database (Ignored in Git)
```

## How to Run Locally

**1. View the Portfolio:**
Simply open `index.html` in any modern web browser.

**2. Run the ETL Pipeline:**
To generate fresh data, run the Python script from your terminal:
```bash
cd DB-PROJECTS/
python3 etl_pipeline.py
```

**3. View the Dashboard with Auto-Fetch:**
To view the dashboard and allow it to auto-load the CSV data, start a local Python HTTP server:
```bash
cd DB-PROJECTS/
python3 -m http.server 8000
```
Then, navigate to `http://localhost:8000/gym_dashboard.html` in your browser.
