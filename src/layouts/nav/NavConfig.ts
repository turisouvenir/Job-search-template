// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  
  {
    order: '3',
    subheader: 'Career',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: Routes.career.landing },
      { title: 'Jobs', path: Routes.career.jobs },
      { title: 'Job', path: Routes.career.job(_jobs[0].id) },
      { title: 'Blog Posts', path: Routes.career.posts },
      { title: 'Blog Post', path: Routes.career.post('post-01') },
      { title: 'About', path: Routes.career.about },
      { title: 'Contact', path: Routes.career.contact },
    ],
  },
  {
    order: '5',
    subheader: 'Common',
    items: [
      { title: 'Login', path: Routes.loginIllustration },
      { title: 'Login Cover', path: Routes.loginCover },
      { title: 'Register', path: Routes.registerIllustration },
      { title: 'Register Cover', path: Routes.registerCover },
      { title: 'Reset Password', path: Routes.resetPassword },
      { title: 'Verify Code', path: Routes.verifyCode },
      { title: '404 Error', path: Routes.page404 },
      { title: '500 Error', path: Routes.page500 },
      { title: 'Maintenance', path: Routes.maintenance },
      { title: 'ComingSoon', path: Routes.comingsoon },
      { title: 'Pricing 01', path: Routes.pricing01 },
      { title: 'Pricing 02', path: Routes.pricing02 },
      { title: 'Checkout', path: Routes.checkout },
      { title: 'Support', path: Routes.support },
    ],
  }
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Jobs', path: '/jobs' },
  { title: 'Blogs', path: '/blog' },
  { title: 'About us', path: '/about-us' },
  { title: 'Contact us', path: '/contact-us' },
];
