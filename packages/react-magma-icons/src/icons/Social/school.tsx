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
  title: ['school'],
  paths: [
    {
      d:
        'M4.99999997,13.18 L4.99999997,15.99 C4.99999997,16.72 5.39999997,17.4 6.03999998,17.75 L11.04,20.48 C11.64,20.81 12.36,20.81 12.96,20.48 L17.96,17.75 C18.6,17.4 19,16.72 19,15.99 L19,13.18 L12.96,16.48 C12.36,16.81 11.64,16.81 11.04,16.48 L4.99999997,13.18 Z M11.04,3.51999996 L2.60999996,8.11999998 C1.91999996,8.49999999 1.91999996,9.49999999 2.60999996,9.87999999 L11.04,14.48 C11.64,14.81 12.36,14.81 12.96,14.48 L21,10.09 L21,16 C21,16.55 21.45,17 22,17 C22.55,17 23,16.55 23,16 L23,9.58999999 C23,9.21999999 22.8,8.88999999 22.48,8.70999999 L12.96,3.51999996 C12.36,3.19999996 11.64,3.19999996 11.04,3.51999996 Z',
      id: 'SocialSchoolIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'school',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSchoolIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSchoolIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSchoolIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSchoolIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
