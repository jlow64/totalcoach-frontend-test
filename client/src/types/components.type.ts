// This shared type shows current available layouts
export type LayoutVariant = 'horizontal' | 'vertical';
// This type points to the API source/urls
export type FeedApiSource = 'invitation' | 'activity';
// This api specifies the feed card type to color code in the card styling
export type FeedCardStatus = 'lesson' | 'program' | 'misc' | 'activity';
// This type represents the essential info needed for each card
export interface FeedCardInfo {
  title: string;
  coaches: Array<string>;
  status: FeedCardStatus;
  timeStart: Date | string;
  timeEnd: Date | string;
  location: string;
}
