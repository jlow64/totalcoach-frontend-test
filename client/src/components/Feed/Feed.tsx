import { useEffect, useMemo } from 'react';
import type {
  FeedApiSource,
  LayoutVariant,
  FeedCardInfo,
} from 'types/components.type';
import { FeedContainer } from './style';
import Card from 'components/Card';

interface FeedProps {
  /* 
  The variant property is property used locally within the Feed component to distinguish
  between the layouts that the Feed component can display. 
  The source option is used incase there might be different sources of information that
  the activity component may need for the API.
  The background option is simply for the colors. Can be extended with a option to color object later
  */
  apiSource: FeedApiSource;
  variant?: LayoutVariant;
  background?: 'background' | 'easyWhite';
}
// Temporary mockdata
const mockInvitationFeeds: Array<FeedCardInfo> = [
  {
    title: 'Lesson Pack invite',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'lesson',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
  {
    title: 'Program invite',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'program',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
  {
    title: 'Summer event',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'misc',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
  {
    title: 'After hours practice',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'misc',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
];
const mockActivityFeeds: Array<FeedCardInfo> = [
  {
    title: 'Club Swing',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'activity',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
  {
    title: 'Summer event',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'activity',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
  {
    title: 'Club swing',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'activity',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
  {
    title: 'Club swing',
    coaches: ['Coach 1', 'Coach 2'],
    status: 'activity',
    timeStart: '10 Apr 2024 02:00 PM',
    timeEnd: '10 Apr 2024 05:00 PM',
    location: '2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND',
  },
];

const Feed = ({
  apiSource = 'invitation',
  variant = 'horizontal',
  background = 'background',
}: FeedProps) => {
  useEffect(() => {
    // For now we will mock the API call for the Cards depending on what source.
    // We will also utilise useMemo to prevent unnecessary rerenders for the cards.
    console.log(apiSource);
  });

  // Memoise cards produced for performance. Need to adjust this once we integrate the APIs
  const cards = useMemo(
    () =>
      variant === 'horizontal'
        ? mockInvitationFeeds.map((feed) => (
            <Card width="350px" height="100%" variant={variant} {...feed} />
          ))
        : mockActivityFeeds.map((feed) => (
            <Card width="100%" height="160px" variant={variant} {...feed} />
          )),
    [mockInvitationFeeds, mockActivityFeeds],
  );

  return (
    <FeedContainer
      variant={variant}
      background={background}
      padding={variant === 'horizontal' ? 0 : '0.8rem'}
    >
      {cards}
    </FeedContainer>
  );
};

export default Feed;
