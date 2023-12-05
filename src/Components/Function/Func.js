function text()
{
  return <Student name="Siva"/>
}
function Student(props){
  return (
    <h3>
    Hello,{props.name}! Nice to meet you!
    </h3>
  )
}

export default text