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
  title: ['add_photo_alternate'],
  paths: [
    {
      d:
        'M21.02,4.99999996 L19,4.99999996 L19,2.97999996 C19,2.43999996 18.56,1.99999996 18.02,1.99999996 L17.99,1.99999996 C17.44,1.99999996 17,2.43999996 17,2.97999996 L17,4.99999996 L14.99,4.99999996 C14.45,4.99999996 14.01,5.43999997 14,5.97999997 L14,6.00999998 C14,6.55999998 14.44,6.99999996 14.99,6.99999996 L17,6.99999996 L17,9.00999999 C17,9.54999999 17.44,9.99999996 17.99,9.98999999 L18.02,9.98999999 C18.56,9.98999999 19,9.54999999 19,9.00999999 L19,6.99999996 L21.02,6.99999996 C21.56,6.99999996 22,6.55999998 22,6.01999998 L22,5.97999997 C22,5.43999997 21.56,4.99999996 21.02,4.99999996 Z M16,9.00999999 L16,7.99999997 L14.99,7.99999997 C14.46,7.99999997 13.96,7.78999998 13.58,7.41999998 C13.21,7.03999998 13,6.53999998 13,5.97999997 C13,5.61999997 13.1,5.28999997 13.27,4.99999997 L4.99999996,4.99999997 C3.89999997,4.99999997 2.99999996,5.89999997 2.99999996,6.99999997 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L17,21 C18.1,21 19,20.1 19,19 L19,10.72 C18.7,10.89 18.36,11 17.98,11 C16.89,10.99 16,10.1 16,9.00999999 Z M15.96,19 L5.99999997,19 C5.58999997,19 5.34999997,18.53 5.59999997,18.2 L7.57999998,15.57 C7.78999998,15.29 8.19999998,15.31 8.39999998,15.59 L9.99999999,18 L12.61,14.52 C12.81,14.26 13.2,14.25 13.4,14.51 L16.35,18.19 C16.61,18.52 16.38,19 15.96,19 L15.96,19 Z',
      id: 'ImageAddPhotoAlternateIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_photo_alternate',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageAddPhotoAlternateIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageAddPhotoAlternateIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageAddPhotoAlternateIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageAddPhotoAlternateIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
