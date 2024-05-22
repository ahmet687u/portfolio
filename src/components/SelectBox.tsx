interface ISelectBoxProps<T, P> extends React.ComponentProps<"select"> {
  data: Array<T>;
  prop: P;
}


const SelectBox = <T, P extends keyof T>({ data, prop }: ISelectBoxProps<T, P>): React.ReactNode => {
  return (
    <select>
      {data.map((item, index) => <option key={index}>{item[prop] as string}</option>)}
    </select>
  )
}

export default SelectBox
