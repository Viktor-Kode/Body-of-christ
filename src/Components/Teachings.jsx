import React, { useState } from "react";

const teachingsData = [
  {
    id: 1,
    type: "video",
    category: "Bible Reliability",
    title: "The Reliability of the Bible",
    description:
      "Learn how the Bible has been preserved through history and why it remains trustworthy today.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    type: "article",
    category: "Atheism",
    title: "Answering Atheism",
    description:
      "A clear response to common objections raised by atheists about the existence of God.",
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=800",
    link: "#",
  },
  {
    id: 3,
    type: "video",
    category: "Islam",
    title: "Understanding Islam",
    description:
      "Discover biblical answers to the claims of Islam and learn how to engage in respectful dialogue.",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 4,
    type: "article",
    category: "Bible Reliability",
    title: "Manuscript Evidence for the New Testament",
    description:
      "A deep dive into manuscript discoveries and why they prove the authenticity of the New Testament.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=800",
    link: "#",
  },
  {
    id: 4,
    type: "article",
    category: "Bible Reliability",
    title: "Manuscript Evidence for the New Testament",
    description:
      "A deep dive into manuscript discoveries and why they prove the authenticity of the New Testament.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=800",
    link: "#",
  },
  
];

const Teachings = () => {
  const [category, setCategory] = useState("All");

  // Filtered teachings based on category
  const filteredTeachings =
    category === "All"
      ? teachingsData
      : teachingsData.filter((t) => t.category === category);

  const categories = ["All", "Atheism", "Islam", "Bible Reliability"];

  return (
    <section id="teachings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Teachings & <span className="text-blue-600">Apologetics</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our collection of videos and articles designed to equip
            believers with biblical truth and answers to life’s toughest
            questions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Teachings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachings.map((teaching) => (
            <div
              key={teaching.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {teaching.type === "video" ? (
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={teaching.embedUrl}
                    title={teaching.title}
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={teaching.image}
                  alt={teaching.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {teaching.title}
                </h3>
                <p className="text-gray-600 mb-4">{teaching.description}</p>
                {teaching.type === "article" ? (
                  <a
                    href={teaching.link}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read Article →
                  </a>
                ) : (
                  <a
                    href={teaching.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Watch on YouTube →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachings;
