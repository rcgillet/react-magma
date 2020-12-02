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
  title: ['call_split'],
  paths: [
    {
      d:
        'M14.85,4.84999997 L16.29,6.28999998 L13.41,9.16999999 L14.83,10.59 L17.71,7.70999998 L19.15,9.14999999 C19.46,9.45999999 20,9.23999999 20,8.78999999 L20,4.49999997 C20,4.21999997 19.78,3.99999997 19.5,3.99999997 L15.21,3.99999997 C14.76,3.99999997 14.54,4.53999997 14.85,4.84999997 L14.85,4.84999997 Z M8.78999999,3.99999997 L4.49999997,3.99999997 C4.21999997,3.99999997 3.99999997,4.21999997 3.99999997,4.49999997 L3.99999997,8.78999999 C3.99999997,9.23999999 4.53999997,9.45999999 4.84999997,9.13999999 L6.28999998,7.69999998 L11,12.4 L11,19 C11,19.55 11.45,20 12,20 C12.55,20 13,19.55 13,19 L13,12 C13,11.74 12.89,11.48 12.71,11.29 L7.70999998,6.27999998 L9.14999999,4.83999997 C9.45999999,4.53999997 9.23999999,3.99999997 8.78999999,3.99999997 L8.78999999,3.99999997 Z',
      id: 'CommunicationCallSplitIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'call_split',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationCallSplitIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationCallSplitIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationCallSplitIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationCallSplitIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
