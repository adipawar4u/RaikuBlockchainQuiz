import React, { useState } from "react";

const quizQuestions = [
  {
    question:
      "What is the primary goal of Raiku's blockchain infrastructure? 🏗️",
    options: [
      "Increase transaction fees 💸",
      "Deliver enterprise-level reliability and deterministic execution on Solana ✅",
      "Create new cryptocurrencies 🪙",
      "Decentralize mining operations ⛏️",
    ],
    answerIndex: 1,
    explanation:
      "Raiku focuses on enterprise reliability and deterministic execution to power Solana. 🚀",
  },
  {
    question:
      "Which of the following best describes Raiku's approach to blockspace? 📦",
    options: [
      "Unpredictable commodity ❓",
      "Fair and efficient marketplace for guaranteed blockspace 🛒",
      "Sole proprietary blockspace provider 🔒",
      "Blockspace unrelated to transaction processing 🚫",
    ],
    answerIndex: 1,
    explanation:
      "Raiku transforms blockspace into a fair, efficient, and guaranteed resource marketplace. ⚖️",
  },
  {
    question:
      "What problem does Raiku's deterministic execution aim to solve? 🧩",
    options: [
      "Random block rewards 🎲",
      "Transaction failure and unpredictability under load ❌",
      "Network decentralization 🌐",
      "Limited smart contract functionality 🤖",
    ],
    answerIndex: 1,
    explanation:
      "Deterministic execution ensures transactions don’t fail or become unpredictable even under network stress. 💡",
  },
  {
    question:
      "What is a key feature of Raiku's Ahead-Of-Time (AOT) block auctions? ⏰",
    options: [
      "Blocks are auctioned just at the time of transaction ⏳",
      "Slots are reserved in advance at the beginning of an epoch 📅",
      "Transactions are validated without auctions ✔️",
      "No signatures involved in block creation ✍️",
    ],
    answerIndex: 1,
    explanation:
      "AOT auctions reserve block slots in advance, improving scheduling and reducing latency sensitivity. ⏱️",
  },
  {
    question: "What is Raiku's Global Account Module designed to achieve? 🌍",
    options: [
      "Fragment account state across various apps 🔀",
      "Provide a unified, atomic, and verifiable account state across different execution environments 🔗",
      "Eliminate accounts from blockchain architecture 🚪",
      "Simplify accounts only for native Solana apps 🧩",
    ],
    answerIndex: 1,
    explanation:
      "It unifies account state management for consistent, atomic, and secure execution across environments. 🛡️",
  },
  {
    question:
      "Which of the following is NOT one of the technology highlights of Raiku? ⚙️",
    options: [
      "System reliability under extreme scale 📈",
      "Deterministic transaction outcomes 🎯",
      "Unlimited transaction fees 💰",
      "Low latency with control over compute ⚡",
    ],
    answerIndex: 2,
    explanation:
      "Raiku does not promote unlimited fees; it focuses on efficiency and reliability. 🏆",
  },
  {
    question:
      "How does Raiku address MEV (Maximal Extractable Value) related network spam on Solana? 🛡️",
    options: [
      "By filtering and pre-screening transactions before validators ✅",
      "By increasing network fee taxes 💸",
      "By ignoring spam transactions 🚫",
      "By outsourcing block validation to third parties 🔄",
    ],
    answerIndex: 0,
    explanation:
      "Raiku pre-screens transactions to mitigate spam and MEV sandwich attacks before they reach validators. 🛡️",
  },
  {
    question:
      "Which model allows Raiku users to participate in auctions for guaranteed top-of-block inclusion on demand? 🎟️",
    options: [
      "Ahead-of-Time (AOT) Transactions ⏰",
      "Just-in-Time (JIT) Transactions ⚡",
      "Simplified Block Confirmation ✔️",
      "Static Block Schedule 🗓️",
    ],
    answerIndex: 1,
    explanation:
      "JIT transactions enable dynamic, on-demand auction participation for top-of-block placement. 🚀",
  },
  {
    question:
      "Why does Raiku separate execution environments from consensus? 🧠",
    options: [
      "To increase network latency 🐢",
      "To enable optimized execution logic tailored to specific use cases while maintaining security guarantees 🛠️",
      "To reduce transaction throughput 📉",
      "To centralize control of block-building 🏛️",
    ],
    answerIndex: 1,
    explanation:
      "Separation allows custom execution optimizations while preserving overall network security. 🔐",
  },
  {
    question:
      "What is the streaming data unit called in Solana that Raiku mentions in the block building challenges? 📡",
    options: ["Shred ✂️", "Packet 📦", "Slice 🍰", "Chunk 🍖"],
    answerIndex: 0,
    explanation:
      "Solana transmits blocks in 'shreds', small streaming data units, for fast assembly. ⚡",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = quizQuestions[currentIndex];

  const selectOption = (index) => {
    if (selected === null) {
      setSelected(index);
      setShowExplanation(true);
      if (index === question.answerIndex) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "auto",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: 10,
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
        Raiku Blockchain Quiz 🎉
      </h1>
      {!completed ? (
        <>
          <div
            style={{
              marginBottom: 20,
              fontSize: "1rem",
              color: "#34495e",
              fontWeight: "bold",
            }}
          >
            Question {currentIndex + 1} of {quizQuestions.length} 🧩
          </div>
          <h2 style={{ color: "#2c3e50" }}>{question.question}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {question.options.map((opt, i) => {
              const isCorrect = i === question.answerIndex;
              const isSelected = i === selected;
              let bgColor = "#ecf0f1";

              if (showExplanation) {
                if (isCorrect) bgColor = "#27ae60"; // green
                else if (isSelected && !isCorrect) bgColor = "#e74c3c"; // red
              }

              return (
                <li
                  key={i}
                  onClick={() => selectOption(i)}
                  style={{
                    backgroundColor: bgColor,
                    color:
                      showExplanation && (isCorrect || isSelected)
                        ? "white"
                        : "#2c3e50",
                    padding: "14px 18px",
                    marginBottom: 12,
                    borderRadius: 8,
                    cursor: selected === null ? "pointer" : "default",
                    fontWeight: "600",
                    boxShadow:
                      showExplanation && isSelected
                        ? "0 0 12px rgba(0,0,0,0.2)"
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {opt}
                </li>
              );
            })}
          </ul>

          {showExplanation && (
            <div
              style={{
                marginTop: 15,
                padding: 16,
                backgroundColor: "#dfe6e9",
                borderRadius: 8,
                fontSize: "1rem",
                color: "#2d3436",
                fontStyle: "italic",
              }}
            >
              💡 <strong>Explanation: </strong>
              {question.explanation}
            </div>
          )}

          <div style={{ marginTop: 25, textAlign: "right" }}>
            <button
              onClick={nextQuestion}
              disabled={selected === null}
              style={{
                padding: "14px 26px",
                fontSize: "1.1rem",
                backgroundColor: selected === null ? "#95a5a6" : "#2980b9",
                color: "white",
                border: "none",
                borderRadius: 10,
                cursor: selected === null ? "not-allowed" : "pointer",
                boxShadow:
                  selected !== null
                    ? "0 4px 12px rgba(41, 128, 185, 0.6)"
                    : "none",
                transition: "background-color 0.3s ease",
              }}
            >
              {currentIndex + 1 === quizQuestions.length
                ? "🎉 Finish Quiz"
                : "➡️ Next Question"}
            </button>
          </div>
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: 50,
            color: "#2c3e50",
          }}
        >
          <h2>
            🎊 Your Score: {score} / {quizQuestions.length} 🎊
          </h2>
          <button
            onClick={restartQuiz}
            style={{
              padding: "14px 28px",
              fontSize: "1.3rem",
              backgroundColor: "#27ae60",
              color: "white",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              marginTop: 30,
              boxShadow: "0 5px 15px rgba(39, 174, 96, 0.8)",
            }}
          >
            🔄 Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
