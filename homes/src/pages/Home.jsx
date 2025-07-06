import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.error(error);
    } else {
      setProjects(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

    return (
      <div className="flex flex-col justify-center items-center w-full">
        <h1>Hjem</h1>
        <h2>Velkommen hjem,</h2>
        <p>til en oversikt over dine renoveringsprosjekter.</p>
        {loading && <p>Loading projects…</p>}

        <div>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="mb-2">
                {project.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button>Nytt prosjekt</button>
        </div>
      </div>
    );
  }