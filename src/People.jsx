export default function People(props) {
  console.log(props.props[0]);

  return (
    <>
      {props.props.map((data) => (
        <div>{data.name}</div>
      ))}
    </>
  );
}
