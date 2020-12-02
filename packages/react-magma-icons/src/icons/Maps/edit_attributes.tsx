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
  title: ['edit_attributes'],
  paths: [
    {
      d:
        'M17.63,6.99999998 L6.36999998,6.99999998 C3.95999997,6.99999998 1.99999996,9.23999999 1.99999996,12 C1.99999996,14.76 3.95999997,17 6.36999998,17 L17.63,17 C20.04,17 22,14.76 22,12 C22,9.23999999 20.04,6.99999998 17.63,6.99999998 Z M11.11,10.6 L7.59999998,14.11 C7.49999998,14.21 7.36999998,14.26 7.24999998,14.26 C7.12999998,14.26 6.98999998,14.21 6.89999998,14.11 L5.03999997,12.25 C4.83999997,12.05 4.83999997,11.74 5.03999997,11.54 C5.23999997,11.34 5.54999997,11.34 5.74999997,11.54 L7.25999998,13.05 L10.42,9.88999999 C10.62,9.68999999 10.93,9.68999999 11.13,9.88999999 C11.33,10.09 11.3,10.4 11.11,10.6 L11.11,10.6 Z',
      id: 'MapsEditAttributesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'edit_attributes',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsEditAttributesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsEditAttributesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsEditAttributesIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsEditAttributesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
