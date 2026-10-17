import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';
import { CivicsScenario, GovernanceRole } from '../types/governance';

interface CivicsScenarioQuizProps {
  scenarios: CivicsScenario[];
  allRoles: GovernanceRole[];
  onSelectRole: (role: GovernanceRole) => void;
}

export const CivicsScenarioQuiz: React.FC<CivicsScenarioQuizProps> = ({
  scenarios,
  allRoles,
  onSelectRole
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answeredMap, setAnsweredMap] = useState<Record<number, string>>({});

  const roleMap = React.useMemo(() => {
    const map = new Map<string, GovernanceRole>();
    allRoles.forEach((r) => map.set(r.id, r));
    return map;
  }, [allRoles]);

  const currentScenario = scenarios[currentIndex];
  const isAnswered = answeredMap[currentIndex] !== undefined;
  const userChoice = answeredMap[currentIndex] || selectedAnswer;
  const isCorrect = userChoice === currentScenario?.correctRoleId;

  const handleSelectOption = (roleId: string) => {
    if (isAnswered) return;
    setSelectedAnswer(roleId);
    setAnsweredMap((prev) => ({ ...prev, [currentIndex]: roleId }));
    if (roleId === currentScenario.correctRoleId) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(null);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredMap({});
  };

  const correctRoleObj = roleMap.get(currentScenario.correctRoleId);

  return (
    <div className="flex-1 flex flex-col bg-slate-950 p-6 md:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        {/* Quiz Progress & Score Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Constitutional Power Simulator
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white font-display">
              Who Has The Constitutional Authority?
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono">
              <span className="text-slate-400">Score: </span>
              <span className="text-amber-400 font-bold">{score}</span>
              <span className="text-slate-500"> / {scenarios.length}</span>
            </div>

            <button
              onClick={handleReset}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Restart Quiz"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / scenarios.length) * 100}%`
            }}
          />
        </div>

        {/* Question Card */}
        <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Scenario {currentIndex + 1} of {scenarios.length}</span>
            <span>Article / Statute Challenge</span>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-white font-display leading-snug">
              {currentScenario.title}
            </h4>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {currentScenario.question}
            </p>
          </div>

          {/* Context box */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 italic">
            Context: {currentScenario.context}
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-2.5 pt-2">
            {currentScenario.optionsRoleIds.map((optId) => {
              const optRole = roleMap.get(optId);
              if (!optRole) return null;

              const isOptionSelected = userChoice === optId;
              const isOptionCorrect = optId === currentScenario.correctRoleId;

              let style = 'bg-slate-950/70 hover:bg-slate-800/70 border-slate-800 text-slate-200';
              if (isAnswered) {
                if (isOptionCorrect) {
                  style = 'bg-emerald-950/30 border-emerald-500/80 text-emerald-200 font-bold';
                } else if (isOptionSelected) {
                  style = 'bg-rose-950/30 border-rose-500/80 text-rose-200';
                } else {
                  style = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={optId}
                  onClick={() => handleSelectOption(optId)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${style}`}
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold block">{optRole.name}</span>
                    <span className="text-xs text-slate-400 block">{optRole.hindiName}</span>
                  </div>

                  {isAnswered && (
                    <div>
                      {isOptionCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isOptionSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation & Article Feedback */}
          {isAnswered && (
            <div className={`p-4 rounded-xl border space-y-2.5 mt-4 ${
              isCorrect ? 'bg-emerald-950/20 border-emerald-800/60' : 'bg-slate-950 border-slate-800'
            }`}>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-300">
                  Constitutional Basis: {currentScenario.constitutionalArticle}
                </span>
              </div>

              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                {currentScenario.explanation}
              </p>

              {correctRoleObj && (
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <span className="text-xs text-slate-400">Want to inspect full powers?</span>
                  <button
                    onClick={() => onSelectRole(correctRoleObj)}
                    className="cursor-pointer text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
                  >
                    Open {correctRoleObj.name} Dossier
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3.5 py-1.5 rounded-lg border border-slate-800 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Previous
            </button>

            {currentIndex < scenarios.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Next Scenario</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Restart Challenge</span>
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
