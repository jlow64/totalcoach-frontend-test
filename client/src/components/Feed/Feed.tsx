import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import type {
  FeedApiSource,
  LayoutVariant,
  FeedCardInfo,
} from 'types/components.type';
import { getFeeds } from 'src/api';
import { FeedContainer } from './style';
import Card from 'components/Card';
import { Skeleton } from '@mui/material';

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

const Feed = ({
  apiSource = 'invitation',
  variant = 'horizontal',
  background = 'background',
}: FeedProps) => {
  const { isLoading, data } = useQuery({
    queryKey: ['Feeds', apiSource],
    queryFn: () => getFeeds(apiSource),
  });

  // Memoise cards produced for performance. Need to adjust this once we integrate the APIs
  const cards = useMemo(
    () =>
      data &&
      data.map((feed: FeedCardInfo, index: string) => (
        <Card
          key={`${feed.title}-${index}`}
          width={variant === 'horizontal' ? '350px' : '100%'}
          height={variant === 'horizontal' ? '100%' : '160px'}
          variant={variant}
          {...feed}
        />
      )),
    [data],
  );

  return (
    <FeedContainer
      variant={variant}
      background={background}
      padding={variant === 'horizontal' ? 0 : '0.8rem'}
    >
      {!data || isLoading ? (
        <Skeleton
          variant="rounded"
          animation="wave"
          width="100%"
          height="100%"
        />
      ) : (
        cards
      )}
    </FeedContainer>
  );
};

export default Feed;
