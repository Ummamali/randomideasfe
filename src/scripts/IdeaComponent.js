import { createCustomElement } from "./utils";

export default function IdeaComponent({
  id,
  content,
  category,
  authorName,
  postDate,
}) {
  const delBtn = createCustomElement("btn", {
    children: [createCustomElement("i", { class: "fa-solid fa-remove" })],
    class: "flex justify-end",
  });

  const contentEl = createCustomElement("p", {
    children: [content],
    class: "font-semibold text-sm mb-4",
  });

  const catEl = createCustomElement("p", {
    children: [category],
    class: `text-xs bg-green-500 inline-block px-3 py-1 rounded-sm uppercase mb-3`,
  });

  const footerEl = createCustomElement("p", {
    children: [],
    class: "idea-footer text-sm text-gray-600",
  });

  footerEl.innerHTML = `Posted on <span>${postDate}</span> by <span>${authorName}</span>`;

  const mainEl = createCustomElement("div", {
    children: [
      createCustomElement("div", { children: [delBtn, contentEl] }),
      createCustomElement("div", { children: [catEl, footerEl] }),
    ],
    class:
      "flex flex-col justify-between bg-white border border-gray-300 p-3 rounded shadow-sm min-h-[300px]",
  });
  return mainEl;
}
