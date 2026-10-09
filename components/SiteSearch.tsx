"use client";

import { useId, useRef, useState } from "react";
import type { Lang } from "@/content";
import { getSearchEntries, searchEntries } from "@/data/search";

export function SiteSearch({ lang, onOpen }: { lang: Lang; onOpen: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const firstResultRef = useRef<HTMLAnchorElement>(null);
  const [query, setQuery] = useState("");
  const id = useId();
  const fr = lang === "fr";
  const results = searchEntries(getSearchEntries(lang), query);
  function close() { dialogRef.current?.close(); }
  function open() {
    onOpen();
    setQuery("");
    dialogRef.current?.showModal();
    inputRef.current?.focus();
  }
  return (
    <>
      <button type="button" onClick={open} aria-label={fr ? "Rechercher sur le site" : "Search the site"} aria-haspopup="dialog" aria-controls={id}
        className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full text-olh-text-secondary hover:bg-olh-bg-light hover:text-olh-red focus-visible:ring-2 focus-visible:ring-olh-red">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
      </button>
      <dialog ref={dialogRef} id={id} aria-labelledby={id + "-title"}
        className="site-search fixed top-[10vh] m-0 mx-auto w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-olh-border bg-white p-0 shadow-2xl backdrop:bg-black/45"
        onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close(); } }}>
        <div className="flex items-center justify-between gap-4 px-5 pt-4">
          <h2 id={id + "-title"} className="text-lg font-bold">{fr ? "Rechercher" : "Search"}</h2>
          <button type="button" onClick={close} aria-label={fr ? "Fermer la recherche" : "Close search"} className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-olh-bg-light text-2xl">×</button>
        </div>
        <div className="px-5 pb-4">
          <label htmlFor={id + "-input"} className="sr-only">{fr ? "Rechercher sur le site" : "Search the site"}</label>
          <input ref={inputRef} id={id + "-input"} type="search" value={query} onChange={(event) => setQuery(event.target.value)}
            placeholder={fr ? "Rechercher un sujet, un service ou un emplacement…" : "Search topics, services or locations…"}
            autoComplete="off" className="w-full rounded-xl border border-olh-border bg-olh-bg-light px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-olh-red"
            onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); close(); } if (event.key === "Enter") { event.preventDefault(); firstResultRef.current?.click(); } if (event.key === "ArrowDown") { event.preventDefault(); firstResultRef.current?.focus(); } }} />
          <p role="status" className="mt-3 text-xs text-olh-text-secondary">{query.trim() ? (fr ? results.length + " résultat(s)" : results.length + (results.length === 1 ? " result" : " results")) : (fr ? "Commencez à taper pour filtrer les sujets du site." : "Start typing to filter topics across the site.")}</p>
        </div>
        <ul className="max-h-[55vh] overflow-y-auto border-t border-olh-border p-2">
          {results.map((entry, i) => <li key={entry.href}>
            <a ref={i === 0 ? firstResultRef : undefined} href={entry.href} onClick={close} className="block rounded-xl px-4 py-3 hover:bg-olh-red-tint focus:bg-olh-red-tint focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-olh-red">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-olh-red">{entry.page}</span>
              <span className="mt-1 block text-sm font-semibold text-olh-text-primary">{entry.title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-olh-text-secondary">{entry.text.length > 150 ? entry.text.slice(0, 150) + "…" : entry.text}</span>
            </a>
          </li>)}
          {!results.length && <li className="px-4 py-8 text-center text-sm text-olh-text-secondary">{fr ? "Aucun résultat. Essayez un autre mot ou un nom de communauté." : "No results. Try another word or a community name."}</li>}
        </ul>
      </dialog>
    </>
  );
}
