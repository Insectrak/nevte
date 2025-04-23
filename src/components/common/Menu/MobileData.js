const menu_data = [
  {
    id: 1,
    title: 'Inicio',
    link: '/',
    submenus: [
      { title: 'Home Style 1', link: '/' },
      { title: 'Home Style 2', link: '/home-2' },
      { title: 'Home Style 3', link: '/home-3' },
    ]
  },
  {
    id: 2,
    title: 'Nosotros',
    link: '#nosotros',
  },
  {
    id: 3,
    title: 'Características',
    link: '#caracteristicas',
    submenus: [
      { title: 'Team', link: '/team' },
      { title: 'Team Details', link: '/team-details' },
      { title: 'Service', link: '/service' },
      { title: 'Service Details', link: '/service-details' },
      { title: 'Price', link: '/price' },
      { title: 'Contact', link: '/contact' },
      { title: 'Faq', link: '/faq' },
    ]
  },
  {
    id: 4,
    title: 'Líneas',
    link: '#lineas',
    submenus: [
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Portfolio Details', link: '/portfolio-details' },
    ]
  },
  {
    id: 5,
    title: 'Testimonios',
    link: '#testimonios',
    submenus: [
      { title: 'Blog', link: '/blog' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
]

export default menu_data;
