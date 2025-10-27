import { Download } from "lucide-react";
import { Button } from "../components/ui/button";
import html2canvas from "html2canvas";

export function LogoPage() {
  const handleDownloadLogo1 = async () => {
    const element = document.getElementById('logo-card-1');
    if (!element) return;
    
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 3,
    });
    
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jobautometa-logo-white.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleDownloadLogo2 = async () => {
    const element = document.getElementById('logo-card-2');
    if (!element) return;
    
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 3,
    });
    
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jobautometa-logo-dark.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleDownloadLogo3 = async () => {
    const element = document.getElementById('logo-card-3');
    if (!element) return;
    
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 3,
    });
    
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jobautometa-logo-geometric.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleDownloadLogo4 = async () => {
    const element = document.getElementById('logo-card-4');
    if (!element) return;
    
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 3,
    });
    
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jobautometa-logo-geometric-bold.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleDownloadBackground = () => {
    // Create a canvas element for 1920x1080 virtual background
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Create diagonal split - blue gradient on left, white on right
    // First fill the entire canvas with white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add geometric shapes on white side BEFORE clipping for blue side
    // Circles
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.arc(1500, 300, 120, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(1700, 700, 80, 0, Math.PI * 2);
    ctx.fill();
    
    // Squares
    ctx.fillStyle = '#3b82f6';
    ctx.save();
    ctx.translate(1400, 850);
    ctx.rotate(15 * Math.PI / 180);
    ctx.fillRect(-60, -60, 120, 120);
    ctx.restore();
    
    // Outlined shapes
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = '#0ea5e9';
    ctx.lineWidth = 4;
    
    ctx.save();
    ctx.translate(1600, 550);
    ctx.rotate(-20 * Math.PI / 180);
    ctx.strokeRect(-50, -50, 100, 100);
    ctx.restore();
    
    ctx.beginPath();
    ctx.arc(1800, 450, 50, 0, Math.PI * 2);
    ctx.stroke();
    
    // Small accent dots
    ctx.fillStyle = '#38bdf8';
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(1450, 650, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(1750, 200, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(1550, 950, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
    
    // Create a diagonal path for blue gradient side
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width * 0.7, 0);
    ctx.lineTo(canvas.width * 0.3, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.clip();
    
    // Create multi-shade blue gradient
    const blueGradient = ctx.createLinearGradient(0, 0, canvas.width * 0.7, canvas.height);
    blueGradient.addColorStop(0, '#0ea5e9'); // sky-500
    blueGradient.addColorStop(0.2, '#0284c7'); // sky-600
    blueGradient.addColorStop(0.4, '#0369a1'); // sky-700
    blueGradient.addColorStop(0.5, '#1e40af'); // blue-800
    blueGradient.addColorStop(0.65, '#1e3a8a'); // blue-900
    blueGradient.addColorStop(0.8, '#1e293b'); // slate-800
    blueGradient.addColorStop(1, '#0f172a'); // slate-900
    ctx.fillStyle = blueGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle pattern on blue side
    ctx.globalAlpha = 0.05;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * 50);
      ctx.lineTo(canvas.width, i * 50);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    
    ctx.restore();
    
    // Add logo in top right corner (white side)
    const logoX = canvas.width - 550;
    const logoY = 180;
    
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    
    // JobAutometa text
    ctx.font = 'bold 96px Inter, sans-serif';
    const logoGradient = ctx.createLinearGradient(logoX, logoY, logoX + 650, logoY);
    logoGradient.addColorStop(0, '#0ea5e9'); // sky-500
    logoGradient.addColorStop(0.4, '#3b82f6'); // blue-500
    logoGradient.addColorStop(0.7, '#2563eb'); // blue-600
    logoGradient.addColorStop(1, '#1d4ed8'); // blue-700
    ctx.fillStyle = logoGradient;
    ctx.fillText('JobAutometa', logoX, logoY);
    
    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jobautometa-virtual-background.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleDownloadBackground2 = () => {
    // Create a canvas element for 1920x1080 virtual background
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Create dark gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0f172a'); // slate-900
    gradient.addColorStop(0.5, '#1e3a8a'); // blue-900
    gradient.addColorStop(1, '#0f172a'); // slate-900
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add geometric circles pattern
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.arc(200 + i * 220, 200 + j * 200, 80, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    
    // Add decorative glow circles
    const glow1 = ctx.createRadialGradient(300, 300, 0, 300, 300, 500);
    glow1.addColorStop(0, 'rgba(14, 165, 233, 0.15)');
    glow1.addColorStop(1, 'rgba(14, 165, 233, 0)');
    ctx.fillStyle = glow1;
    ctx.fillRect(0, 0, 800, 800);
    
    const glow2 = ctx.createRadialGradient(canvas.width - 300, canvas.height - 300, 0, canvas.width - 300, canvas.height - 300, 500);
    glow2.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
    glow2.addColorStop(1, 'rgba(59, 130, 246, 0)');
    ctx.fillStyle = glow2;
    ctx.fillRect(canvas.width - 800, canvas.height - 800, 800, 800);
    
    // Add circle around logo in top left corner
    const circleX = 320;
    const circleY = 240;
    const circleRadius = 200;
    
    // Draw outer circle in white
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'; // white
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add logo in top left corner (centered in circle)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // JobAutometa text - white color
    ctx.font = 'bold 72px Inter, sans-serif';
    ctx.fillStyle = '#ffffff'; // white
    ctx.fillText('JobAutometa', circleX, circleY);
    
    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jobautometa-virtual-background-2.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };



  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo Card 1 - White */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <Button
                onClick={handleDownloadLogo1}
                size="sm"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div id="logo-card-1" className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-16 aspect-square flex items-center justify-center">
              <div className="flex flex-col items-center justify-center leading-tight">
                <span className="text-4xl bg-gradient-to-r from-sky-500 via-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  JobAutometa
                </span>
              </div>
            </div>
          </div>

          {/* Logo Card 2 - Dark Gradient (Website Theme) */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <Button
                onClick={handleDownloadLogo2}
                size="sm"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div id="logo-card-2" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl border-2 border-blue-800/50 shadow-xl p-16 relative overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-sky-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center leading-tight">
                <span className="text-4xl text-white">
                  JobAutometa
                </span>
              </div>
            </div>
          </div>

          {/* Logo Card 3 - Creative Geometric Design */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <Button
                onClick={handleDownloadLogo3}
                size="sm"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div id="logo-card-3" className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-16 relative overflow-hidden aspect-square flex items-center justify-center">
              {/* Shapes behind the logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute left-1/4 top-1/3 w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-10"></div>
                <div className="absolute right-1/4 bottom-1/3 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl rotate-12 opacity-10"></div>
              </div>
              
              {/* Shapes in front and around the logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute left-1/3 top-1/4 w-10 h-10 border-2 border-sky-500/40 rounded-lg -rotate-12"></div>
                <div className="absolute left-1/4 top-1/3 w-5 h-5 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full opacity-30"></div>
                <div className="absolute right-1/3 top-1/3 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl rotate-45 opacity-20"></div>
                <div className="absolute right-1/4 top-1/4 w-8 h-8 border-2 border-blue-600/30 rounded-full"></div>
                <div className="absolute left-2/5 top-2/5 w-2 h-2 bg-sky-500/50 rounded-full"></div>
                <div className="absolute right-2/5 top-2/5 w-2 h-2 bg-blue-600/50 rounded-full"></div>
              </div>
              
              {/* Center logo */}
              <div className="relative z-10 flex flex-col items-center justify-center leading-tight">
                <span className="text-4xl bg-gradient-to-r from-sky-500 via-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  JobAutometa
                </span>
              </div>
            </div>
          </div>

          {/* Logo Card 4 - Creative Geometric Design (Bold) */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <Button
                onClick={handleDownloadLogo4}
                size="sm"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div id="logo-card-4" className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-16 relative overflow-hidden aspect-square flex items-center justify-center">
              {/* Shapes behind the logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute left-1/4 top-1/3 w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-10"></div>
                <div className="absolute right-1/4 bottom-1/3 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl rotate-12 opacity-10"></div>
              </div>
              
              {/* Shapes in front and around the logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute left-1/3 top-1/4 w-10 h-10 border-2 border-sky-500/40 rounded-lg -rotate-12"></div>
                <div className="absolute left-1/4 top-1/3 w-5 h-5 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full opacity-30"></div>
                <div className="absolute right-1/3 top-1/3 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl rotate-45 opacity-20"></div>
                <div className="absolute right-1/4 top-1/4 w-8 h-8 border-2 border-blue-600/30 rounded-full"></div>
                <div className="absolute left-2/5 top-2/5 w-2 h-2 bg-sky-500/50 rounded-full"></div>
                <div className="absolute right-2/5 top-2/5 w-2 h-2 bg-blue-600/50 rounded-full"></div>
              </div>
              
              {/* Center logo */}
              <div className="relative z-10 flex flex-col items-center justify-center leading-tight">
                <span className="text-4xl font-bold bg-gradient-to-r from-sky-500 via-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  JobAutometa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Background Preview Card 1 */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Virtual Meeting Background
            </h2>
            <Button
              onClick={handleDownloadBackground}
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full"
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Background Preview */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-slate-300 shadow-lg bg-white">
            {/* Geometric shapes on white side */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Circles */}
              <div className="absolute" style={{ right: '22%', top: '28%', width: '100px', height: '100px' }}>
                <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-8"></div>
              </div>
              <div className="absolute" style={{ right: '11%', top: '65%', width: '65px', height: '65px' }}>
                <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-8"></div>
              </div>
              
              {/* Squares */}
              <div className="absolute" style={{ right: '27%', bottom: '21%', width: '90px', height: '90px' }}>
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-8 rotate-12"></div>
              </div>
              
              {/* Outlined shapes */}
              <div className="absolute" style={{ right: '17%', top: '51%', width: '80px', height: '80px' }}>
                <div className="w-full h-full border-4 border-sky-500/15 -rotate-20"></div>
              </div>
              <div className="absolute" style={{ right: '6%', top: '42%', width: '40px', height: '40px' }}>
                <div className="w-full h-full border-4 border-sky-500/15 rounded-full"></div>
              </div>
              
              {/* Small accent dots */}
              <div className="absolute" style={{ right: '24%', top: '60%', width: '12px', height: '12px' }}>
                <div className="w-full h-full bg-sky-400/20 rounded-full"></div>
              </div>
              <div className="absolute" style={{ right: '8%', top: '19%', width: '10px', height: '10px' }}>
                <div className="w-full h-full bg-blue-500/20 rounded-full"></div>
              </div>
              <div className="absolute" style={{ right: '19%', bottom: '12%', width: '8px', height: '8px' }}>
                <div className="w-full h-full bg-sky-500/20 rounded-full"></div>
              </div>
            </div>
            
            {/* Diagonal split background */}
            <div className="absolute inset-0">
              {/* Blue gradient side (diagonal) */}
              <div 
                className="absolute inset-0" 
                style={{
                  clipPath: 'polygon(0 0, 70% 0, 30% 100%, 0 100%)',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 20%, #0369a1 40%, #1e40af 50%, #1e3a8a 65%, #1e293b 80%, #0f172a 100%)'
                }}
              >
                {/* Subtle pattern on blue side */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
                  backgroundSize: '100% 50px'
                }}></div>
              </div>
              
              {/* White side is the default background */}
            </div>
            
            {/* Logo in top right corner */}
            <div className="absolute top-16 right-16 z-10">
              <div className="flex flex-col items-start leading-tight">
                <span className="text-5xl font-bold bg-gradient-to-r from-sky-500 via-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  JobAutometa
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-6">
            1920 × 1080 • Perfect for Zoom, Teams, and Google Meet
          </p>
        </div>

        {/* Virtual Background Preview Card 2 - Geometric Pattern */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Virtual Meeting Background - Geometric
            </h2>
            <Button
              onClick={handleDownloadBackground2}
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full"
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Background Preview */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-slate-300 shadow-lg">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
            
            {/* Geometric circles pattern */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-10">
                {[...Array(8)].map((_, i) => 
                  [...Array(5)].map((_, j) => (
                    <circle
                      key={`${i}-${j}`}
                      cx={50 + i * 12.5 + '%'}
                      cy={20 + j * 20 + '%'}
                      r="40"
                      stroke="#0ea5e9"
                      strokeWidth="2"
                      fill="none"
                    />
                  ))
                )}
              </svg>
            </div>
            
            {/* Decorative glows */}
            <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-sky-500/15 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
            
            {/* Circle with logo in top left corner */}
            <div className="absolute top-8 left-8">
              <div className="relative flex items-center justify-center w-48 h-48">
                {/* Decorative circle - white and thin */}
                <div className="absolute inset-0 rounded-full border border-white/80"></div>
                
                {/* Logo centered in circle */}
                <div className="flex flex-col items-center justify-center leading-tight">
                  <span className="text-3xl text-white">
                    JobAutometa
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-6">
            1920 × 1080 • Perfect for Zoom, Teams, and Google Meet
          </p>
        </div>
      </div>
    </div>
  );
}
