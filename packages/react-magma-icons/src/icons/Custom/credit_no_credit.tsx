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
  title: ['credit_no_credit'],
  paths: [
    {
      d:
        'M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M12.6602076,9.59945518 C12.0305787,9.59945518 11.5430733,9.83601223 11.1976768,10.3091334 C10.8522803,10.7822546 10.6795847,11.4415562 10.6795847,12.287058 C10.6795847,14.0464212 11.3397857,14.9260896 12.6602076,14.9260896 C13.2142811,14.9260896 13.8852757,14.7875733 14.6732113,14.5105366 L14.6732113,15.9137027 C14.025593,16.1835437 13.30243,16.3184622 12.5037007,16.3184622 C11.355977,16.3184622 10.4781075,15.9703725 9.87006579,15.2741828 C9.2620241,14.577993 8.95800781,13.5786969 8.95800781,12.2762644 C8.95800781,11.4559478 9.10731759,10.7372821 9.40594161,10.1202457 C9.70456564,9.50320929 10.1336064,9.03009519 10.6930767,8.70088919 C11.252547,8.37168318 11.9082508,8.20708265 12.6602076,8.20708265 C13.4265561,8.20708265 14.1964908,8.39237068 14.970035,8.7629523 L14.4303557,10.1229441 C14.1353295,9.98262677 13.8385089,9.86030069 13.5398849,9.75596217 C13.2412608,9.65162366 12.948038,9.59945518 12.6602076,9.59945518 Z',
      id: 'CustomCreditNoCreditIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'credit_no_credit',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomCreditNoCreditIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomCreditNoCreditIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomCreditNoCreditIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomCreditNoCreditIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
