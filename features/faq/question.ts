import { CollapseProps } from 'antd';

export const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Who are our clients?',
    children:
      'We work with content creators as well as record labels, distributors and independent artists. Our technology can be leveraged by any person or business within the music and entertainment industry.',
  },
  // {
  //   key: '2',
  //   label: 'Where do we have a presence?',
  //   children:
  //     'Our team has a presence in Spain, the Dominican Republic, Colombia and Estonia. Even so, we can offer our services outside these areas.',
  // },
  {
    key: '3',
    label: 'What makes us stand out from our competitors?',
    children:
      'At AMG Network we base our activity on innovation, transparency and personalized contact with our customers to help you get the assistance you need.',
  },
  {
    key: '4',
    label: 'What services do we offer?',
    children:
      'Youtube Network, Music Publishing, Digital Distribution, Music Marketing',
  },
];
