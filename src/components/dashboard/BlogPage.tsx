import { BlogSection } from "../BlogSection";

interface BlogPageProps {
  user: any;
}

export function BlogPage({ user }: BlogPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Read the latest articles and tutorials</p>
      </div>
      <BlogSection />
    </div>
  );
}
