export default function TechnologyImage({
  src,
  height = '',
  width = '',
  visibility = '',
  alt,
}) {
  return (
    <img className={`${height} ${width} ${visibility}`} src={src} alt={alt} />
  );
}
