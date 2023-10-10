export default defineAppConfig({
  alpine: {
    title: 'Kessoku DAO',
    description: 'About Kessoku DAO',
    image: {
      src: '/img/ksk.png',
      alt: 'An image showcasing my project.',
      width: 1920
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      navigation: true, // possible value are : true | false
      logo: {
        path: '/img/zzz.png',
        pathDark: '/img/zzz.png',
        alt: 'Kessoku DAO',
      },
    },
    footer: {
      credits: {
        enabled: false,
        text: 'Kessoku DAO',
        repository: 'https://www.github.com/KessokuDAO'
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow us on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'KessokuDAO',
      github: 'KessokuDAO',
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
