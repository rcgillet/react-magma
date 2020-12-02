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
  title: ['tag_faces'],
  paths: [
    {
      d:
        'M12.01,1.99999996 C6.48999998,1.99999996 2.01999996,6.47999998 2.01999996,12 C2.01999996,17.52 6.48999998,22 12.01,22 C17.54,22 22.02,17.52 22.02,12 C22.02,6.47999998 17.54,1.99999996 12.01,1.99999996 Z M12.02,20 C7.59999998,20 4.01999997,16.42 4.01999997,12 C4.01999997,7.57999998 7.59999998,3.99999997 12.02,3.99999997 C16.44,3.99999997 20.02,7.57999998 20.02,12 C20.02,16.42 16.44,20 12.02,20 Z M15.52,11 C16.35,11 17.02,10.33 17.02,9.49999998 C17.02,8.66999999 16.35,7.99999998 15.52,7.99999998 C14.69,7.99999998 14.02,8.66999999 14.02,9.49999998 C14.02,10.33 14.69,11 15.52,11 Z M8.51999998,11 C9.34999999,11 10.02,10.33 10.02,9.49999998 C10.02,8.66999999 9.34999999,7.99999998 8.51999998,7.99999998 C7.68999998,7.99999998 7.01999998,8.66999999 7.01999998,9.49999998 C7.01999998,10.33 7.68999998,11 8.51999998,11 Z M12.02,17.5 C14.05,17.5 15.82,16.39 16.77,14.75 C16.96,14.42 16.72,14 16.33,14 L7.70999998,14 C7.32999998,14 7.07999998,14.42 7.26999998,14.75 C8.21999998,16.39 9.98999999,17.5 12.02,17.5 Z',
      id: 'ImageTagFacesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tag_faces',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageTagFacesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageTagFacesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageTagFacesIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageTagFacesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
