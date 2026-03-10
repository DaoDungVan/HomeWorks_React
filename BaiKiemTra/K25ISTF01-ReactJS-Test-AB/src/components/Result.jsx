export default function Result({ score, total, onRestart }) {
  return (
    <div className="result">
      <h2>Kết quả</h2>
      <p>
        Bạn đạt <strong>{score}</strong>/<strong>{total}</strong> điểm
      </p>
      <button className="btn restart" onClick={onRestart}>
        Làm lại
      </button>
    </div>
  );
}
