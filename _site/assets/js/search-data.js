// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/~vpradodafons/";
    },
  },{id: "nav-collaborations",
          title: "collaborations",
          description: "Recent collaborations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~vpradodafons/collaborations/";
          },
        },{id: "nav-supervisions",
          title: "supervisions",
          description: "Recent supervisions and mentorships.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~vpradodafons/supervisions/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~vpradodafons/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~vpradodafons/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Some code repositories used in research and class.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~vpradodafons/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~vpradodafons/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-bioin-tacto-sensor",
          title: 'Bioin-Tacto Sensor',
          description: "Development of a bio-inspired tactile sensing",
          section: "Projects",handler: () => {
              window.location.href = "/~vpradodafons/projects/1_biointacto_sensor/";
            },},{id: "projects-smart-prosthesis-control",
          title: 'Smart Prosthesis Control',
          description: "Enhancing Usability and Autonomy",
          section: "Projects",handler: () => {
              window.location.href = "/~vpradodafons/projects/2_smart_prosthetics/";
            },},{id: "projects-robotic-disassembly-and-grasping",
          title: 'Robotic Disassembly and Grasping',
          description: "Dealing with Uncertainty",
          section: "Projects",handler: () => {
              window.location.href = "/~vpradodafons/projects/3_disassembly_tasks/";
            },},{id: "projects-tactile-surface-reconstruction-and-texture-recognition",
          title: 'Tactile Surface Reconstruction and Texture Recognition',
          description: "Advanced Multi-Modal Sensing",
          section: "Projects",handler: () => {
              window.location.href = "/~vpradodafons/projects/4_tactile_texture/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%70%72%61%64%6F%64%61%66%6F%6E%73@%6D%75%6E.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vncprado", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/ieeexplore.ieee.org/author/37086004048/", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/0412216192834076", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pradovinicius", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5705-3056", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3MTgeekAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
