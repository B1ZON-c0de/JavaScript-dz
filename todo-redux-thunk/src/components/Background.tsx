import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Background = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full bg-[#fef9f7] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)`,
        }}
      />
      <div className="center ">{children}</div>
    </div>
  );
};

export default Background;
