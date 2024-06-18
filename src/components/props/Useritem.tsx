interface IUser {
  name: string;
  email: string;
  age?: number;
}

const Useritem = (props: IUser) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.email}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default Useritem;
