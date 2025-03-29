import { MainLayout } from "@/layouts/MainLayout/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <section>
        <div className="text-center text-gray-700 dark:text-gray-300">
          <h3 className="text-xl font-semibold mb-2">Let’s Connect</h3>
          <p className="max-w-xl mx-auto">
            Whether you're looking for a reliable developer, a collaborative
            teammate, or just want to chat tech—feel free to reach out!
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
