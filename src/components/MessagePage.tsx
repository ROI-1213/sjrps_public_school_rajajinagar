import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ReactNode } from "react";

interface MessagePageProps {
  title: string;
  breadcrumbLabel: string;
  breadcrumbPath: string;
  name: string;
  designation: string;
  imageUrl: string;
  qualifications?: string;
  paragraphs: ReactNode[];
  hideProfileCard?: boolean;
  compactImage?: boolean;
  imageAspectRatio?: string;
  imageClassName?: string;
  signature?: ReactNode;
}

const MessagePage = ({
  title,
  breadcrumbLabel,
  breadcrumbPath,
  name,
  designation,
  imageUrl,
  qualifications,
  paragraphs,
  hideProfileCard = false,
  compactImage = false,
  imageAspectRatio,
  imageClassName,
  signature,
}: MessagePageProps) => {
  return (
    <Layout>
      <PageHero
        title={title}
        breadcrumbs={[
          { label: "About", path: "/about/overview" },
          { label: breadcrumbLabel, path: breadcrumbPath },
        ]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto items-stretch">
            {/* Portrait */}
            <div className={`lg:col-span-2 flex ${compactImage ? "lg:self-start" : ""}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl border bg-white flex flex-col w-full">
                <div className={compactImage ? (imageAspectRatio || "bg-muted aspect-[4/3]") : "flex-1 bg-muted"}>
                  <img
                    src={imageUrl}
                    alt={name}
                    className={imageClassName || `w-full h-full object-cover ${compactImage ? "object-top" : "object-center"}`}
                  />
                </div>

                {!hideProfileCard && (
                  <div className="p-6 text-center bg-gradient-to-b from-white to-muted/40">
                    <h3 className="text-xl font-bold text-logo-navy">{name}</h3>
                    <p className="text-saffron-orange font-semibold text-sm mt-1">
                      {designation}
                    </p>
                    {qualifications && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {qualifications}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 flex">
              <div className="bg-white rounded-2xl border shadow-sm p-8 w-full flex flex-col">
                <div className="space-y-5 text-foreground/90 leading-relaxed text-[15px]">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {signature && (
                  <div className="mt-8 pt-6 border-t border-muted">
                    {signature}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MessagePage;
