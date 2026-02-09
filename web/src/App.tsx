import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({ ok: false }));
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold">CRM Web</h1>
      <p className="mt-2 text-sm opacity-70">
        Se você está vendo isso, o React está rodando.
      </p>

      <div className="mt-6 rounded-xl border p-4">
        <div className="text-sm font-medium">API /health</div>
        <pre className="mt-2 text-xs">{JSON.stringify(health, null, 2)}</pre>
      </div>
    </div>
  );
}
