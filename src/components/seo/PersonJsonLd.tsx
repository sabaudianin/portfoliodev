type Props = {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  sameAs?: string[];
};

export default function PersonJsonLd({
  name,
  url,
  image = "/avatar.png",
  jobTitle = "Frontend Developer",
  sameAs = [],
}: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    image,
    jobTitle,
    sameAs,
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
