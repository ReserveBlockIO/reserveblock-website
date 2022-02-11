import { ThemeColors } from "../theme";

interface Props {
  label: string;
  value: string;
}

export const DetailCardComponent = (props: Props) => {
  return (
    <div className="card text-end" style={{ minWidth: 150 }}>
      <div
        className="card-body"
        style={{ backgroundColor: ThemeColors.darker }}
      >
        <h4 className="mb-0 h5 h4-md" style={{ fontWeight: "bold" }}>
          {props.value}
        </h4>
      </div>
      <div
        className="card-footer"
        style={{ backgroundColor: ThemeColors.mutedBright }}
      >
        <h5 className="text-light mb-0 h6 h5-md" style={{ fontWeight: "bold" }}>
          {props.label}
        </h5>
      </div>
    </div>
  );
};
