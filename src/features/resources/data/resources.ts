export interface ResourceItem {
  label: string
  link: string
  description: string
  imageUrl?: string
}

export interface ResourceCategory {
  label: string
  items: ResourceItem[]
}

const aiChatResources: ResourceItem[] = [
  {
    label: 'Claude',
    link: 'claude.ai',
    description:
      "Anthropic's AI assistant built to be helpful, harmless, and honest. Great for coding, analysis, and creative writing.",
    imageUrl: 'https://claude.ai/favicon.ico'
  },
  {
    label: 'ChatGPT',
    link: 'chatgpt.com',
    description:
      "OpenAI's conversational AI assistant for answering questions, writing content, brainstorming, and more.",
    imageUrl: 'https://chatgpt.com/favicon.ico'
  },
  {
    label: 'Gemini',
    link: 'gemini.google.com',
    description:
      "Google's AI assistant powered by Gemini models, integrated with Google services for research and productivity.",
    imageUrl: 'https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg'
  },
  {
    label: 'Perplexity',
    link: 'perplexity.ai',
    description:
      'AI-powered search engine that provides direct answers with cited sources, great for research and fact-checking.',
    imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png'
  },
  {
    label: 'Meta AI',
    link: 'meta.ai',
    description:
      "Meta's AI assistant powered by Llama models, available across Meta platforms for conversation and creative tasks.",
    imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/yw/r/RW7TzFbdkIL.ico'
  },
  {
    label: 'DeepSeek',
    link: 'chat.deepseek.com',
    description:
      "DeepSeek's AI chat assistant with strong reasoning and coding capabilities, built on open-source models.",
    imageUrl: 'https://cdn.deepseek.com/chat/icon.png'
  },
  {
    label: 'Microsoft Copilot',
    link: 'copilot.microsoft.com',
    description:
      "Microsoft's AI companion powered by GPT-4, integrated with Bing search for up-to-date information and creative tasks.",
    imageUrl: 'https://copilot.microsoft.com/favicon.ico'
  },
  {
    label: 'Grok',
    link: 'grok.com',
    description:
      "xAI's conversational AI with real-time access to information from the X platform and a witty personality.",
    imageUrl: 'https://grok.com/images/favicon.svg'
  },
  {
    label: 'Manus',
    link: 'manus.im',
    description:
      'AI agent that can autonomously complete tasks like research, data analysis, and content creation on your behalf.',
    imageUrl: 'https://manus.im/favicon.ico'
  },
  {
    label: 'Qwen Chat',
    link: 'chat.qwen.ai',
    description:
      "Alibaba's AI assistant powered by the Qwen model family, offering multilingual conversation, coding, and reasoning capabilities.",
    imageUrl: 'https://img.alicdn.com/imgextra/i1/O1CN013ltlI61OTOnTStXfj_!!6000000001706-55-tps-330-327.svg'
  },
  {
    label: 'NotebookLM',
    link: 'notebooklm.google.com',
    description:
      "Google's AI-powered research notebook that lets you upload sources and get AI-generated summaries and insights.",
    imageUrl: 'https://notebooklm.google.com/_/static/branding/v5/light_mode/favicon/favicon.svg'
  }
]

const websiteBuilderResources: ResourceItem[] = [
  {
    label: 'Lovable',
    link: 'lovable.dev',
    description:
      'AI-powered full-stack web app builder that lets you create production-ready applications from natural language prompts.',
    imageUrl: 'https://lovable.dev/favicon.ico'
  },
  {
    label: 'Bolt.new',
    link: 'bolt.new',
    description:
      "StackBlitz's AI-powered web development agent that can build, run, and deploy full-stack apps directly in the browser.",
    imageUrl: 'https://bolt.new/static/favicon-48x48.png'
  },
  {
    label: 'Emergent',
    link: 'www.emergentai.com',
    description:
      'AI-powered platform for building and deploying web applications with an intuitive interface and smart code generation.',
    imageUrl: 'https://app.emergent.sh/favicon.ico'
  }
]

const analyticsResources: ResourceItem[] = [
  {
    label: 'Google Analytics',
    link: 'analytics.google.com',
    description:
      "Google's web analytics service that tracks and reports website traffic, user behavior, and conversion data.",
    imageUrl: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg'
  },
  {
    label: 'Microsoft Clarity',
    link: 'clarity.microsoft.com',
    description:
      'Free analytics tool by Microsoft that provides session recordings, heatmaps, and insights into user behavior.',
    imageUrl: 'https://claritystatic.azureedge.net/images/logo.ico'
  },
  {
    label: 'Google Search Console',
    link: 'search.google.com/search-console',
    description:
      "Monitor your site's presence in Google Search results, fix indexing issues, and optimize search performance.",
    imageUrl: 'https://www.gstatic.com/search-console/scfe/favicon.png'
  },
  {
    label: 'Bing Webmaster Tools',
    link: 'www.bing.com/webmasters',
    description: "Microsoft's toolset to monitor and optimize your website's performance in Bing search results.",
    imageUrl: 'https://www.bing.com/favicon.ico'
  }
]

const automationResources: ResourceItem[] = [
  {
    label: 'Pica',
    link: 'www.picaos.com',
    description:
      'AI-native integration platform that connects your AI agents to third-party APIs with managed authentication and serverless actions.',
    imageUrl: 'https://www.picaos.com/favicon.ico'
  }
]

const deploymentResources: ResourceItem[] = [
  {
    label: 'Vercel',
    link: 'vercel.com',
    description:
      'Frontend cloud platform for deploying web applications with instant previews, edge functions, and seamless Git integration.',
    imageUrl: 'https://vercel.com/favicon.ico'
  },
  {
    label: 'Cloudflare Workers',
    link: 'workers.cloudflare.com',
    description:
      "Serverless execution environment that runs code on Cloudflare's global edge network for ultra-low latency.",
    imageUrl: 'https://workers.cloudflare.com/favicon.ico'
  },
  {
    label: 'Netlify',
    link: 'www.netlify.com',
    description:
      'Web development platform for building, deploying, and scaling modern web projects with continuous deployment from Git.',
    imageUrl: 'https://www.netlify.com/favicon.ico'
  },
  {
    label: 'Hostinger',
    link: 'www.hostinger.com',
    description:
      'Affordable web hosting provider offering shared, cloud, and VPS hosting with an intuitive control panel.',
    imageUrl: 'https://www.hostinger.com/favicon.ico'
  }
]

const imageResources: ResourceItem[] = [
  {
    label: 'Freepik',
    link: 'freepik.com',
    description:
      'Freepik offers a wide variety of free and premium photos, vectors, and illustrations for creative use.',
    imageUrl: 'https://fps.cdnpk.net/favicons/favicon.ico'
  },
  {
    label: 'Pexels',
    link: 'www.pexels.com',
    description:
      'Pexels provides a large library of free, high-resolution photos and videos for personal and commercial use.',
    imageUrl: 'https://www.pexels.com/favicon.ico'
  },
  {
    label: 'Unsplash',
    link: 'unsplash.com',
    description: 'Unsplash features a curated collection of free, high-quality images from photographers worldwide.',
    imageUrl: 'https://unsplash.com/favicon.ico'
  },
  {
    label: 'Pixabay',
    link: 'pixabay.com',
    description:
      'Pixabay offers a vast library of free images, videos, and vector graphics available for download and use.',
    imageUrl: 'https://pixabay.com/favicon.ico'
  },
  {
    label: 'unDraw',
    link: 'undraw.co/illustrations',
    description:
      'unDraw provides open-source illustrations that you can customize to suit your project needs, available for free use.',
    imageUrl: 'https://undraw.co/favicon.ico'
  }
]

const iconResources: ResourceItem[] = [
  {
    label: 'Lucide',
    link: 'lucide.dev/icons',
    description: 'Lucide offers a collection of beautifully crafted, customizable, and open-source SVG icons.',
    imageUrl: 'https://lucide.dev/favicon.ico'
  },
  {
    label: 'Radix Icons',
    link: 'radix-ui.com/icons',
    description: 'Radix Icons provides a set of crisp, high-quality SVG icons designed for modern UI development.',
    imageUrl: 'https://radix-ui.com/favicon.png'
  },
  {
    label: 'HeroIcons',
    link: 'heroicons.com',
    description: 'HeroIcons features a collection of free, hand-crafted SVG icons for use in your projects.',
    imageUrl: 'https://heroicons.com/favicon.ico'
  },
  {
    label: 'HTML Arrow Symbol',
    link: 'www.toptal.com/designers/htmlarrows',
    description: 'HTML Arrow Symbols offers a comprehensive library of HTML and CSS arrow symbols for web design.',
    imageUrl: 'https://www.toptal.com/designers/htmlarrows/assets/images/favicon.ico'
  }
]

const productivityResources: ResourceItem[] = [
  {
    label: 'Paraphrasing Tool',
    link: 'quillbot.com/paraphrasing-tool',
    description:
      "Quillbot's Paraphrasing Tool helps rewrite content quickly and improve clarity while preserving meaning.",
    imageUrl: 'https://quillbot.com/favicon.ico'
  },
  {
    label: 'Project Tree Generator',
    link: 'woochanleee.github.io/project-tree-generator',
    description: 'Generate a visual representation of your project structure effortlessly with this tool.',
    imageUrl: 'https://woochanleee.github.io/project-tree-generator/favicon.ico'
  },
  {
    label: 'JSON Hero',
    link: 'jsonhero.io',
    description: 'JSON Hero offers an easy way to view, edit, and manage JSON files with an intuitive interface.',
    imageUrl: 'https://jsonhero.io/favicon.ico'
  },
  {
    label: 'snappify',
    link: 'snappify.com/editor',
    description:
      'Snappify helps you create beautiful code snippets and visuals for documentation or social media sharing.',
    imageUrl: 'https://snappify.com/images/favicon-196.png'
  },
  {
    label: 'Icon Maker',
    link: 'ray.so/icon',
    description: "Ray.so's Icon Maker allows you to create simple and elegant icons for your projects with ease.",
    imageUrl: 'https://ray.so/favicon.ico'
  },
  {
    label: 'Excalidraw',
    link: 'excalidraw.com',
    description:
      'Excalidraw is a simple yet powerful virtual whiteboard for sketching hand-drawn-like diagrams and ideas.',
    imageUrl: 'https://excalidraw.com/favicon.ico'
  },
  {
    label: 'PIXLR',
    link: 'pixlr.com/photo-collage',
    description: "Experience the ease of making a collage masterpiece with Pixlr's free online collage maker.",
    imageUrl: 'https://pixlr.com/favicon-32x32.png'
  },
  {
    label: 'Remove BG',
    link: 'www.remove.bg',
    description:
      'Remove BG automatically removes backgrounds from images, providing a clean and transparent background in seconds.',
    imageUrl: 'https://www.remove.bg/favicon.ico'
  },
  {
    label: 'Napkin AI',
    link: 'www.napkin.ai',
    description: 'AI-powered tool that transforms text into visual diagrams, flowcharts, and infographics instantly.',
    imageUrl: 'https://www.napkin.ai/favicon.ico'
  }
]

const webPerformanceResources: ResourceItem[] = [
  {
    label: 'Open Graph',
    link: 'www.opengraph.xyz',
    description: 'Easily preview and generate Open Graph meta tags for enhancing link sharing on social media.',
    imageUrl: 'https://www.opengraph.xyz/favicon.ico'
  },
  {
    label: 'PageSpeed Insights',
    link: 'pagespeed.web.dev',
    description:
      "Analyze your site's performance and get suggestions to improve speed with Google's PageSpeed Insights.",
    imageUrl: 'https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png'
  },
  {
    label: 'Pingdom Website Speed Test',
    link: 'tools.pingdom.com',
    description: 'Test your website load time, analyze performance, and identify speed bottlenecks using Pingdom.',
    imageUrl: 'https://tools.pingdom.com/favicon.ico'
  }
]

const chromeExtensionResources: ResourceItem[] = [
  {
    label: 'AITDK SEO Extension',
    link: 'chromewebstore.google.com/detail/hhfkpjffbhledfpkhhcoidplcebgdgbk',
    description:
      'All-in-one SEO extension providing free website traffic, keyword density, Whois, and SEO analysis features.',
    imageUrl: 'https://aitdk.com/favicon.svg'
  },
  {
    label: 'ColorZilla',
    link: 'chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp',
    description: 'Advanced eyedropper, color picker, gradient generator and other colorful goodies.',
    imageUrl: 'https://www.colorzilla.com/images/favicon-32x32.png'
  },
  {
    label: 'Fake Filler',
    link: 'chromewebstore.google.com/detail/fake-filler/bnjjngeaknajbdcgpfkgnonkmififhfo',
    description: 'A form filler that fills all inputs on a page with fake/dummy data.'
  },
  {
    label: '1clickvpn',
    link: 'chromewebstore.google.com/detail/free-vpn-for-chrome-by-1c/fcfhplploccackoneaefokcmbjfbkenj',
    description: 'The simplest VPN for Chrome with one-click activation. Unblock websites and browse anonymously.'
  },
  {
    label: 'GoFullPage',
    link: 'chromewebstore.google.com/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl',
    description:
      'Capture a screenshot of your current page in entirety and reliably without requesting any extra permissions.'
  },
  {
    label: 'Google Analytics Debugger',
    link: 'chromewebstore.google.com/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna',
    description:
      'Prints useful information to the JavaScript console by enabling the debug version of Google Analytics.'
  },
  {
    label: 'JSONView',
    link: 'chromewebstore.google.com/detail/jsonview/gmegofmjomhknnokphhckolhcffdaihd',
    description: 'View JSON documents in the browser.'
  },
  {
    label: 'Microsoft Clarity Live',
    link: 'chromewebstore.google.com/detail/microsoft-clarity-live/cjfdbemmaeeohgibnhdhlakiahifjjcf',
    description: 'Watch how people are engaging with your site right from your site.'
  },
  {
    label: 'Mobile Simulator',
    link: 'chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk',
    description: 'Smartphone and tablet simulator on computer with several models to test mobile responsive websites.'
  },
  {
    label: 'React Developer Tools',
    link: 'chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
    description: 'Adds React debugging tools to the Chrome Developer Tools.'
  },
  {
    label: 'SEO Schema Visualizer',
    link: 'chromewebstore.google.com/detail/seo-schema-visualizer/obabcjddknfnjjeblajgnlflppnpgdhi',
    description: 'Visualize JSON-LD schema markup at the click of a button.'
  },
  {
    label: 'FireShot',
    link: 'chromewebstore.google.com/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg',
    description: 'Take full webpage screenshots. Capture, edit and save them to PDF/JPEG/GIF/PNG.'
  },
  {
    label: 'Wappalyzer',
    link: 'chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg',
    description: 'Identify web technologies used on websites.'
  },
  {
    label: 'Web Scraper',
    link: 'chromewebstore.google.com/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn',
    description: 'Web data extraction tool with an easy point-and-click interface for modern web.'
  }
]

export const resources: ResourceCategory[] = [
  { label: 'AI Chat', items: aiChatResources },
  { label: 'Website Builder', items: websiteBuilderResources },
  { label: 'Analytics', items: analyticsResources },
  { label: 'Automation', items: automationResources },
  { label: 'Deployment', items: deploymentResources },
  { label: 'Photographs', items: imageResources },
  { label: 'Icons Resources', items: iconResources },
  { label: 'Productivity', items: productivityResources },
  { label: 'Web Performance', items: webPerformanceResources },
  { label: 'Chrome Extensions', items: chromeExtensionResources }
]
