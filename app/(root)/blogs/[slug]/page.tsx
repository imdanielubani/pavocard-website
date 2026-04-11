type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="bg-white min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gray-400 text-sm">Blog: {slug}</p>
      </div>
    </main>
  );
}
