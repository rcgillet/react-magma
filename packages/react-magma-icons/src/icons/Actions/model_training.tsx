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
  title: ['model_training'],
  paths: [
    {
      d:
        'M15.5,13.5 C15.5,15.5 13,17 13,18.5 L11,18.5 C11,17 8.49999999,15.5 8.49999999,13.5 C8.49999999,11.57 10.07,9.99999999 12,9.99999999 L12,9.99999999 C13.93,9.99999999 15.5,11.57 15.5,13.5 Z M13,19.5 L11,19.5 L11,20 C11,20.55 11.45,21 12,21 L12,21 C12.55,21 13,20.55 13,20 L13,19.5 Z M19,13 C19,14.39 18.59,15.69 17.88,16.78 C17.63,17.17 17.69,17.69 18.02,18.02 L18.02,18.02 C18.46,18.46 19.22,18.4 19.56,17.87 C20.47,16.47 21,14.8 21,13 C21,10.64 20.09,8.48999999 18.6,6.87999998 C18.21,6.45999998 17.55,6.44999998 17.15,6.84999998 L17.15,6.84999998 C16.77,7.22999998 16.77,7.83999998 17.13,8.23999998 C18.29,9.48999999 19,11.16 19,13 Z M15.65,4.64999997 L12.86,1.85999996 C12.54,1.53999996 12,1.75999996 12,2.20999996 L12,3.99999997 L12,3.99999997 C7.02999998,3.99999997 2.99999996,8.02999998 2.99999996,13 C2.99999996,14.8 3.52999996,16.47 4.43999997,17.88 C4.77999997,18.41 5.53999997,18.47 5.97999997,18.03 L5.97999997,18.03 C6.30999998,17.7 6.36999998,17.19 6.11999998,16.8 C4.72999997,14.65 4.47999997,11.7 6.24999998,8.79999999 C7.44999998,6.84999998 9.70999999,5.80999997 12,5.99999997 L12,5.99999997 L12,7.78999998 C12,8.23999998 12.54,8.45999999 12.85,8.13999998 L15.64,5.34999997 C15.84,5.15999997 15.84,4.83999997 15.65,4.64999997 Z',
      id: 'ActionsModelTrainingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'model_training',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsModelTrainingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsModelTrainingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsModelTrainingIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsModelTrainingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
