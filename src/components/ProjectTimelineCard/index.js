// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import {
  CardContainer,
  ProjectImage,
  TitleContainer,
  ItemTitle,
  DurationContainer,
  Duration,
  Description,
  VisitButton,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectListDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectListDetails
  return (
    <CardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <TitleContainer>
        <ItemTitle>{projectTitle}</ItemTitle>
        <DurationContainer>
          <AiFillCalendar size={20} />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <VisitButton as="a" href={projectUrl}>
        Visit
      </VisitButton>
    </CardContainer>
  )
}

export default ProjectTimelineCard
