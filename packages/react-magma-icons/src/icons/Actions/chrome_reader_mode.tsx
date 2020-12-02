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
  title: ['chrome_reader_mode'],
  paths: [
    {
      d:
        'M21,3.99999997 L2.99999995,3.99999997 C1.89999996,3.99999997 0.999999954,4.89999997 0.999999954,5.99999997 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,5.99999997 C23,4.89999997 22.1,3.99999997 21,3.99999997 Z M21,18 C21,18.55 20.55,19 20,19 L12,19 L12,5.99999997 L20,5.99999997 C20.55,5.99999997 21,6.44999998 21,6.99999997 L21,18 Z M19.25,9.49999999 L13.75,9.49999999 C13.34,9.49999999 13,9.83999999 13,10.25 C13,10.66 13.34,11 13.75,11 L19.25,11 C19.66,11 20,10.66 20,10.25 C20,9.83999999 19.66,9.49999999 19.25,9.49999999 Z M19.25,12 L13.75,12 C13.34,12 13,12.34 13,12.75 C13,13.16 13.34,13.5 13.75,13.5 L19.25,13.5 C19.66,13.5 20,13.16 20,12.75 C20,12.34 19.66,12 19.25,12 Z M19.25,14.5 L13.75,14.5 C13.34,14.5 13,14.84 13,15.25 C13,15.66 13.34,16 13.75,16 L19.25,16 C19.66,16 20,15.66 20,15.25 C20,14.84 19.66,14.5 19.25,14.5 Z',
      id: 'ActionsChromeReaderModeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'chrome_reader_mode',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsChromeReaderModeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsChromeReaderModeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsChromeReaderModeIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsChromeReaderModeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
