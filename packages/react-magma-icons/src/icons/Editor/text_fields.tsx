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
  title: ['text_fields'],
  paths: [
    {
      d:
        'M2.49999996,5.49999997 C2.49999996,6.32999998 3.16999996,6.99999997 3.99999996,6.99999997 L7.49999996,6.99999997 L7.49999996,17.5 C7.49999996,18.33 8.16999998,19 8.99999996,19 C9.82999999,19 10.5,18.33 10.5,17.5 L10.5,6.99999997 L14,6.99999997 C14.83,6.99999997 15.5,6.32999998 15.5,5.49999997 C15.5,4.66999997 14.83,3.99999997 14,3.99999997 L3.99999996,3.99999997 C3.16999996,3.99999997 2.49999996,4.66999997 2.49999996,5.49999997 Z M20,8.99999999 L14,8.99999999 C13.17,8.99999999 12.5,9.66999999 12.5,10.5 C12.5,11.33 13.17,12 14,12 L15.5,12 L15.5,17.5 C15.5,18.33 16.17,19 17,19 C17.83,19 18.5,18.33 18.5,17.5 L18.5,12 L20,12 C20.83,12 21.5,11.33 21.5,10.5 C21.5,9.66999999 20.83,8.99999999 20,8.99999999 Z',
      id: 'EditorTextFieldsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'text_fields',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorTextFieldsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorTextFieldsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorTextFieldsIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorTextFieldsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
