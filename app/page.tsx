"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1000);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [savedPrompts, setSavedPrompts] = useState<any>([]);

  const testPrompt = async () => {
    if (!prompt.trim()) {
      alert("Prompt eingeben!");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          temperature: parseFloat(temperature.toString()),
          maxTokens: parseInt(maxTokens.toString()),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.content);
      } else {
        setResult("Fehler: " + data.error);
      }
    } catch (error) {
      setResult("Fehler beim API Call: " + error);
    }

    setLoading(false);
  };

  const savePrompt = () => {
    if (!result) return;

    const newPrompt = {
      id: Date.now().toString(),
      prompt,
      result,
      date: new Date().toLocaleDateString("de-DE"),
    };

    setSavedPrompts([...savedPrompts, newPrompt]);
    alert("Prompt gespeichert! ✅");
  };

  const loadPrompt = (saved: (typeof savedPrompts)[0]) => {
    setPrompt(saved.prompt);
    setResult(saved.result);
  };

  const deletePrompt = (id: string) => {
  setSavedPrompts(savedPrompts.filter((p: any) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🚀 Prompt Engineering Playground
          </h1>
          <p className="text-gray-400">
            Teste deine Prompts in Echtzeit mit Claude
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prompt Input */}
            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
              <label className="block text-sm font-semibold text-gray-200 mb-3">
                Dein Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Schreib hier deinen Prompt ein..."
                className="w-full h-40 p-4 bg-slate-800 text-white border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            {/* Parameters */}
            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                Parameter
              </h3>

              <div className="space-y-4">
                {/* Temperatur */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">
                      Temperatur (Kreativität)
                    </label>
                    <span className="text-blue-400 font-semibold">
                      {temperature.toFixed(1)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    0 = Konsistent, 2 = Sehr kreativ
                  </p>
                </div>

                {/* Max Tokens */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">
                      Max Tokens (Länge)
                    </label>
                    <span className="text-blue-400 font-semibold">
                      {maxTokens}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="4000"
                    step="100"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Wie lange die Antwort sein soll
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={testPrompt}
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
              >
                {loading ? "⏳ Lädt..." : "🚀 Claude testen"}
              </button>
              <button
                onClick={savePrompt}
                disabled={!result}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
              >
                💾 Speichern
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">
                  📝 Antwort von Claude
                </h3>
                <div className="bg-slate-800 p-4 rounded text-gray-100 whitespace-pre-wrap max-h-96 overflow-y-auto">
                  {result}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Library */}
          <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 h-fit">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              📚 Meine Prompts ({savedPrompts.length})
            </h3>

            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {savedPrompts.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  Noch keine Prompts gespeichert. Teste einen und speichern!
                </p>
              ) : (
                savedPrompts.map((saved: any) => (
                  <div
                    key={saved.id}
                    className="bg-slate-800 p-3 rounded border border-slate-600 hover:border-blue-500 transition"
                  >
                    <p className="text-sm text-gray-300 mb-2 truncate font-medium">
                      {saved.prompt.substring(0, 50)}...
                    </p>
                    <p className="text-xs text-gray-500 mb-2">{saved.date}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => loadPrompt(saved)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 rounded transition"
                      >
                        Laden
                      </button>
                      <button
                        onClick={() => deletePrompt(saved.id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-xs py-1 px-3 rounded transition"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}