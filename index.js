import {projects} from "./src/data/projects.js";

const projectContainer = document.getElementById('projectList');

projects.forEach(project => {
    const a = document.createElement('a');
    a.className = "p-2 rounded-lg border border-zinc-200 shadow w-[15rem] h-fit flex items-start gap-3 bg-white hover:shadow-lg";
    
    a.href = project.link;

    const iconContainer = document.createElement('div');
    iconContainer.className = "bg-white rounded-lg border border-zinc-200 w-[2rem] p-2 flex items-center justify-center";
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', project.icon);
    icon.className = "size-4";

    iconContainer.appendChild(icon);
    a.appendChild(iconContainer);

    const projectName = document.createElement('p');
    projectName.innerText = project.name;
    projectName.className = "font-medium mt-1";
    a.appendChild(projectName);

    projectContainer.appendChild(a);
});

lucide.createIcons();