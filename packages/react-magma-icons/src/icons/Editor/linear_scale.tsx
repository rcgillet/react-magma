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
  title: ['linear_scale'],
  paths: [
    {
      d:
        'M19.5,9.49999999 C18.47,9.49999999 17.6,10.12 17.21,11 L14.29,11 C13.9,10.12 13.03,9.49999999 12,9.49999999 C10.97,9.49999999 10.1,10.12 9.70999999,11 L6.78999998,11 C6.39999998,10.12 5.52999997,9.49999999 4.49999996,9.49999999 C3.11999996,9.49999999 1.99999996,10.62 1.99999996,12 C1.99999996,13.38 3.11999996,14.5 4.49999996,14.5 C5.52999997,14.5 6.39999998,13.88 6.78999998,13 L9.70999999,13 C10.1,13.88 10.97,14.5 12,14.5 C13.03,14.5 13.9,13.88 14.29,13 L17.21,13 C17.6,13.88 18.47,14.5 19.5,14.5 C20.88,14.5 22,13.38 22,12 C22,10.62 20.88,9.49999999 19.5,9.49999999 Z',
      id: 'EditorLinearScaleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'linear_scale',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorLinearScaleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorLinearScaleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorLinearScaleIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorLinearScaleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
