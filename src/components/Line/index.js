export default function Line({
  width = '',
  height = '',
  maxWidth = '',
  left = '',
  top = '',
}) {
  return (
    <div
      className={`absolute bg-white/25 z-40 ${width} ${height} 
    ${maxWidth} ${left} ${top}`}
    />
  );
}
