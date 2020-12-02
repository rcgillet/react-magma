const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const indexFile = './src/index.ts';

fs.writeFileSync(
  indexFile,
  `export { IconProps } from './iconProps';
export { SvgIconProps } from './SvgIcon';
export { AddPersonIcon } from './icons/AddPersonIcon';
export { AlertIcon } from './icons/AlertIcon';
export { AndroidIcon } from './icons/AndroidIcon';
export { AngleDownIcon } from './icons/AngleDownIcon';
export { AngleDownDoubleIcon } from './icons/AngleDownDoubleIcon';
export { AngleLeftIcon } from './icons/AngleLeftIcon';
export { AngleLeftDoubleIcon } from './icons/AngleLeftDoubleIcon';
export { AngleRightIcon } from './icons/AngleRightIcon';
export { AngleRightDoubleIcon } from './icons/AngleRightDoubleIcon';
export { AngleUpIcon } from './icons/AngleUpIcon';
export { AngleUpDoubleIcon } from './icons/AngleUpDoubleIcon';
export { AppleIcon } from './icons/AppleIcon';
export { ArrowDoubleIcon } from './icons/ArrowDoubleIcon';
export { ArrowDown2Icon } from './icons/ArrowDown2Icon';
export { ArrowLeft2Icon } from './icons/ArrowLeft2Icon';
export { ArrowRight2Icon } from './icons/ArrowRight2Icon';
export { ArrowUp2Icon } from './icons/ArrowUp2Icon';
export { ArticleIcon } from './icons/ArticleIcon';
export { AssignIcon } from './icons/AssignIcon';
export { AsteriskIcon } from './icons/AsteriskIcon';
export { AttachmentIcon } from './icons/AttachmentIcon';
export { BackwardIcon } from './icons/BackwardIcon';
export { Backward2Icon } from './icons/Backward2Icon';
export { BankIcon } from './icons/BankIcon';
export { BellIcon } from './icons/BellIcon';
export { BitcoinIcon } from './icons/BitcoinIcon';
export { BlockedIcon } from './icons/BlockedIcon';
export { Book2Icon } from './icons/Book2Icon';
export { BookmarkIcon } from './icons/BookmarkIcon';
export { BubbleIcon } from './icons/BubbleIcon';
export { Bug2Icon } from './icons/Bug2Icon';
export { CalendarIcon } from './icons/CalendarIcon';
export { CancelCircleIcon } from './icons/CancelCircleIcon';
export { CaretDownIcon } from './icons/CaretDownIcon';
export { CaretLeftIcon } from './icons/CaretLeftIcon';
export { CaretRightIcon } from './icons/CaretRightIcon';
export { CaretUpIcon } from './icons/CaretUpIcon';
export { CartIcon } from './icons/CartIcon';
export { CcAmexIcon } from './icons/CcAmexIcon';
export { CcDiscoverIcon } from './icons/CcDiscoverIcon';
export { CcMastercardIcon } from './icons/CcMastercardIcon';
export { CcPaypalIcon } from './icons/CcPaypalIcon';
export { CcStripeIcon } from './icons/CcStripeIcon';
export { CcVisaIcon } from './icons/CcVisaIcon';
export { CheckIcon } from './icons/CheckIcon';
export { CircleDownIcon } from './icons/CircleDownIcon';
export { CircleLeftIcon } from './icons/CircleLeftIcon';
export { CircleRightIcon } from './icons/CircleRightIcon';
export { CircleUpIcon } from './icons/CircleUpIcon';
export { ClockIcon } from './icons/ClockIcon';
export { Cloud2Icon } from './icons/Cloud2Icon';
export { CnyIcon } from './icons/CnyIcon';
export { CodeIcon } from './icons/CodeIcon';
export { Cog2Icon } from './icons/Cog2Icon';
export { CommentsIcon } from './icons/CommentsIcon';
export { CompassIcon } from './icons/CompassIcon';
export { ConnectionIcon } from './icons/ConnectionIcon';
export { CopyIcon } from './icons/CopyIcon';
export { CountsTowardsGradeIcon } from './icons/CountsTowardsGradeIcon';
export { CourseIcon } from './icons/CourseIcon';
export { CreditNoCreditIcon } from './icons/CreditNoCreditIcon';
export { CrossIcon } from './icons/CrossIcon';
export { CubeIcon } from './icons/CubeIcon';
export { DashboardIcon } from './icons/DashboardIcon';
export { DollarIcon } from './icons/DollarIcon';
export { DotCircleOIcon } from './icons/DotCircleOIcon';
export { Download2Icon } from './icons/Download2Icon';
export { DroppedIcon } from './icons/DroppedIcon';
export { EllipsisHIcon } from './icons/EllipsisHIcon';
export { EllipsisVIcon } from './icons/EllipsisVIcon';
export { EnlargeIcon } from './icons/EnlargeIcon';
export { Enlarge2Icon } from './icons/Enlarge2Icon';
export { EntypoIcon } from './icons/EntypoIcon';
export { EnvelopeOIcon } from './icons/EnvelopeOIcon';
export { EnvelopeOpenIcon } from './icons/EnvelopeOpenIcon';
export { EnvelopeOpenOIcon } from './icons/EnvelopeOpenOIcon';
export { EnvelopeIcon } from './icons/EnvelopeIcon';
export { ErrorBlackIcon } from './icons/ErrorBlackIcon';
export { EurIcon } from './icons/EurIcon';
export { ExamIcon } from './icons/ExamIcon';
export { ExternalLinkIcon } from './icons/ExternalLinkIcon';
export { Extracredit2Icon } from './icons/Extracredit2Icon';
export { EyeSlashIcon } from './icons/EyeSlashIcon';
export { Eye2Icon } from './icons/Eye2Icon';
export { FacebookIcon } from './icons/FacebookIcon';
export { Feed5Icon } from './icons/Feed5Icon';
export { FileArchiveOIcon } from './icons/FileArchiveOIcon';
export { FileAudioOIcon } from './icons/FileAudioOIcon';
export { FileCodeOIcon } from './icons/FileCodeOIcon';
export { FileExcelOIcon } from './icons/FileExcelOIcon';
export { FileImageOIcon } from './icons/FileImageOIcon';
export { FileMovieOIcon } from './icons/FileMovieOIcon';
export { FileOIcon } from './icons/FileOIcon';
export { FilePdfOIcon } from './icons/FilePdfOIcon';
export { FilePowerpointOIcon } from './icons/FilePowerpointOIcon';
export { FileWordOIcon } from './icons/FileWordOIcon';
export { Filter2Icon } from './icons/Filter2Icon';
export { FirstIcon } from './icons/FirstIcon';
export { FlagOIcon } from './icons/FlagOIcon';
export { Flag3Icon } from './icons/Flag3Icon';
export { FlashcardsIcon } from './icons/FlashcardsIcon';
export { FolderOIcon } from './icons/FolderOIcon';
export { FolderOpenOIcon } from './icons/FolderOpenOIcon';
export { FontSizeIcon } from './icons/FontSizeIcon';
export { ForwardIcon } from './icons/ForwardIcon';
export { Forward2Icon } from './icons/Forward2Icon';
export { Forward3Icon } from './icons/Forward3Icon';
export { GbpIcon } from './icons/GbpIcon';
export { GlassdoorIcon } from './icons/GlassdoorIcon';
export { GoogleDriveIcon } from './icons/GoogleDriveIcon';
export { GooglePlusIcon } from './icons/GooglePlusIcon';
export { GoogleplayIcon } from './icons/GoogleplayIcon';
export { GraduationCapIcon } from './icons/GraduationCapIcon';
export { GroupIcon } from './icons/GroupIcon';
export { HighlightIcon } from './icons/HighlightIcon';
export { Home32Icon } from './icons/Home32Icon';
export { ImageIcon } from './icons/ImageIcon';
export { ImagesIcon } from './icons/ImagesIcon';
export { InProgressIcon } from './icons/InProgressIcon';
export { IndentDecreaseIcon } from './icons/IndentDecreaseIcon';
export { IndentIncreaseIcon } from './icons/IndentIncreaseIcon';
export { InfoIcon } from './icons/InfoIcon';
export { Info2Icon } from './icons/Info2Icon';
export { Info22Icon } from './icons/Info22Icon';
export { InrIcon } from './icons/InrIcon';
export { InstagramIcon } from './icons/InstagramIcon';
export { InteractiveIcon } from './icons/InteractiveIcon';
export { Key3Icon } from './icons/Key3Icon';
export { KrwIcon } from './icons/KrwIcon';
export { LastIcon } from './icons/LastIcon';
export { LatePenaltyIcon } from './icons/LatePenaltyIcon';
export { LifebuoyIcon } from './icons/LifebuoyIcon';
export { LightningIcon } from './icons/LightningIcon';
export { LinkIcon } from './icons/LinkIcon';
export { LinkedinIcon } from './icons/LinkedinIcon';
export { ListNumberedIcon } from './icons/ListNumberedIcon';
export { ListIcon } from './icons/ListIcon';
export { List2Icon } from './icons/List2Icon';
export { LockIcon } from './icons/LockIcon';
export { ManualGradedIcon } from './icons/ManualGradedIcon';
export { MapMarkerIcon } from './icons/MapMarkerIcon';
export { MarketIcon } from './icons/MarketIcon';
export { MenuSteppedIcon } from './icons/MenuSteppedIcon';
export { MenuIcon } from './icons/MenuIcon';
export { MicrophoneSlashIcon } from './icons/MicrophoneSlashIcon';
export { MicrophoneIcon } from './icons/MicrophoneIcon';
export { MinusCircleIcon } from './icons/MinusCircleIcon';
export { MinusIcon } from './icons/MinusIcon';
export { MTAct1TimeIcon } from './icons/MTAct1TimeIcon';
export { MTActLearnIcon } from './icons/MTActLearnIcon';
export { MTActSerialIcon } from './icons/MTActSerialIcon';
export { MtIcon } from './icons/MtIcon';
export { Music2Icon } from './icons/Music2Icon';
export { NextIcon } from './icons/NextIcon';
export { Next2Icon } from './icons/Next2Icon';
export { NonMindtapActivityIcon } from './icons/NonMindtapActivityIcon';
export { NotificationIcon } from './icons/NotificationIcon';
export { Notification2Icon } from './icons/Notification2Icon';
export { PaletteIcon } from './icons/PaletteIcon';
export { ParagraphCenterIcon } from './icons/ParagraphCenterIcon';
export { ParagraphJustifyIcon } from './icons/ParagraphJustifyIcon';
export { ParagraphLeftIcon } from './icons/ParagraphLeftIcon';
export { ParagraphRightIcon } from './icons/ParagraphRightIcon';
export { PauseIcon } from './icons/PauseIcon';
export { Pause2Icon } from './icons/Pause2Icon';
export { Pencil3Icon } from './icons/Pencil3Icon';
export { PhoneHangUpIcon } from './icons/PhoneHangUpIcon';
export { PhoneIcon } from './icons/PhoneIcon';
export { PinIcon } from './icons/PinIcon';
export { PinterestIcon } from './icons/PinterestIcon';
export { Play2Icon } from './icons/Play2Icon';
export { Play3Icon } from './icons/Play3Icon';
export { PlusIcon } from './icons/PlusIcon';
export { PracticeIcon } from './icons/PracticeIcon';
export { PreviousIcon } from './icons/PreviousIcon';
export { Previous2Icon } from './icons/Previous2Icon';
export { PrintIcon } from './icons/PrintIcon';
export { ProfileIcon } from './icons/ProfileIcon';
export { QuestionCircleOIcon } from './icons/QuestionCircleOIcon';
export { QuestionCircleIcon } from './icons/QuestionCircleIcon';
export { Reading2Icon } from './icons/Reading2Icon';
export { RedoIcon } from './icons/RedoIcon';
export { RefreshIcon } from './icons/RefreshIcon';
export { ReplyIcon } from './icons/ReplyIcon';
export { RoubleIcon } from './icons/RoubleIcon';
export { SearchMinusIcon } from './icons/SearchMinusIcon';
export { SearchPlusIcon } from './icons/SearchPlusIcon';
export { Search2Icon } from './icons/Search2Icon';
export { ShrinkIcon } from './icons/ShrinkIcon';
export { Shrink2Icon } from './icons/Shrink2Icon';
export { SignInIcon } from './icons/SignInIcon';
export { SignOutIcon } from './icons/SignOutIcon';
export { SnapchatIcon } from './icons/SnapchatIcon';
export { SpotifyIcon } from './icons/SpotifyIcon';
export { StackIcon } from './icons/StackIcon';
export { StarEmptyIcon } from './icons/StarEmptyIcon';
export { StarFullIcon } from './icons/StarFullIcon';
export { StarHalfIcon } from './icons/StarHalfIcon';
export { StatsBarsIcon } from './icons/StatsBarsIcon';
export { StatsBars2Icon } from './icons/StatsBars2Icon';
export { StatsBars3Icon } from './icons/StatsBars3Icon';
export { StatsBoxPlotIcon } from './icons/StatsBoxPlotIcon';
export { StatsDotsIcon } from './icons/StatsDotsIcon';
export { StatsDotPlotIcon } from './icons/StatsDotPlotIcon';
export { StatsScatterIcon } from './icons/StatsScatterIcon';
export { StatsPieChartIcon } from './icons/StatsPieChartIcon';
export { StopIcon } from './icons/StopIcon';
export { Stop2Icon } from './icons/Stop2Icon';
export { SwapHorizIcon } from './icons/SwapHorizIcon';
export { TargetIcon } from './icons/TargetIcon';
export { ThIcon } from './icons/ThIcon';
export { ThumbsODownIcon } from './icons/ThumbsODownIcon';
export { ThumbsOUpIcon } from './icons/ThumbsOUpIcon';
export { TimerIcon } from './icons/TimerIcon';
export { TrashOIcon } from './icons/TrashOIcon';
export { TruckIcon } from './icons/TruckIcon';
export { TuneIcon } from './icons/TuneIcon';
export { TwitterIcon } from './icons/TwitterIcon';
export { UnarchiveIcon } from './icons/UnarchiveIcon';
export { UndoIcon } from './icons/UndoIcon';
export { UnlockedIcon } from './icons/UnlockedIcon';
export { Upload2Icon } from './icons/Upload2Icon';
export { VideoCameraIcon } from './icons/VideoCameraIcon';
export { VideoIcon } from './icons/VideoIcon';
export { VolumeDownIcon } from './icons/VolumeDownIcon';
export { VolumeOffIcon } from './icons/VolumeOffIcon';
export { VolumeUpIcon } from './icons/VolumeUpIcon';
export { WarningIcon } from './icons/WarningIcon';
export { WidgetsIcon } from './icons/WidgetsIcon';
export { Windows8Icon } from './icons/Windows8Icon';
export { WlGotItIcon } from './icons/WlGotItIcon';
export { WlLearnItIcon } from './icons/WlLearnItIcon';
export { WlPracticeItIcon } from './icons/WlPracticeItIcon';
export { WlReadyIcon } from './icons/WlReadyIcon';
export { WlUseItIcon } from './icons/WlUseItIcon';
export { WrenchIcon } from './icons/WrenchIcon';
export { YoutubeIcon } from './icons/YoutubeIcon';

//aliases
export { ArrowDown2Icon as ArrowDownIcon } from './icons/ArrowDown2Icon';
export { ArrowLeft2Icon as ArrowLeftIcon } from './icons/ArrowLeft2Icon';
export { ArrowRight2Icon as ArrowRightIcon } from './icons/ArrowRight2Icon';
export { ArrowUp2Icon as ArrowUpIcon } from './icons/ArrowUp2Icon';
export { Book2Icon as BookIcon } from './icons/Book2Icon';
export { Bug2Icon as BugIcon } from './icons/Bug2Icon';
export { Cloud2Icon as CloudIcon } from './icons/Cloud2Icon';
export { Cog2Icon as CogIcon } from './icons/Cog2Icon';
export { Download2Icon as DownloadIcon } from './icons/Download2Icon';
export { Extracredit2Icon as ExtracreditIcon } from './icons/Extracredit2Icon';
export { Eye2Icon as EyeIcon } from './icons/Eye2Icon';
export { Feed5Icon as FeedIcon } from './icons/Feed5Icon';
export { Filter2Icon as FilterIcon } from './icons/Filter2Icon';
export { Flag3Icon as FlagIcon } from './icons/Flag3Icon';
export { Home32Icon as HomeIcon } from './icons/Home32Icon';
export { Key3Icon as KeyIcon } from './icons/Key3Icon';
export { MTAct1TimeIcon as MTActTimeIcon } from './icons/MTAct1TimeIcon';
export { Music2Icon as MusicIcon } from './icons/Music2Icon';
export { Pencil3Icon as PencilIcon } from './icons/Pencil3Icon';
export { Reading2Icon as ReadingIcon } from './icons/Reading2Icon';
export { Search2Icon as SearchIcon } from './icons/Search2Icon';
export { Upload2Icon as UploadIcon } from './icons/Upload2Icon';`
);

const tsxTemplate = ({ svg, icon }) => {
  const iconType = {
    ...fixKeys(svg['$']),
    title: svg.title,
    paths: svg.defs
      .reduce((acc, def) => [...acc, def.path && def.path[0]['$']], [])
      .filter(a => a)
      .flat()
      .map(fixKeys),
    polygons: svg.defs
      .reduce((acc, def) => [...acc, def.polygon && def.polygon[0]['$']], [])
      .filter(a => a)
      .flat()
      .map(fixKeys),
    groups: svg.g.reduce(
      (acc, { mask, use, ...props }) => [
        ...acc,
        {
          ...fixKeys(props['$']),
          masks: mask.reduce(
            (acc, mask) => [
              ...acc,
              {
                ...fixKeys(mask['$']),
                uses: mask.use.reduce(
                  (acc, use) => [
                    ...acc,
                    {
                      ...fixKeys(use['$']),
                    },
                  ],
                  []
                ),
              },
            ],
            []
          ),
          uses: use.reduce(
            (acc, use) => [
              ...acc,
              {
                ...fixKeys(use['$']),
              },
            ],
            []
          ),
        },
      ],
      []
    ),
  };

  return `import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = ${JSON.stringify(iconType, null, 2)};

export const ${icon.name}: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    `;
};

const camelize = str => {
  return str
    .replace(/(?:^\w|[A-Z]|[:\b_-]\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[:\s_-]+/g, '');
};

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const fixKeys = obj => {
  return Object.keys(obj).reduce((acc, prop) => {
    return { ...acc, [camelize(prop)]: obj[prop] };
  }, {});
};

const buildName = (category, icon) => {
  return `${capitalize(camelize(category))}${capitalize(camelize(icon))}Icon`;
};

const parseSvg = icon => {
  const xml = String(fs.readFileSync(icon.path))
    .replace(/#path/g, `#${icon.name}-path`)
    .replace(/="mask/g, `="${icon.name}-mask`)
    .replace(/="path/g, `="${icon.name}-path`);
  xml2js.parseString(xml, { mergeAttrs: false }, (err, props) => {
    writeTsx({ tsx: tsxTemplate({ ...props, icon }), icon });
  });
};

const writeTsx = ({ tsx, icon }) => {
  fs.writeFileSync(
    `./src/icons/${icon.category}/${path.basename(icon.path, '.svg')}.tsx`,
    tsx
  );
};

fs.readdir('./src/svgs', (err, categories) => {
  if (err) {
    console.error('Could not list the categories.', err);
    process.exit(1);
  }

  categories = categories.map(name => {
    return { name, path: `./src/svgs/${name}` };
  });
  categories.forEach(category => {
    mkdirp.sync(`./src/icons/${category.name}`);
    fs.readdir(category.path, (err, icons) => {
      if (err) {
        console.error(`Could not list the icons in ${category}.`, err);
        process.exit(1);
      }
      icons = icons.map(name => {
        return {
          path: `${category.path}/${name}`,
          category: category.name,
          name: `${buildName(category.name, path.basename(name, '.svg'))}`,
        };
      });
      icons.forEach(icon => {
        fs.appendFileSync(
          indexFile,
          `\nexport { ${icon.name} } from '${`./src/icons/${
            icon.category
          }/${path.basename(icon.path, '.svg')}`}';`
        );
        parseSvg(icon);
      });
    });
  });
});
