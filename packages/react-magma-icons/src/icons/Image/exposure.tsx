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
  title: ['exposure'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M6.74999998,6.99999998 L10.25,6.99999998 C10.66,6.99999998 11,7.33999998 11,7.74999998 C11,8.15999998 10.66,8.49999998 10.25,8.49999998 L6.74999998,8.49999998 C6.33999998,8.49999998 5.99999997,8.15999998 5.99999997,7.74999998 C5.99999997,7.33999998 6.33999998,6.99999998 6.74999998,6.99999998 Z M18,19 L4.99999997,19 L19,4.99999997 L19,18 C19,18.55 18.55,19 18,19 Z M14.5,16 L14.5,17.25 C14.5,17.66 14.84,18 15.25,18 C15.66,18 16,17.66 16,17.25 L16,16 L17.25,16 C17.66,16 18,15.66 18,15.25 C18,14.84 17.66,14.5 17.25,14.5 L16,14.5 L16,13.25 C16,12.84 15.66,12.5 15.25,12.5 C14.84,12.5 14.5,12.84 14.5,13.25 L14.5,14.5 L13.25,14.5 C12.84,14.5 12.5,14.84 12.5,15.25 C12.5,15.66 12.84,16 13.25,16 L14.5,16 Z',
      id: 'ImageExposureIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'exposure',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageExposureIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageExposureIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageExposureIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageExposureIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
