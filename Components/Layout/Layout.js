import  { Fragment,useContext } from 'react'
import Notification from '../Notification/Notifications'
import MyAllContext from '../ContextStore/Context'


import Header from './Header'

export default function Layout(props) {
 
 const notificationCtx = useContext(MyAllContext)
const activeNotifiaction = notificationCtx.mainContext
  

  return (
    <Fragment>
    <Header />
        <main>{props.children}</main>  
        {activeNotifiaction && <Notification 
        title={activeNotifiaction.title}
        message={activeNotifiaction.message}
        status={activeNotifiaction.status}
        />}  
    </Fragment>
  )
}
