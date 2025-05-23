fetch('data.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'application/xml');

    // ✅ Declare this ONCE at the top
    const toClassName = text =>
      text.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

    // Home
    const name = xml.querySelector('home name').textContent;
    const photo = xml.querySelector('home photo').textContent;
    const intro = xml.querySelector('home intro').textContent;
    const tagline = xml.querySelector('home tagline').textContent;
    const location = xml.querySelector('home location').textContent;
    const socials = xml.querySelectorAll('home socials > *');

    document.getElementById('home').innerHTML = `
      <nav class="navbar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills-talents">Skills & Talents</a></li>
            <li><a href="#organizations">Organizations</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

      <span class="photo-container">
        <img class="photo" src="${photo}" alt="Profile Photo">
      </span>
      <h1>${name}</h1>  
      <p class="intro">${intro}</p>
      <p class="tagline">${tagline}</p>
      <p class="location">Location: ${location}</p>
      <p class="social-label"></p>
      <ul class="socials">
        ${Array.from(socials).map(s => {
          const platform = s.tagName.toLowerCase();
          const icons = {
            facebook: 'fab fa-facebook',
            twitter: 'fab fa-twitter',
            instagram: 'fab fa-instagram',
            linkedin: 'fab fa-linkedin',
            github: 'fab fa-github',
            youtube: 'fab fa-youtube',
            tiktok: 'fab fa-tiktok',
            email: 'fas fa-envelope'
          };
          const iconClass = icons[platform] || 'fas fa-globe';
          return `<li><a href="${s.textContent}" target="_blank"><i class="${iconClass}"></i> ${platform}</a></li>`;
        }).join('')}
      </ul>
    `;

    // Portfolio
        const projects = xml.querySelectorAll('projects project');
        document.getElementById('portfolio').innerHTML = `
        <h2>Portfolio</h2>
        <div class="portfolio-slider">
            ${Array.from(projects).slice(0, 2).map((p, index) => {
            const images = ['check-list.png', 'checker-board.png'];
            return `
                <div class="slide">
                <h3 class="project-title">${p.querySelector('title').textContent}</h3>
                <img src="${images[index]}" alt="Project Image" class="portfolio-image">
                <p>${p.querySelector('description').textContent}</p>
                <p><strong>Technologies:</strong> ${p.querySelector('tech').textContent}</p>
                <a href="${p.querySelector('link').textContent}" target="_blank">View Project</a>
                </div>
            `;
            }).join('')}
        </div>
        `;




    // Skills & Talents
    const skills = xml.getElementsByTagName('skill');
    const talents = xml.getElementsByTagName('talent');

    document.getElementById('skills-talents').innerHTML = `
      <h2>Skills</h2>
      <div class="slider skills-slider">
        ${Array.from(skills).map(s => {
          const text = s.textContent.trim();
          const className = `skill-${toClassName(text)}`;
          let imgTag = '';

          if (text.toLowerCase() === 'html') {
            imgTag = '<img src="html-5.png" alt="HTML" class="skill-icon">';
          } else if (text.toLowerCase() === 'css') {
            imgTag = '<img src="css-3.png" alt="CSS" class="skill-icon">';
          } else if (text.toLowerCase() === 'javascript') {
            imgTag = '<img src="java-script.png" alt="JavaScript" class="skill-icon">';
          }

          return `<div class="slide ${className}">${text}<br>${imgTag}</div>`;
        }).join('')}
      </div>

      <h2>Talents</h2>
      <div class="slider talents-slider">
        ${Array.from(talents).map(t => {
          const text = t.textContent.trim();
          const className = `talent-${toClassName(text)}`;
          if (text.toLowerCase() === 'singing') {
            return `<div class="slide ${className}"><img src="sticker.png" alt="sticker" class="talent-sticker">${text}</div>`;
          } else {
            return `<div class="slide ${className}">${text}</div>`;
          }
        }).join('')}
      </div>
    `;

    // Organizations
    const orgs = xml.querySelectorAll('organizations org');
    document.getElementById('organizations').innerHTML = `
      <h2>Organizations</h2>
      ${Array.from(orgs).map(o => `
        <div>
          <p><strong>${o.querySelector('name').textContent}</strong> - ${o.querySelector('role').textContent}</p>
          <p>${o.querySelector('years').textContent}</p>
        </div>
      `).join('')}  
    `;

    // Services
        const services = xml.getElementsByTagName('service');
        document.getElementById('services').innerHTML = `
        <h2>Services</h2>
        <div class="slider services-slider">
            ${Array.from(services)
            .map(service => {
                const text = service.textContent.trim();
                const className = `service-${toClassName(text)}`;
                let imgTag = '';

                if (text.toLowerCase() === 'web design') {
                imgTag = '<img src="web_design.png" alt="Web Design" class="service-icon">';
                } else if (text.toLowerCase() === 'graphic design') {
                imgTag = '<img src="graphic_design.png" alt="Graphic Design" class="service-icon">';
                } else if (text.toLowerCase() === 'video editor') {
                imgTag = '<img src="video_editor.png" alt="Video Editor" class="service-icon">';
                }

                return `<div class="slide ${className}">${text}<br>${imgTag}</div>`;
            })
            .join('')}
        </div>
        `;



    // Testimonials
    const testimonials = xml.querySelectorAll('testimonials testimonial');
    document.getElementById('testimonials').innerHTML = `
      <h2>Testimonials</h2>
      ${Array.from(testimonials).map(t => `
        <blockquote>
          <p>"${t.querySelector('message').textContent}"</p>
          <footer>- ${t.querySelector('name').textContent}, ${t.querySelector('relation').textContent}</footer>
        </blockquote>
      `).join('')}
    `;
        //Contacts
        const email = xml.querySelector('contact email')?.textContent || '';
        const phone = xml.querySelector('contact phone')?.textContent || '';

        if (email) {
        const emailLink = document.getElementById('email-link');
        emailLink.href = `mailto:${email}`;
        emailLink.textContent = email;
        }

        if (phone) {
        const phoneLink = document.getElementById('phone-link');
        phoneLink.href = `tel:${phone}`;
        phoneLink.textContent = phone;
        }

  });

    document.getElementById('testimonial-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && comment) {
        const testimonialsSection = document.getElementById('testimonials');
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('testimonial');
        newTestimonial.innerHTML = `<p>"${comment}"</p><h4>- ${name}</h4>`;
        testimonialsSection.appendChild(newTestimonial);

        // Clear form
        this.reset();
    }
    });
