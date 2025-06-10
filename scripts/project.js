// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const lastModified = document.querySelector('#lastModified');
const joinForm = document.getElementById('joinForm');
const confirmation = document.getElementById('confirmation');
const skillFilter = document.getElementById('skillFilter');
const projectsContainer = document.getElementById('projectsContainer');

const projects = [
    {
        id: 1,
        title: "Interactive Quiz App",
        description: "A JavaScript quiz application with score tracking and a countdown.",
        image: "images/project1.webp",
        skillLevel: "intermediate",
        author: "Taboka Ndlovu"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "Displays current weather and forecast using a weather API.",
        image: "images/project2.webp",
        skillLevel: "beginner",
        author: "Thabo Nyoni"
    },
    {
        id: 3,
        title: "E-commerce Site",
        description: "Full-stack e-commerce platform with cart functionality.",
        image: "images/project3.jpeg",
        skillLevel: "advanced",
        author: "Lebohang Sebata"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    lastModified.textContent = document.lastModified;

    if (projectsContainer) {
        loadProjects();
        skillFilter.addEventListener('change', filterProjects);
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateDarkModeButton(savedTheme);

    if (joinForm) {
        joinForm.addEventListener('submit', handleFormSubmit);
    }
});

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeButton(newTheme);
}

function updateDarkModeButton(theme) {
    darkModeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function loadProjects() {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-info">
                <h3>${project.title}</h3>
                <span class="skill-level ${project.skillLevel}">${project.skillLevel}</span>
                <p>${project.description}</p>
                <p><strong>By:</strong> ${project.author}</p>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

function filterProjects() {
    const selectedLevel = skillFilter.value;

    if (selectedLevel === 'all') {
        loadProjects();
        return;
    }

    const filteredProjects = projects.filter(project => project.skillLevel === selectedLevel);

    projectsContainer.innerHTML = '';

    if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects found for this skill level.</p>';
        return;
    }

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-info">
                <h3>${project.title}</h3>
                <span class="skill-level ${project.skillLevel}">${project.skillLevel}</span>
                <p>${project.description}</p>
                <p><strong>By:</strong> ${project.author}</p>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Form handling
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: joinForm.name.value,
        email: joinForm.email.value,
        skill: joinForm.skill.value,
        interests: Array.from(joinForm.querySelectorAll('input[name="interests"]:checked')).map(el => el.value),
        message: joinForm.message.value,
        timestamp: new Date().toISOString()
    };

    const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    joinForm.classList.add('hidden');
    confirmation.classList.remove('hidden');

    joinForm.reset();

    console.log('Form submitted:', formData);
    console.log('All submissions:', submissions);
}

async function fetchProjects() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(projects);
        }, 500);
    });
}