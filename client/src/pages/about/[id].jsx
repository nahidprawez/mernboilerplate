import { useParams } from 'react-router-dom'

const About = () => {
  const {id} = useParams();
  console.log(id, "params");
  
  return (
    <div>About {id}</div>
  )
}

export default About
