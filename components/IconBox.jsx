import Icon from "./Icon";

export default function IconBox({
  name,
  className = "w-5 h-5 text-blue",
  boxClassName = "w-11 h-11 rounded-[11px] bg-bg2 flex items-center justify-center mx-auto",
  style,
}) {
  return (
    <div className={boxClassName} style={style}>
      <Icon name={name} className={className} />
    </div>
  );
}
