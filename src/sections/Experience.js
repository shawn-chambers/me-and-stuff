import RotatingCard from "../components/RotatingCard"

const Experience = () => {
  return (
    <section className="experience">
      <div className="glitch" data-text="Experience">Experience</div>
      <RotatingCard img={"https://shawnipedia-pictures.s3-us-west-1.amazonaws.com/saywhat/chart.png"}/>
      <RotatingCard img={"https://shawnipedia-pictures.s3-us-west-1.amazonaws.com/saywhat/chart.png"}/>
      <RotatingCard img={"https://shawnipedia-pictures.s3-us-west-1.amazonaws.com/saywhat/chart.png"}/>
    </section>
  )
}

export default Experience;