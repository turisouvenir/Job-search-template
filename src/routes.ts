// ----------------------------------------------------------------------

const Routes = {
  // Career
  career: {
    landing: '',
    jobs: '/jobs',
    job: (id: string) => `/jobs/${id}`,
    posts: '/blog',
    post: (slug: string) => `/blog/${slug}`,
    about: '/about-us',
    contact: '/contact-us',
  },
  // Common
  loginCover: '/auth/login-cover',
  registerCover: '/auth/register-cover',
  loginIllustration: '/auth/login-illustration',
  registerIllustration: '/auth/register-illustration',
  resetPassword: '/auth/reset-password',
  verifyCode: '/auth/verify-code',
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricing01: '/pricing-01',
  pricing02: '/pricing-02',
  checkout: '/checkout',
  support: '/support',
  page404: '/404',
  page500: '/500',
};

export default Routes;
