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
  title: ['assistant'],
  paths: [
    {
      d:
        'M19,1.99999996 L4.99999996,1.99999996 C3.89999997,1.99999996 2.99999996,2.89999996 2.99999996,3.99999996 L2.99999996,18 C2.99999996,19.1 3.89999997,20 4.99999996,20 L8.99999996,20 L11.29,22.29 C11.68,22.68 12.31,22.68 12.7,22.29 L15,20 L19,20 C20.1,20 21,19.1 21,18 L21,3.99999996 C21,2.89999996 20.1,1.99999996 19,1.99999996 Z M13.88,12.88 L12,17 L10.12,12.88 L5.99999997,11 L10.12,9.11999999 L12,4.99999997 L13.88,9.11999999 L18,11 L13.88,12.88 Z',
      id: 'ImageAssistantIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'assistant',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageAssistantIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageAssistantIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageAssistantIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageAssistantIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
