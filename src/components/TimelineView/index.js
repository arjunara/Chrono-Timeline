// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import {
  AppContainer,
  Heading,
  ChronoContainer,
  CCBPHeading,
} from './styledComponents'

const TimeLineView = props => {
  const {timelineItemsList} = props
  return (
    <AppContainer>
      <Heading>
        MY JOURNEY OF <br />
        <CCBPHeading>CCBP 4.0</CCBPHeading>
      </Heading>
      <ChronoContainer>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(eachTimeLine => {
            if (eachTimeLine.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachTimeLine.id}
                  courseListDetails={eachTimeLine}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachTimeLine.id}
                projectListDetails={eachTimeLine}
              />
            )
          })}
        </Chrono>
      </ChronoContainer>
    </AppContainer>
  )
}

export default TimeLineView
