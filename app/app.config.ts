export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://i.postimg.cc/J4CR72zy/2025-10-06-9-20-08.png',
      light: 'https://i.postimg.cc/J4CR72zy/2025-10-06-9-20-08.png',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-8 sm:py-12 lg:py-16',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `All rights reserved © ${new Date().getFullYear()} Jing`,
    colorMode: false,
    links: [{
      'icon': 'i-heroicons-solid-camera',
      'to': 'https://www.instagram.com/hybridcodee/',
      'target': '_blank',
      'aria-label': 'Instagram'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/321a17172',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/jingtangg',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  }
})
