Title: Personal Portfolio Website (Final Output)
Author: Christian Gabut
Date: 5/27/2025

This were our final project for the System Integration and Architecture, this portfolio were made using HTML, CSS, JavaScript, XML, and Python, The portfolio is consists of Home (Profile), Portfolio (Lists of projects), Skills, Talents, Organizations, Services, Testimonials, and Contacts.

Sections Breakdown:

1. HOME
-------
Displays the user's full name, profile photo, personal tagline, and location. Includes quick links to social media platforms like Facebook, Instagram, and Twitter. This serves as the welcoming banner of the website.

2. SKILLS & TALENTS
-------------------
Divided into two parts:
- *Technical Skills*: Lists programming and web development skills such as Python, HTML, CSS, and JavaScript.

3. ORGANIZATIONS
----------------
Showcases participation in organizations with roles and years, Unfortunately I don't have any organizations attended

4. SERVICES
-----------
Details professional offerings such as:
- Web Design: Creating responsive and modern websites tailored to client needs.
- Graphic Design: The art of creating visual content to communicate messages using typography, imagery, color, and layout for print or  digital platforms.
-Video Editor: I create clear, engaging graphics and videos. Skilled in design, filming, and editing to deliver quality visual content.

5. PROJECTS
-----------
Highlights selected projects with descriptions, technologies used, links, and images. Example:
- To-Do List System: A tool to organize tasks by listing what needs to be done, helping you stay focused and manage time efficiently.
-Checkers: A classic board game where two players move pieces diagonally to capture the opponent’s pieces and win by clearing the board or blocking moves.

6. TESTIMONIALS
---------------
Displays peer and client feedback with names and relationships, emphasizing professionalism and skill.

7. CONTACT
----------
Provides contact information and a contact form for visitors to reach out.

---------------------------------------
FLASK (PYTHON) BACKEND OVERVIEW
---------------------------------------
- The app.py file uses Flask to serve the index.html page and static assets.
- The application runs a local development server at http://127.0.0.1:5000.
- The static/ directory contains all CSS, JavaScript, images, and XML data files.
- The frontend dynamically loads content from data.xml using JavaScript.
- Interactive UI features include navigation underline animation, burger menu toggle, media previews on talents, and testimonial animations on scroll.

Sample Python code (app.py):
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

---------------------------------------
HOW TO RUN LOCALLY?
---------------------------------------
1. Install Flask (if not already installed):
    pip install flask

2. Project Structure

    /project-root
    ├── app.py
    ├── /templates
    │   └── index.html
    └── /static
        ├── css
        │   └── style.css
        ├── js
        │   └── main.js
        ├── data
        │   └── data.xml
        └── images
            ├── profile.jpg
            ├── html-5.png
            ├── css-3.png
            └── ... (other media files)

3. Run the app:
    python app.py

4. Visit http://127.0.0.1:5000 in your browser.

CREDITS:
Developed by: Christian Gabut
Location: Hinunangan, Southern Leyte, Philippines
