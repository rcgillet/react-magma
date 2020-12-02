import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['whatshot'],
  paths: [
    {
      d:
        'M17.09,4.55999997 C16.39,3.52999996 15.59,2.56999996 14.69,1.70999996 C14.34,1.36999996 13.75,1.68999996 13.85,2.16999996 C14.04,3.10999996 14.24,4.34999997 14.24,5.45999997 C14.24,7.51999998 12.89,9.18999999 10.83,9.18999999 C9.28999999,9.18999999 8.02999998,8.25999998 7.47999998,6.92999998 C7.37999998,6.72999998 7.33999998,6.60999998 7.27999998,6.38999998 C7.16999998,5.96999997 6.61999998,5.83999997 6.37999998,6.20999998 C6.19999998,6.47999998 6.02999998,6.74999998 5.86999997,7.03999998 C4.67999997,9.07999999 3.99999997,11.46 3.99999997,14 C3.99999997,18.42 7.57999998,22 12,22 C16.42,22 20,18.42 20,14 C20,10.51 18.92,7.26999998 17.09,4.55999997 Z M11.71,19 C9.92999999,19 8.48999999,17.6 8.48999999,15.86 C8.48999999,14.24 9.53999999,13.1 11.3,12.74 C12.77,12.44 14.28,11.81 15.33,10.82 C15.61,10.56 16.07,10.68 16.15,11.05 C16.38,12.07 16.5000348,13.13 16.5000348,14.2 C16.51,16.85 14.36,19 11.71,19 L11.71,19 Z',
      id: 'SocialWhatshotIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'whatshot',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialWhatshotIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialWhatshotIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialWhatshotIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialWhatshotIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
