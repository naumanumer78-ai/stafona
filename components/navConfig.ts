export type NavIconItem = {
  href: string
  label: string
  iconSrc?: string
}

export type DropdownItem = {
  href: string
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

export const products: NavIconItem[] = [
  {
    href: '/inbox',
    label: 'Inbox',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a7b84a34bd4b4280cb_Frame%20592.svg'
  },
  {
    href: '/studio',
    label: 'Studio',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a7a4e5ce4eb5495dea_Frame%20592%20(1).svg'
  },
  {
    href: '/inbox',
    label: 'Elevate',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f75bf0c74b75ff9df87178_Frame%20592%20(6).svg'
  }
]

export const company: NavIconItem[] = [
  {
    href: '/about',
    label: 'About',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f795ce50bd810f5d51d72f_Frame%20592%20(7).svg'
  },
  {
    href: 'https://trackstack-web.webflow.io/newsroom',
    label: 'Newsroom',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f795cdecb4d95ff81f0e7a_Frame%20592%20(8).svg'
  },
  {
    href: '/contact',
    label: 'Contact',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f796c74cef28ad345c3d2b_Frame%20592%20(1).png'
  },
  {
    href: '/media-kit',
    label: 'Media Kit',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a290acce0915eeb262_Frame%20592%20(3).svg'
  }
]

export const solutions: NavIconItem[] = [
  {
    href: '/inbox',
    label: 'Inbox For DJs',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a33b9e9a3722937a9d_Frame%20545.svg'
  },
  {
    href: '/studio',
    label: 'Studio For Educators',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a07c6ed58e03346f09_Frame%20593.svg'
  },
  {
    href: '/inbox',
    label: 'Inbox For Labels',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a382ec325649ee83be_Frame%20545%20(1).svg'
  }
]

export const resources: NavIconItem[] = [
  {
    href: '/blog',
    label: 'Blog',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a7b84a34bd4b4280cb_Frame%20592.svg'
  },
  {
    href: '/faqs',
    label: 'FAQs',
    iconSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f756a7b84a34bd4b4280cb_Frame%20592.svg'
  }
]

export const productDropdown: DropdownItem[] = [
  {
    href: '/inbox',
    title: 'Inbox',
    description: 'Submit your tracks to DJs and labels.',
    imageSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f61094653aa4aead65542f_Frame%2015%20(1).png'
  },
  {
    href: '/studio',
    title: 'Studio',
    description: 'Monetize your production expertise.',
    imageSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f6110c696b0e97b48e6d23_Frame%2016.png'
  },
  {
    href: '/elevate',
    title: 'Elevate',
    description: 'The relationship management master.',
    imageSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f61187431257bab1a25aa5_Frame%2017.png'
  }
]

export const solutionDropdown: DropdownItem[] = [
  {
    href: '/inbox',
    title: 'Inbox For DJs',
    description: 'Submit your tracks to DJs and labels.',
    imageSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f61fab4596b531b407c549_Frame%20545.png'
  },
  {
    href: '/studio',
    title: 'Studio For Educators',
    description: 'Monetize your production expertise.',
    imageSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f62114d769937d07925c0c_Frame%20545%20(1).png'
  },
  {
    href: '/inbox',
    title: 'Inbox For Labels',
    description: 'Submit your tracks to DJs and labels.',
    imageSrc:
      'https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67f62150e5cbf8557ef776c2_Frame%20545%20(2).png'
  }
]

