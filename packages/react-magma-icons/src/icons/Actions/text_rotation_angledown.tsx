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
  title: ['text_rotation_angledown'],
  paths: [
    {
      d:
        'M15,20.5 L15,17.96 C15,17.51 14.46,17.29 14.15,17.61 L13.59,18.17 L5.09999997,9.67999999 C4.70999997,9.28999999 4.07999997,9.28999999 3.68999997,9.67999999 C3.29999996,10.07 3.29999996,10.7 3.68999997,11.09 L12.18,19.58 L11.62,20.14 C11.3,20.46 11.52,21 11.96,21 L14.5,21 C14.78,21 15,20.77 15,20.5 L15,20.5 Z M11.25,8.47999999 L14.79,12.02 L14.12,13.62 C13.97,13.98 14.05,14.39 14.33,14.67 C14.82,15.16 15.64,14.99 15.9,14.35 L19.51,5.25999997 C19.68,4.83999997 19.58,4.34999997 19.26,4.02999997 C18.94,3.70999997 18.46,3.60999997 18.03,3.77999997 L8.92999999,7.37999998 C8.28999998,7.62999998 8.11999998,8.45999999 8.60999999,8.94999999 C8.87999999,9.21999999 9.28999999,9.29999999 9.64999999,9.14999999 L11.25,8.47999999 L11.25,8.47999999 Z M17.84,5.42999997 L15.61,10.3 L12.97,7.65999998 L17.84,5.42999997 Z',
      id: 'ActionsTextRotationAngledownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'text_rotation_angledown',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTextRotationAngledownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTextRotationAngledownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTextRotationAngledownIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTextRotationAngledownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
