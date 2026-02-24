"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  tech_stack?: string[];
  github_url?: string;
  live_url?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://portfolio-service-xyh2.onrender.com/projects")
    fetch("https://portfolio-service-xyh2.onrender.com")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProjects(data.projects || data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-gray-400 mt-4">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-red-500 mt-4">{error}</p>;
  }

  if (projects.length === 0) {
    return <p className="text-gray-400 mt-4">No projects found.</p>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white border border-gray-200 p-6 rounded-xl
                    hover:border-indigo-300 hover:shadow-lg
                    hover:shadow-indigo-100 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            {project.name}
          </h3>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {project.description}
          </p>

          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech_stack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex gap-6">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition"
              >
                GitHub →
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
