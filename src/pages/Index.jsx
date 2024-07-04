import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <Section title="Featured Playlists">
        <Card>
          <CardHeader>
            <CardTitle>Playlist 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some description about Playlist 1.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Playlist 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some description about Playlist 2.</p>
          </CardContent>
        </Card>
      </Section>
      <Section title="Recently Played">
        <Card>
          <CardHeader>
            <CardTitle>Track 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some description about Track 1.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Track 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some description about Track 2.</p>
          </CardContent>
        </Card>
      </Section>
      <Section title="Recommended for You">
        <Card>
          <CardHeader>
            <CardTitle>Recommendation 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some description about Recommendation 1.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recommendation 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some description about Recommendation 2.</p>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  </section>
);

export default Index;