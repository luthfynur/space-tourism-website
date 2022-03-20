export default function PlanetImage({ height, width, src, alt }) {
  return <img alt={alt} src={src} className={`${height} ${width}`} />;
}
