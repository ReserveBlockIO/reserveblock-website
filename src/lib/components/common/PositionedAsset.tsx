interface Props {
  url: string;
  alt: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
  cover?: boolean;
  opacity?: number;
}

export const PositionedAsset = (props: Props) => {
  let containerStyle: any = { position: "absolute" };
  let imgStyle: any = { objectFit: "contain" };

  if (props.top !== null) {
    containerStyle = { ...containerStyle, top: props.top };
  }
  if (props.left !== null) {
    containerStyle = { ...containerStyle, left: props.left };
  }
  if (props.right !== null) {
    containerStyle = { ...containerStyle, right: props.right };
  }
  if (props.bottom !== null) {
    containerStyle = { ...containerStyle, bottom: props.bottom };
  }

  if (props.opacity) {
    containerStyle = { ...containerStyle, opacity: props.opacity };
  }

  if (props.cover) {
    imgStyle = {
      ...imgStyle,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };
  } else {
    if (props.width !== null) {
      imgStyle = { ...imgStyle, width: props.width };
    }

    if (props.height !== null) {
      imgStyle = { ...imgStyle, height: props.height };
    }
  }

  return (
    <div style={containerStyle}>
      <img src={props.url} style={imgStyle} alt={props.alt} />
    </div>
  );
};
