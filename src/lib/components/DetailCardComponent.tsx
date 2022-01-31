interface Props {
  label: string;
  value: string;
}

export const DetailCardComponent = (props: Props) => {
  return (
    <div className="card text-end">
      <div className="card-body">
        <h4 className="mb-0 h5 h4-md">{props.value}</h4>
      </div>
      <div className="card-footer">
        <h5 className="text-muted mb-0 h6 h5-md">{props.label}</h5>
      </div>
    </div>
  );
};
