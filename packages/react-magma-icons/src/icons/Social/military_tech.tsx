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
  title: ['military_tech'],
  paths: [
    {
      d:
        'M17,10.43 L17,2.99999996 C17,2.44999996 16.55,1.99999996 16,1.99999996 L7.99999998,1.99999996 C7.44999998,1.99999996 6.99999998,2.44999996 6.99999998,2.99999996 L6.99999998,10.43 C6.99999998,10.78 7.17999998,11.11 7.48999998,11.29 L11.67,13.8 L10.68,16.14 L8.45999999,16.33 C7.99999998,16.37 7.81999998,16.92 8.15999998,17.21 L9.84999999,18.67 L9.33999999,20.85 C9.23999999,21.28 9.70999999,21.62 10.09,21.39 L12,20.23 L13.91,21.38 C14.29,21.61 14.76,21.27 14.66,20.84 L14.15,18.66 L15.84,17.2 C16.17,16.91 16,16.36 15.55,16.32 L13.33,16.13 L12.34,13.79 L16.52,11.28 C16.82,11.11 17,10.79 17,10.43 Z M13,12.23 L12,12.83 L11,12.23 L11,2.99999996 L13,2.99999996 L13,12.23 Z',
      id: 'SocialMilitaryTechIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'military_tech',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialMilitaryTechIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialMilitaryTechIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialMilitaryTechIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialMilitaryTechIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
