"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  tech_stack?: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]); // start with empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/projects") // make sure your backend is running
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // support both { projects: [...] } and [...] formats
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border border-gray-700 p-6 rounded-md hover:border-white transition"
        >
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="text-gray-400 mt-2">{project.description}</p>
          {project.tech_stack && project.tech_stack.length > 0 && (
            <p className="mt-2 text-sm text-gray-500">
              Tech Stack: {project.tech_stack.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
