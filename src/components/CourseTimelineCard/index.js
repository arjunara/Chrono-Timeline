// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CardContainer,
  TitleContainer,
  ItemTitle,
  DurationContainer,
  Duration,
  Description,
  UnorderedListContainer,
  TagListItem,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseListDetails} = props
  const {courseTitle, description, duration, tagsList} = courseListDetails
  return (
    <CardContainer>
      <TitleContainer>
        <ItemTitle>{courseTitle}</ItemTitle>
        <DurationContainer>
          <AiFillClockCircle size={20} />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <UnorderedListContainer>
        {tagsList.map(eachTag => (
          <TagListItem key={eachTag.id}>{eachTag.name}</TagListItem>
        ))}
      </UnorderedListContainer>
    </CardContainer>
  )
}

export default CourseTimelineCard
