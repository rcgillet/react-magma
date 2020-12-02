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
  title: ['closed_caption_disabled'],
  paths: [
    {
      d:
        'M6.82999998,3.99999997 L19,3.99999997 C20.1,3.99999997 21,4.89999997 21,5.99999997 L21,18 C21,18.05 20.99,18.1 20.98,18.16 L17.6,14.78 C17.84,14.59 18,14.32 18,14 L18,13.5 C18,13.22 17.78,13 17.5,13 L17,13 C16.72,13 16.5,13.22 16.5,13.5 L16.33,13.5 L14.5,11.67 L14.5,10.5 L16.5,10.5 C16.5,10.78 16.72,11 17,11 L17.5,11 C17.78,11 18,10.78 18,10.5 L18,9.99999997 C18,9.44999999 17.55,8.99999997 17,8.99999997 L14,8.99999997 C13.45,8.99999997 13,9.44999999 13,9.99999997 L13,10.17 L6.82999998,3.99999997 Z M20.49,21.9 C20.1,22.29 19.47,22.29 19.08,21.9 L17.18,20 L4.99999997,20 C3.88999997,20 2.99999996,19.1 2.99999996,18 L2.99999996,5.99999997 C2.99999996,5.94999997 3.01999996,5.89999997 3.01999996,5.84999997 L2.09999996,4.92999997 C1.70999996,4.53999997 1.70999996,3.90999997 2.09999996,3.51999996 C2.48999996,3.12999996 3.11999996,3.12999996 3.50999996,3.51999996 L20.48,20.49 C20.88,20.88 20.88,21.51 20.49,21.9 Z M11,13.83 L10.17,13 L9.99999998,13 C9.71999999,13 9.49999998,13.22 9.49999998,13.5 L7.49999998,13.5 L7.49999998,10.5 L7.66999998,10.5 L6.39999998,9.21999999 C6.15999998,9.40999999 5.99999998,9.67999999 5.99999998,9.99999999 L5.99999998,14 C5.99999998,14.55 6.44999998,15 6.99999998,15 L9.99999998,15 C10.55,15 11,14.55 11,14 L11,13.83 Z',
      id: 'AVClosedCaptionDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'closed_caption_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVClosedCaptionDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVClosedCaptionDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#AVClosedCaptionDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const AVClosedCaptionDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
