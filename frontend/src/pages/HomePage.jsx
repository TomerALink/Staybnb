import { AppHeader } from "../cmps/AppHeader";
import { StayList } from "../cmps/StayList";

export function HomePage() {
  return (
    <section className="home-page">

{/* //      <h1>Staybnb</h1>
//      <StayPreview/> */}
<AppHeader/>
<StayList/>
    </section>
  )
}
