import { createRoot } from 'react-dom/client';
import { useState } from 'react';

export default function Script() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      onMouseEnter = {() => setIsHovered(true)}
      onMouseLeave = {() => setIsHovered(false)}
      style={{ 
      backgroundColor: "#3178C6",
      color: "#ffff", 
      borderRadius: "10px",
      display: "flex", 
      gap: "10px", 
      position: "fixed", 
      bottom: "10px", 
      right: "10px",  
      zIndex: "10000000",
      padding: "10px",
      fontWeight: "600", 
      opacity: isHovered ? 0.2 : 1,
      transition: "opacity 0.3s ease",
    }}>
      <div>レベル：500</div>
      <div>コイン枚数：200</div>
    </div>
  );
}

// ページ上に新しい要素を作成
const app = document.createElement('div');
app.id = "my-extension-root";

// 新しい要素をbodyの最初の子として挿入
document.body.insertBefore(app, document.body.firstChild);

// 新しいAPIを使用してReactコンポーネントをレンダリング
const root = createRoot(app);
root.render(<Script />);
