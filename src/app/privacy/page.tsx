import React from "react";
import { PRIVACY_SECTIONS } from "@/utils/constans/privacyPolitics";

export default function Privacy() {
  return (
    <section id="privacy">
      <div className="space-y-4">
        <h2 className="text-center text-xl font-semibold">
          Polityka Prywatności
        </h2>

        {PRIVACY_SECTIONS.map((section) => (
          <div
            key={section.id}
            className="card p-1 text-center"
          >
            {section.title && (
              <p className="font-semibold mb-1">{section.title}</p>
            )}
            <div className="text-sm leading-relaxed">{section.content}</div>
          </div>
        ))}
      </div>
      <p className="py-2 text-center text-xs">
        Ostatnia aktualizacja: listopad 2025
      </p>
    </section>
  );
}
