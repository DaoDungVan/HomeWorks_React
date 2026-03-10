import { useState } from "react";

export default function FindLongestUniqueSubstring() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({ substring: "", length: 0 });

  function findLongestUniqueSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let maxSubstring = "";
    const seen = new Map(); // để lưu vị trí các ký tự đã gặp

    for (let end = 0; end < str.length; end++) {
      const char = str[end]; // lấy ký tự hiện tại trong chuỗi
      // TODO: 1
      // Nếu ký tự hiện tại đã xuất hiện và vị trí cũ vẫn nằm trong window hiện tại
      // thì cập nhật lại biến start
      if (seen.has(char) && seen.get(char) >= start) { //has với get là thuộc tính của Map để kiểm tra tồn tại là lấy giá trị 
      // .has để kiểm tra ký có xuất hiện trc đó chưa
      // .get để lấy vị trị của ký tự đó
        start = seen.get(char) + 1; 
      }
      // TODO: 2
      // Lưu vị trí mới nhất của ký tự hiện tại vào Map
      seen.set(char, end);
      // TODO: 3
      // Nếu độ dài window hiện tại lớn hơn maxLength
      // thì cập nhật maxLength và maxSubstring
      const length = end - start + 1;

      if (length > maxLength) {
        maxLength = length;
        maxSubstring = str.slice(start, end + 1);
      }
    }

    return {
      substring: maxSubstring,
      length: maxLength,
    };
  }

  function handleAnalyze() {
    // TODO: 4
    // Gọi hàm findLongestUniqueSubstring với input
    // rồi cập nhật state result
    const analysis = findLongestUniqueSubstring(input);
    setResult(analysis);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Analyze Text String</h1>

      <input
        type="text"
        value={input}
        // onChange={
        // TODO: 5
        // Cập nhật state input khi người dùng nhập dữ liệu
        // }
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input..."
      />

      <button onClick={handleAnalyze}>Analyze</button>

      {result.length > 0 && (
        <div>
          <p>The longest sub-string: {result.substring}</p>
          <p>Length: {result.length}</p>
        </div>
      )}
    </div>
  );
}
