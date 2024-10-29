import dynamic from 'next/dynamic';

// Mengimpor GrapesJSEditor dengan dynamic
const GrapesJSEditor = dynamic(() => import('./components/GrapesJSEditor'));

export default function Home() {
  return (
    <div>
      <h1>GrapesJS Editor</h1>
      <GrapesJSEditor />
    </div>
  );
}
