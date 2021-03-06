import {StackNavigator, TabNavigator} from 'react-navigation'
import Auth from './screens/Auth'
import Event from './screens/events/Event'
import EventMap from './screens/events/EventMap'
import EventList from './screens/events/EventList'
import PeopleList from './screens/people/PeopleList'

const ListsNavigator = TabNavigator({
    events: {
        screen: EventList
    },
    people: {
        screen: PeopleList
    }
})

const AppNavigator = StackNavigator({
    lists: {
        screen: ListsNavigator
    },
    auth: {
        screen: Auth
    },
    event: {
        screen: Event
    },
    eventMap: {
        screen: EventMap
    }
})

export default AppNavigator