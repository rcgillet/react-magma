import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconProps } from './iconProps';

const defaultSize = 24;

interface Path {
  d: string;
  transform?: string;
}

interface Polygon {
  id: string;
  points: string;
}

interface Use {
  id?: string,
  fill?: string,
  "xlink:href": string,
}

interface Mask {
  id: string;
  fill: string;
  uses: Use[];
}

interface Group {
  id?: string;
  stroke?: string;
  "stroke-width"?: string;
  fill?: string;
  "fill-rule"?: string;
  masks?: Mask[];
  uses?: Use[];
}

export interface SvgIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  id: string;
  testId?: string;
  title?: string;
  viewBox: string;
  paths?: Path[];
  polygon?: Polygon[];
  style?: React.CSSProperties;
  color?: string;
  size?: number;
  groups?: Group[];
  polygons?: Polygon[];
}

function generateId(id?: string) {
  return id ? id : uuidv4();
}

function useGenerateId(newId?: string) {
  const [id, updateId] = React.useState<string>(generateId(newId));
  React.useEffect(() => {
    newId && updateId(generateId(newId));
  }, [newId]);
  return id;
}

function renderPaths(paths: Path[]) {
  return paths.map(({ ...props }, index) => (
    <path key={index}{...props} />
  ));
}

function renderPolygons(polygons: Polygon[]) {
  return polygons.map(({ ...props }, index) => (
    <polygon key={index} {...props} />
  ));
}

function renderGroups(groups: Group[]) {
  return groups.map(({ masks, uses, ...props }, index) => (
    <g key={index} {...props}>
      {masks && renderMasks(masks)}
      {uses && renderUses(uses)}
    </g>
  ));
}

function renderMasks(masks: Mask[]) {
  return masks.map(({ uses, ...props }, index) => (
    <mask key={index} {...props}>
      {uses && renderUses(uses)}
    </mask>
  ));
}

function renderUses(uses: Use[]) {
  return uses.map(({ ...props }, index) => (
    <use key={index} {...props}>
    </use>
  ));
}

export const SvgIcon: React.FunctionComponent<SvgIconProps> = (
  props: SvgIconProps
) => {
  const { id: defaultId, color, size, title, testId, paths, groups, polygons, ...other } = props;
  const id = useGenerateId(defaultId);
  
  const attributes = {
    ...{
      className: 'icon',
      height: size || defaultSize,
      width: size || defaultSize,
      fill: color || 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
      'data-testid': {testId}
    },
    ...other
  }

  if(title) {
    attributes['aria-labelledby'] = id
  }

  return (
    <svg
      {...attributes}
    >
      {title && <title id={id}>{title}</title>}
      {paths?.length && renderPaths(paths)}
      {groups?.length && renderGroups(groups)}
      {polygons?.length && renderPolygons(polygons)}
    </svg>
  );
};

export function renderIcon(props: IconProps, iconType: any) {
  return iconType ? <SvgIcon {...props} {...iconType} /> : null;
}
