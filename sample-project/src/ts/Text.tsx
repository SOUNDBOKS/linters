type TextProps = {
  value: string;
};

function Text({ value }: TextProps): JSX.Element {
  return <p>{value}</p>;
}

export { Text };
