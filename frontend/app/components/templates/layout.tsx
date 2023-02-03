export const siteTitle = "HN feed";
export const subtitleSite_part1 = "We";
export const subtitleSite_part2 = "hacker news!";
export const heart = "❤️";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
