import { createRoot } from 'react-dom/client';

export default function Script() {
  return (
    <div style={{ 
      backgroundColor: "lightGreen", 
      display: "flex", 
      gap: "10px", 
      position: "fixed", 
      bottom: "10px", 
      right: "10px",  
      zIndex: "10000000",
      padding: "10px"
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
