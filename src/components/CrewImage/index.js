export default function CrewImage({ height = '', alt, src }) {
  return <img className={`${height}`} src={src} alt={alt} />;
}
