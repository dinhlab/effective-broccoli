export default function Header (props) {
  const { title, subTitle } = props
  return (
    <h1 className='title'>
      {title}
      <span>{subTitle}</span>
    </h1>
  )
}
