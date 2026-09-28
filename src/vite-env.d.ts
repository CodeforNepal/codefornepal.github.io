/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'virtual:content' {
  interface RootMarkdown {
    title: string;
    html: string;
  }
  interface VirtualPost {
    slug: string;
    url: string;
    segments: string[];
    title: string;
    date: string;
    dateFormatted: string;
    dateToString: string;
    year: string;
    author: string;
    tags: string[];
    description: string;
    image?: string;
    excerpt: string;
  }
  const content: {
    posts: VirtualPost[];
    rootMarkdown: { codeOfConduct: RootMarkdown; privacy: RootMarkdown };
  };
  export default content;
}

declare module 'virtual:post-bodies' {
  /** Rendered post body HTML keyed by post URL. */
  const bodies: Record<string, string>;
  export default bodies;
}
