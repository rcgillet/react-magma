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
  title: ['rule_folder'],
  paths: [
    {
      d:
        'M20,5.99999997 L12,5.99999997 L10.59,4.58999997 C10.21,4.20999997 9.69999999,3.99999997 9.16999999,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.89999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 Z M7.11999998,15.29 L5.70999997,13.88 C5.31999997,13.49 5.31999997,12.86 5.70999997,12.47 L5.70999997,12.47 C6.09999998,12.08 6.72999998,12.08 7.11999998,12.47 L7.82999998,13.18 L10.66,10.35 C11.05,9.95999999 11.68,9.95999999 12.07,10.35 L12.07,10.35 C12.46,10.74 12.46,11.37 12.07,11.76 L8.52999999,15.3 C8.13999998,15.68 7.50999998,15.68 7.11999998,15.29 Z M17.41,13 L18.29,13.88 C18.68,14.27 18.68,14.9 18.29,15.29 L18.29,15.29 C17.9,15.68 17.27,15.68 16.88,15.29 L16,14.41 L15.12,15.29 C14.73,15.68 14.1,15.68 13.71,15.29 L13.71,15.29 C13.32,14.9 13.32,14.27 13.71,13.88 L14.59,13 L13.71,12.12 C13.32,11.73 13.32,11.1 13.71,10.71 L13.71,10.71 C14.1,10.32 14.73,10.32 15.12,10.71 L16,11.59 L16.88,10.71 C17.27,10.32 17.9,10.32 18.29,10.71 L18.29,10.71 C18.68,11.1 18.68,11.73 18.29,12.12 L17.41,13 Z',
      id: 'FileRuleFolderIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'rule_folder',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileRuleFolderIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileRuleFolderIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileRuleFolderIcon-path-1',
        },
      ],
    },
  ],
};

export const FileRuleFolderIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
