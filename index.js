import {projects} from "./src/data/projects.js";

const projectContainer = document.getElementById('projectList');

projects.forEach(project => {
    const a = document.createElement('a');
    a.className = "py-2 pl-3 pr-4 rounded-lg border border-zinc-200 shadow w-fit h-fit flex items-start gap-3 bg-white hover:shadow-lg";
    
    a.href = project.link;

    const iconContainer = document.createElement('div');
    iconContainer.className = "bg-purple-50 rounded-lg border border-purple-300 w-[2rem] p-2 flex items-center justify-center";
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', project.icon);
    icon.setAttribute('stroke', '#59168b');
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