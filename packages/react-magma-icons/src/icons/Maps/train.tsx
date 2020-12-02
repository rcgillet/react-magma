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
  title: ['train'],
  paths: [
    {
      d:
        'M12,1.99999996 C7.99999997,1.99999996 3.99999997,2.49999996 3.99999997,5.99999996 L3.99999997,15.5 C3.99999997,17.43 5.56999997,19 7.49999997,19 L6.34999998,20.15 C6.03999998,20.46 6.25999998,21 6.70999998,21 L7.79999998,21 C7.92999998,21 8.05999998,20.95 8.14999998,20.85 L9.99999997,19 L14,19 L15.85,20.85 C15.94,20.94 16.07,21 16.2,21 L17.29,21 C17.74,21 17.96,20.46 17.64,20.15 L16.5,19 C18.43,19 20,17.43 20,15.5 L20,5.99999996 C20,2.49999996 16,1.99999996 12,1.99999996 Z M7.49999998,17 C6.66999998,17 5.99999998,16.33 5.99999998,15.5 C5.99999998,14.67 6.66999998,14 7.49999998,14 C8.32999998,14 8.99999998,14.67 8.99999998,15.5 C8.99999998,16.33 8.32999998,17 7.49999998,17 Z M11,9.99999998 L5.99999998,9.99999998 L5.99999998,5.99999998 L11,5.99999998 L11,9.99999998 Z M16.5,17 C15.67,17 15,16.33 15,15.5 C15,14.67 15.67,14 16.5,14 C17.33,14 18,14.67 18,15.5 C18,16.33 17.33,17 16.5,17 Z M18,9.99999998 L13,9.99999998 L13,5.99999998 L18,5.99999998 L18,9.99999998 Z',
      id: 'MapsTrainIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'train',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsTrainIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsTrainIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsTrainIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsTrainIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
