import '../scss/main.scss';

console.log('Hello 👋');

fetch('https://api.github.com/users/MichalSzeniak/repos?sort=created')
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      // console.log(repo);
      const { name, html_url, description, homepage } = repo;
      const template = document.querySelector('.projects__container');
      const project = `
      <article class="project">
      <img class="project__icon" src="githubLogo.svg" alt="">
      <h3 class="project__name">
          <span>project:</span>
          <span>${name}</span>
      </h3>
      <p class="project__description">
          <span>description:</span>
          <span>${description}</span>
      </p>
      <div class="project__links">
          <a class="project__link" target="_blank" href="${homepage}" title="${name}">
              <img class="project__link--icon" src="monitor.svg" alt="">
              Demo</a>
          <a class="project__link project__link--decoration" target="_blank" href="${html_url}" title="${name}">
              <img class="project__link--icon" src="code.svg" alt=""> Github</a>
      </div>
      </article>`;
        if(homepage && description) {
      template.innerHTML += project;
    }
    }
  })
  .catch((error) => {
    console.log(error);
  });
