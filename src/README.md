# JobAutometa

AI-powered job application automation platform that helps job seekers land their dream jobs faster.

## Features

- 🤖 **Automated Applications**: We apply to jobs for you 24/7
- 📝 **Tailored Resumes**: AI + human expertise for every application
- 📊 **Personal Dashboard**: Track all your applications in one place
- 🎯 **Interview Coaching**: Expert guidance to ace your interviews
- ⚡ **87% Interview Rate**: Proven results with ATS-optimized applications

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + ShadCN
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jobautometa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect the framework (Vite)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## Project Structure

```
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   └── ...               # Feature components
├── pages/                # Page components
├── styles/               # Global styles
└── package.json          # Dependencies and scripts
```

## Environment Variables

If you're using Web3Forms for contact form submissions, create a `.env` file:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## Contact Form Setup

1. Get a free API key from [web3forms.com](https://web3forms.com)
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` in `/pages/ContactPage.tsx` (line 34) with your actual key
3. Or use environment variable: `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`

## License

All rights reserved © JobAutometa

## Support

For support, email hello@jobautometa.com
