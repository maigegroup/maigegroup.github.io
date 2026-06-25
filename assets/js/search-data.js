// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-open-positions",
          title: "Open positions",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/open_positions/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-welcome-gesa-to-the-lab",
          title: 'Welcome Gesa to the lab!',
          description: "",
          section: "News",},{id: "news-welcome-steffi-to-the-lab",
          title: 'Welcome Steffi to the lab!',
          description: "",
          section: "News",},{id: "news-check-out-our-preprint-on-single-cell-trans-eqtl-mapping-with-livi",
          title: 'Check out our preprint on single-cell trans-eQTL mapping with LIVI',
          description: "",
          section: "News",},{id: "news-katharina-presented-her-work-on-large-scale-time-resolved-perturbation-screens-in-heart-organoids-at-the-perturb2026-conference",
          title: 'Katharina presented her work on large-scale, time-resolved perturbation screens in heart organoids at...',
          description: "",
          section: "News",},{id: "news-brian-is-presenting-deeprvat-in-an-educational-session-at-eshg-on-sunday-morning",
          title: 'Brian is presenting DeepRVAT in an educational session at ESHG on Sunday morning...',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "projects-brian-clarke",
          title: 'Brian Clarke',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brian_clarke.html";
            },},{id: "projects-danai-vagiaki",
          title: 'Danai Vagiaki',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dana_vagiaki.html";
            },},{id: "projects-gesa-voigt",
          title: 'Gesa Voigt',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gesa_voigt.html";
            },},{id: "projects-jiawei-luo",
          title: 'Jiawei Luo',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jiawei_luo.html";
            },},{id: "projects-joachim-seebass",
          title: 'Joachim Seebass',
          description: "Joint with Charles Imbusch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/joachim_seebass.html";
            },},{id: "projects-katharina-mikulik",
          title: 'Katharina Mikulik',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/katharina_mikulik.html";
            },},{id: "projects-magnus-wahlberg",
          title: 'Magnus Wahlberg',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/magnus_wahlberg.html";
            },},{id: "projects-manu-saraswat",
          title: 'Manu Saraswat',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/manu_saraswat.html";
            },},{id: "projects-marcel-mück",
          title: 'Marcel Mück',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/marcel_mueck.html";
            },},{id: "projects-bicycle",
          title: 'Bicycle',
          description: "Intervention-Based Causal Discovery with Cycles",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_bicycle.html";
            },},{id: "projects-deeprvat",
          title: 'DeepRVAT',
          description: "Integration of variant annotations using deep set networks for rare variant modeling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_deeprvat.html";
            },},{id: "projects-livi",
          title: 'LIVI',
          description: "Mapping trans-eQTLs at single-cell resolution using Latent Interaction Variational Inference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_livi.html";
            },},{id: "projects-rama-abdulhamid",
          title: 'Rama Abdulhamid',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rama_abdulhamid.html";
            },},{id: "projects-stefanie-mantz",
          title: 'Stefanie Mantz',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stefanie_mantz.html";
            },},{id: "projects-thibault-bechtler",
          title: 'Thibault Bechtler',
          description: "Joint with Oliver Stegle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thibault_bechtler.html";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/brianfclarke.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%66%66%69%63%65@%73%74%65%67%6C%65%6C%61%62.%6F%72%67", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/brian-clarke-04971b74", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6695-286X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3WSEMXAAAAAJ", "_blank");
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
