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
  title: ['text_snippet'],
  paths: [
    {
      d:
        'M14.17,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,9.82999999 C21,9.29999999 20.79,8.78999999 20.41,8.41999999 L15.58,3.58999996 C15.21,3.20999996 14.7,2.99999996 14.17,2.99999996 L14.17,2.99999996 Z M7.99999998,15 L16,15 C16.55,15 17,15.45 17,16 L17,16 C17,16.55 16.55,17 16,17 L7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 L6.99999998,16 C6.99999998,15.45 7.44999998,15 7.99999998,15 Z M7.99999998,11 L16,11 C16.55,11 17,11.45 17,12 L17,12 C17,12.55 16.55,13 16,13 L7.99999998,13 C7.44999998,13 6.99999998,12.55 6.99999998,12 L6.99999998,12 C6.99999998,11.45 7.44999998,11 7.99999998,11 Z M7.99999998,6.99999998 L13,6.99999998 C13.55,6.99999998 14,7.44999998 14,7.99999998 L14,7.99999998 C14,8.54999999 13.55,8.99999998 13,8.99999998 L7.99999998,8.99999998 C7.44999998,8.99999998 6.99999998,8.54999999 6.99999998,7.99999998 L6.99999998,7.99999998 C6.99999998,7.44999998 7.44999998,6.99999998 7.99999998,6.99999998 Z',
      id: 'FileTextSnippetIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'text_snippet',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileTextSnippetIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileTextSnippetIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileTextSnippetIcon-path-1',
        },
      ],
    },
  ],
};

export const FileTextSnippetIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
