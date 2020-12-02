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
  title: ['add_location_alt'],
  paths: [
    {
      d:
        'M19,0.999999954 C19.55,0.999999954 20,1.44999996 20,1.99999995 L20,3.99999995 L22,3.99999995 C22.55,3.99999995 23,4.44999997 23,4.99999995 C23,5.54999997 22.55,5.99999995 22,5.99999995 L20,5.99999995 L20,7.99999995 C20,8.54999999 19.55,8.99999995 19,8.99999995 C18.45,8.99999995 18,8.54999999 18,7.99999995 L18,5.99999995 L16,5.99999995 C15.45,5.99999995 15,5.54999997 15,4.99999995 C15,4.44999997 15.45,3.99999995 16,3.99999995 L18,3.99999995 L18,1.99999995 C18,1.44999996 18.45,0.999999954 19,0.999999954 Z M12,13 C13.1,13 14,12.1 14,11 C14,9.89999999 13.1,8.99999999 12,8.99999999 C10.9,8.99999999 9.99999999,9.89999999 9.99999999,11 C9.99999999,12.1 10.9,13 12,13 Z M14.72,3.46999996 C14.28,3.82999997 14,4.37999997 14,4.99999996 C14,6.09999998 14.9,6.99999996 16,6.99999996 L17,6.99999996 L17,7.99999996 C17,9.09999999 17.9,9.99999996 19,9.99999996 C19.32,9.99999996 19.62,9.91999999 19.89,9.78999999 C19.96,10.24 20,10.71 20,11.2 C20,14.38 17.55,18.12 12.66,22.43 C12.28,22.76 11.71,22.76 11.33,22.43 C6.44999998,18.12 3.99999997,14.38 3.99999997,11.2 C3.99999997,6.21999998 7.79999998,2.99999996 12,2.99999996 C12.94,2.99999996 13.86,3.15999996 14.72,3.46999996 Z',
      id: 'MapsAddLocationAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_location_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsAddLocationAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsAddLocationAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsAddLocationAltIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsAddLocationAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
