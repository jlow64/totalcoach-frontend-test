interface FeedProps {
  /* 
  The variant property is property used locally within the Feed component to distinguish
  between the layouts that the Feed component can display. It doesn't make sense to use
  this typing globally as the json the feed object will consume will be the same
  */
  variant: 'invitation' | 'activity';
}

const Feed = ({ variant = 'invitation' }: FeedProps) => {
  return <div>{variant}</div>;
};

export default Feed;
