import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { markdownToHtml } from './posts';

/** Read a Markdown file from the repo root (e.g. CODE_OF_CONDUCT.md), strip front matter, render to HTML. */
export async function getRootMarkdown(filename: string): Promise<{ title: string; html: string }> {
  const raw = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  return { title: data.title ? String(data.title) : '', html };
}
